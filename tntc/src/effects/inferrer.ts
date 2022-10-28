/* ----------------------------------------------------------------------------------
 * Copyright (c) Informal Systems 2022. All rights reserved.
 * Licensed under the Apache 2.0.
 * See License.txt in the project root for license information.
 * --------------------------------------------------------------------------------- */

/**
 * Inference for effects. Walks through a module and infers effects for all expressions.
 * See ADR 0004 for additional information
 *
 * @author Gabriela Moreira
 *
 * @module
 */

import { Either, right, left, mergeInMany } from '@sweet-monads/either'
import { LookupTable, LookupTableByModule, lookupValue, newTable } from '../lookupTable'
import { expressionToString } from '../IRprinting'
import { IRVisitor, walkModule } from '../IRVisitor'
import { TntApp, TntBool, TntEx, TntInt, TntLambda, TntLet, TntModule, TntModuleDef, TntName, TntOpDef, TntStr } from '../tntIr'
import { Effect, emptyVariables, unify, Signature, effectNames } from './base'
import { applySubstitution, Substitutions, compose } from './substitutions'
import { ErrorTree, errorTreeToString } from '../errorTree'
import { ScopeTree, treeFromModule } from '../scoping'

/**
 * Infers an effect for every expression in a module based on predefined
 * builtinSignatures and the definitions table for that module
 *
 * @param builtinSignatures a map from operator identifiers to their effect signature
 * @param lookupTable the collected definitions for the module under inference
 * @param module: the TNT module to infer effects for
 *
 * @returns a map from expression ids to their effects when inferrence succeeds.
 *          Otherwise, a map from expression ids to the corresponding error for
 *          the problematic expressions.
 */
export function inferEffects (builtinSignatures: Map<string, Signature>, lookupTable: LookupTableByModule, module: TntModule): Either<Map<bigint, ErrorTree>, Map<bigint, Effect>> {
  const visitor = new EffectInferrerVisitor(builtinSignatures, lookupTable)
  walkModule(visitor, module)
  if (visitor.errors.size > 0) {
    return left(visitor.errors)
  } else {
    return right(visitor.effects)
  }
}

/* Walks the IR from node to root inferring effects for expressions and
 * assigning them to the effects attribute map, to be used in upward
 * expressions. Errors are written to the errors attribute.
 */
class EffectInferrerVisitor implements IRVisitor {
  constructor (builtinSignatures: Map<string, Signature>, lookupTable: LookupTableByModule) {
    this.builtinSignatures = builtinSignatures
    this.lookupTable = lookupTable
  }

  effects: Map<bigint, Effect> = new Map<bigint, Effect>()
  errors: Map<bigint, ErrorTree> = new Map<bigint, ErrorTree>()

  private builtinSignatures: Map<string, Signature>
  private lookupTable: LookupTableByModule
  private freshVarCounters: Map<string, number> = new Map<string, number>()

  private currentModule?: TntModule
  private currentTable: LookupTable = newTable({})
  private currentScopeTree: ScopeTree = { value: 0n, children: [] }
  private moduleStack: TntModule[] = []

  private substitutions: Substitutions = []

  enterModuleDef (def: TntModuleDef): void {
    this.moduleStack.push(def.module)

    this.updateCurrentModule()
  }

  exitModuleDef (_: TntModuleDef): void {
    this.moduleStack.pop()

    this.updateCurrentModule()
  }

  exitName (expr: TntName): void {
    const def = lookupValue(this.currentTable, this.currentScopeTree, expr.name, expr.id)
    if (!def) {
      throw new Error(`Definition not found for name: ${expr.name}`)
    }
    switch (def.kind) {
      case 'param': {
        /*  { kind: 'param', identifier: p } ∈ Γ
         * ------------------------------------ (NAME-PARAM)
         *          Γ ⊢ v: Read[r_p]
         */
        if (!def.reference || !this.effects.has(def.reference)) {
          throw new Error(`Couldn't find an effect for lambda parameter named ${expr.name} in context`)
        }
        const paramEffect = this.effects.get(def.reference)!
        this.effects.set(expr.id, paramEffect)
        break
      }
      case 'const': {
        /* { kind: 'const', identifier: c } ∈ Γ
         * ------------------------------------- (NAME-CONST)
         *       Γ ⊢ c: Pure
         */
        const effect: Effect = {
          kind: 'concrete', read: emptyVariables, update: emptyVariables, temporal: emptyVariables,
        }
        this.effects.set(expr.id, effect)
        break
      }
      case 'var': {
        /*  { kind: 'var', identifier: v } ∈ Γ
         * ------------------------------------ (NAME-VAR)
         *          Γ ⊢ v: Read[v]
         */
        const effect: Effect = {
          kind: 'concrete', read: { kind: 'concrete', vars: [expr.name] }, update: emptyVariables, temporal: emptyVariables,
        }
        this.effects.set(expr.id, effect)
        break
      }
      default:
        /* { identifier: op, effect: E } ∈ Γ
         * -------------------------------------- (NAME-OP)
         *           Γ ⊢ op: E
         */
        this.fetchSignature(expr.name, expr.id, 2)
          .map(s => this.effects.set(expr.id, s))
    }
  }

  /* { identifier: op, effect: E } ∈ Γ    Γ ⊢ p0:E0 ... Γ ⊢ pn:EN
   * Eres <- freshVar   S = unify(E, (E0, ...,  EN) => Eres)
   * ------------------------------------------------------ (APP)
   *           Γ ⊢ op(p0, ..., pn): S(Eres)
   */
  exitApp (expr: TntApp): void {
    if (this.errors.size > 0) {
      // Don't try to infer application if there are errors with the args
      return
    }

    const location = `Trying to infer effect for operator application in ${expressionToString(expr)}`

    this.fetchSignature(expr.opcode, expr.id, expr.args.length)
      .mapLeft(m => this.errors.set(expr.id, { message: m, location: location, children: [] }))
      .map(signature => {
        const resultEffect: Effect = { kind: 'quantified', name: this.freshVar('e') }
        const effect: Effect = {
          kind: 'arrow',
          params: expr.args.map((a: TntEx) => {
            return this.effects.get(a.id)!
          }),
          result: resultEffect,
        }

        const substitution = unify(signature, effect)

        const resultEffectWithSubs = substitution.chain(s => compose(s, this.substitutions)).chain(s => {
          this.substitutions = s

          this.effects.forEach((effect, id) => {
            applySubstitution(s, effect).map(e => this.effects.set(id, e))
          })

          return applySubstitution(s, resultEffect)
        })

        return resultEffectWithSubs
          .map(e => this.effects.set(expr.id, e))
          .mapLeft(error => this.errors.set(expr.id, { location: location, children: [error] }))
      })
  }

  // Literals are always Pure
  exitLiteral (expr: TntBool | TntInt | TntStr): void {
    this.effects.set(expr.id, ({ kind: 'concrete', read: emptyVariables, update: emptyVariables, temporal: emptyVariables }))
  }

  /*                        Γ ⊢ e: E
   * ------------------------------------------------------------- (OPDEF)
   * Γ ∪ { identifier: op, effect: E } ⊢ (def op(params) = e): Pure
   */
  exitOpDef (def: TntOpDef): void {
    if (!this.effects.get(def.expr.id)) {
      this.errors.forEach(e => console.log(errorTreeToString(e)))
      return
    }
    const e = this.effects.get(def.expr.id)!

    // Set the expression effect as the definition effect for it to be available at the result
    this.effects.set(def.id, e)
  }

  /*     Γ ⊢ e: E
   * ----------------------- (LET)
   * Γ ⊢ <opdef> { e }: E
   */
  exitLet (expr: TntLet): void {
    if (this.errors.size > 0) {
      // Don't try to infer let if there are errors with the defined expression
      return
    }
    const e = this.effects.get(expr.expr.id)!

    this.effects.set(expr.id, e)
  }

  /*                  Γ ⊢ e: E
   * ---------------------------------------------- (LAMBDA)
   * Γ ⊢ (p0, ..., pn) => e: (E0, ..., En) => E
   */

  enterLambda (e: TntLambda): void {
    e.params.forEach(p => {
      const id = lookupValue(this.currentTable, this.currentScopeTree, p, e.expr.id)?.reference
      if (id) {
        this.effects.set(id, ({
          kind: 'quantified',
          name: `e_${p}_${e.id}`,
        }))
      }
    })
  }

  exitLambda (e: TntLambda): void {
    if (!this.effects.get(e.expr.id)) {
      return
    }
    const resultEffect = this.effects.get(e.expr.id)!

    const params = mergeInMany(e.params
      .map(p => {
        // BuiltinSignatures values are functions over arity, call it with arity 1 since
        // arity doesn't matter for lambda-introduced names
        const paramEffect: Effect = {
          kind: 'quantified',
          name: `e_${p}_${e.id}`,
        }
        return applySubstitution(this.substitutions, paramEffect)
      }))

    params.map(ps => {
      const effect: Effect = { kind: 'arrow', params: ps, result: resultEffect }
      this.effects.set(e.id, effect)
    })
  }

  private freshVar (prefix: string): string {
    const counter = this.freshVarCounters.get(prefix)! ?? 0
    this.freshVarCounters.set(prefix, counter + 1)

    return `${prefix}${counter}`
  }

  private fetchSignature (opcode: string, scope: bigint, arity: number): Either<string, Effect> {
    // Assumes a valid number of arguments
    let effect
    if (this.builtinSignatures.has(opcode)) {
      const signatureFunction = this.builtinSignatures.get(opcode)!
      effect = signatureFunction(arity)
    } else {
      const id = lookupValue(this.currentTable, this.currentScopeTree, opcode, scope)?.reference
      if (!id || !this.effects.has(id)) {
        throw new Error(`Signature not found for name: ${opcode}`)
      }
      effect = this.effects.get(id)!
    }
    return right(this.newInstance(effect))
  }

  private newInstance (effect: Effect): Effect {
    const names = effectNames(effect)
    const subs: Substitutions = names.map(name => {
      return { kind: name.kind, name: name.name, value: { kind: 'quantified', name: this.freshVar('v') } }
    })

    // FIXME: Add effect schemes to avoid this hack
    // We need to keep track of substitutions applied to lambda-introduced names (e.*), which are unique
    // But can't keep track of substitutions applied to builtin signatures because they will conflict
    compose(subs.filter(s => s.name.startsWith('e_')), this.substitutions).map(s => this.substitutions = s)

    const result = applySubstitution(subs, effect)
    if (result.isLeft()) {
      throw new Error(`Error applying fresh names substitution: ${errorTreeToString(result.value)} `)
    } else {
      return result.value
    }
  }

  private updateCurrentModule (): void {
    if (this.moduleStack.length > 0) {
      this.currentModule = this.moduleStack[this.moduleStack.length - 1]

      const moduleTable = this.lookupTable.get(this.currentModule!.name)!
      this.currentTable = moduleTable
      this.currentScopeTree = treeFromModule(this.currentModule)
    }
  }
}

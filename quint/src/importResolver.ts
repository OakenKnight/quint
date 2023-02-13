/* ----------------------------------------------------------------------------------
 * Copyright (c) Informal Systems 2022. All rights reserved.
 * Licensed under the Apache 2.0.
 * See License.txt in the project root for license information.
 * --------------------------------------------------------------------------------- */

/**
 * Visits imports and instances copying definitions from modules being imported or instantiated
 *
 * @author Gabriela Moreira
 *
 * @module
 */

import { LookupTable, LookupTableByModule, addTypeToTable, addValueToTable, copyNames, copyTable, mergeTables, newTable } from './lookupTable'
import { QuintImport, QuintInstance, QuintModule, QuintModuleDef } from './quintIr'
import { IRVisitor, walkModule } from './IRVisitor'
import { Either, left, right } from '@sweet-monads/either'
import { QuintError } from './quintError'

/**
 * A single import error
 */
export interface ImportError {
  /* The name of the module to be imported or instantiated */
  moduleName: string
  /* The reference of the import or instance definition */
  reference: bigint
  /* If importing a specific definition, the name of that definition */
  defName?: string
}

/**
 * The result of import resolution for a Quint Module.
 */
export type ImportResolutionResult = Either<Map<bigint, QuintError>, LookupTableByModule>

/**
 * Explores the IR visiting all imports and instances. For each one, tries to find a definition
 * table for the required module name, and if found, copies all unscoped non-default definitions
 * to the current module, including a namespace in case of instances.
 *
 * @param quintModule the Quint module for which imports should be resolved
 * @param definitions lookup table of collected names for all modules
 *
 * @returns a successful result with updated definitions in case all imports were resolved, or the errors otherwise
 */
export function resolveImports(quintModule: QuintModule, definitions: LookupTableByModule): ImportResolutionResult {
  const visitor = new ImportResolverVisitor(definitions)
  walkModule(visitor, quintModule)

  return visitor.errors.size > 0
    ? left(visitor.errors)
    : right(visitor.tables)
}

class ImportResolverVisitor implements IRVisitor {
  constructor(tables: LookupTableByModule) {
    this.tables = tables
  }

  tables: LookupTableByModule
  errors: Map<bigint, QuintError> = new Map<bigint, QuintError>()

  private currentModule: QuintModule = { name: '', defs: [], id: 0n }
  private currentTable: LookupTable = newTable({})
  private moduleStack: QuintModule[] = []

  enterModuleDef(def: QuintModuleDef): void {
    this.tables.set(this.currentModule.name, this.currentTable)

    this.moduleStack.push(def.module)
    this.updateCurrentModule()
  }

  exitModuleDef(def: QuintModuleDef): void {
    this.tables.set(def.module.name, this.currentTable)

    this.moduleStack.pop()
    this.updateCurrentModule()
  }

  enterInstance(def: QuintInstance): void {
    const moduleTable = this.tables.get(def.protoName)

    if (!moduleTable) {
      // Instancing unexisting module
      this.errors.set(def.id, {
        code: 'QNT404',
        message: `Module ${def.protoName} not found`,
        data: {},
      })
      return
    }
    const instanceTable = copyTable(moduleTable)

    // For each override, check if the name exists in the instanced module and is a constant.
    // If so, update the value definition to point to the expression being overriden
    def.overrides.forEach(([name, ex]) => {
      const valueDefs = instanceTable.valueDefinitions.get(name) ?? []

      if (valueDefs.length === 0) {
        this.errors.set(def.id, {
          code: 'QNT406',
          message: `Instantiation error: ${name} not found in ${def.protoName}`,
          data: {},
        })
      }

      if (!valueDefs.every(def => def.kind === 'const')) {
        this.errors.set(def.id, {
          code: 'QNT406',
          message: `Instantiation error: ${name} is not a constant`,
          data: {},
        })
      }
      const newDefs = valueDefs.map(def => ({ ...def, reference: ex.id }))
      instanceTable.valueDefinitions.set(name, newDefs)
    })

    // Copy the intanced module lookup table in a new lookup table for the instance
    this.tables.set(def.name, instanceTable)

    // All names from the instanced module should be acessible with the instance namespace
    // So, copy them to the current module's lookup table
    const newEntries = copyNames(instanceTable, def.name, this.currentModule.id)
    this.currentTable = mergeTables(this.currentTable, newEntries)
  }

  enterImport(def: QuintImport): void {
    const moduleTable = this.tables.get(def.path)
    if (!moduleTable) {
      // Importing unexisting module
      this.errors.set(def.id, {
        code: 'QNT404',
        message: `Module ${def.path} not found`,
        data: {},
      })
      return
    }

    const importableDefinitions = copyNames(moduleTable, '', this.currentModule.id)

    if (def.name === '*') {
      // Imports all definitions
      this.currentTable = mergeTables(this.currentTable, importableDefinitions)
    } else {
      // Tries to find a specific definition, reporting an error if not found
      if (!importableDefinitions.valueDefinitions.has(def.name)) {
        this.errors.set(def.id, {
          code: 'QNT405',
          message: `Name ${def.path}::${def.name} not found`,
          data: {},
        })
        return
      }

      // Copy type and value definitions for the imported name
      const valueDefs = importableDefinitions.valueDefinitions.get(def.name) ?? []
      valueDefs.forEach(def => addValueToTable(def, this.currentTable))
      const typeDefs = importableDefinitions.typeDefinitions.get(def.name) ?? []
      typeDefs.forEach(def => addTypeToTable(def, this.currentTable))

      // For value definitions, check if there are modules being imported
      valueDefs.forEach(definition => {
        if (definition.kind === 'module') {
          // Collect all definitions namespaced to module
          const importedModuleTable = this.tables.get(definition.identifier)

          if (!importedModuleTable) {
            // Importing a module without a lookup table for it
            this.errors.set(def.id, {
              code: 'QNT404',
              message: `Module ${def.path}::${definition.identifier} not found`,
              data: {},
            })
            return
          }

          const newEntries = copyNames(importedModuleTable!, definition.identifier, this.currentModule.id)
          this.currentTable = mergeTables(this.currentTable, newEntries)
        }
      })
    }
  }

  private updateCurrentModule(): void {
    if (this.moduleStack.length > 0) {
      this.currentModule = this.moduleStack[this.moduleStack.length - 1]

      if (!this.tables.has(this.currentModule.name)) {
        throw new Error(`Missing module: ${this.currentModule.name}`)
      }

      this.currentTable = this.tables.get(this.currentModule.name)!
    }
  }
}

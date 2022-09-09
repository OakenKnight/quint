import { describe, it } from 'mocha'
import { assert } from 'chai'
import { Maybe } from '@sweet-monads/maybe'
import { expressionToString } from '../../src/IRprinting'
import { compile } from '../../src/runtime/compile'
import { dedent } from '../textUtils'

function assertDefined<T> (m: Maybe<T>) {
  assert(m.isJust(), 'undefined value')
}

// Compile an expression, evaluate it, convert to TlaEx, then to a string,
// compare the result. This is the easiest path to test the results.
function assertResultAsString (input: string, result: string) {
  const moduleText = `module __runtime { val __expr = ${input} }`
  const context = compile(moduleText)
  const value = context.get('__expr')
  if (value === undefined) {
    assert(false, `Missing value for ${input}`)
  } else {
    assertDefined(
      value
        .eval()
        .map(r => r.toTntEx())
        .map(expressionToString)
        .map(s => assert(s === result, `Expected ${result}, found ${s}`))
    )
  }
}

describe('compiling specs to runtime values', () => {
  describe('compile over integers', () => {
    it('computes positive integer literals', () => {
      assertResultAsString('15', '15')
    })

    it('computes negative integer literals', () => {
      assertResultAsString('-15', '-15')
    })

    it('computes addition', () => {
      assertResultAsString('2 + 3', '5')
    })

    it('computes subtraction', () => {
      assertResultAsString('2 - 3', '-1')
    })

    it('computes negation', () => {
      assertResultAsString('-(2 + 3)', '-5')
    })

    it('computes multiplication', () => {
      assertResultAsString('2 * 3', '6')
    })

    it('computes division', () => {
      assertResultAsString('7 / 2', '3')
    })

    it('computes remainder', () => {
      assertResultAsString('7 % 2', '1')
    })

    it('computes power', () => {
      assertResultAsString('3^4', '81')
    })

    it('computes greater than', () => {
      assertResultAsString('5 > 3', 'true')
      assertResultAsString('5 > 5', 'false')
      assertResultAsString('3 > 5', 'false')
    })

    it('computes less than', () => {
      assertResultAsString('5 < 3', 'false')
      assertResultAsString('5 < 5', 'false')
      assertResultAsString('3 < 5', 'true')
    })

    it('computes greater than or equal', () => {
      assertResultAsString('5 >= 4', 'true')
      assertResultAsString('5 >= 5', 'true')
      assertResultAsString('4 >= 5', 'false')
    })

    it('computes less than or equal', () => {
      assertResultAsString('5 <= 4', 'false')
      assertResultAsString('5 <= 5', 'true')
      assertResultAsString('4 <= 5', 'true')
    })

    it('computes integer equality', () => {
      assertResultAsString('5 == 4', 'false')
      assertResultAsString('4 == 4', 'true')
    })

    it('computes integer inequality', () => {
      assertResultAsString('5 != 4', 'true')
      assertResultAsString('4 != 4', 'false')
    })
  })

  describe('compile over Booleans', () => {
    it('computes Boolean literals', () => {
      assertResultAsString('false', 'false')
      assertResultAsString('true', 'true')
    })

    it('computes not', () => {
      assertResultAsString('not(false)', 'true')
      assertResultAsString('not(true)', 'false')
    })

    it('computes and', () => {
      assertResultAsString('false and false', 'false')
      assertResultAsString('false and true', 'false')
      assertResultAsString('true and false', 'false')
      assertResultAsString('true and true', 'true')
    })

    it('computes or', () => {
      assertResultAsString('false or false', 'false')
      assertResultAsString('false or true', 'true')
      assertResultAsString('true or false', 'true')
      assertResultAsString('true or true', 'true')
    })

    it('computes implies', () => {
      assertResultAsString('false implies false', 'true')
      assertResultAsString('false implies true', 'true')
      assertResultAsString('true implies false', 'false')
      assertResultAsString('true implies true', 'true')
    })

    it('computes iff', () => {
      assertResultAsString('false iff false', 'true')
      assertResultAsString('false iff true', 'false')
      assertResultAsString('true iff false', 'false')
      assertResultAsString('true iff true', 'true')
    })

    it('computes Boolean equality', () => {
      assertResultAsString('false == false', 'true')
      assertResultAsString('true  == true', 'true')
      assertResultAsString('false == true', 'false')
      assertResultAsString('true  == false', 'false')
    })

    it('computes Boolean inequality', () => {
      assertResultAsString('false != false', 'false')
      assertResultAsString('true  != true', 'false')
      assertResultAsString('false != true', 'true')
      assertResultAsString('true  != false', 'true')
    })
  })

  describe('compile over other operators', () => {
    it('computes Boolean if-then-else', () => {
      assertResultAsString('if (false) false else true', 'true')
      assertResultAsString('if (true) false else true', 'false')
    })

    it('computes integer if-then-else', () => {
      assertResultAsString('if (3 > 5) 1 else 2', '2')
      assertResultAsString('if (5 > 3) 1 else 2', '1')
    })
  })

  describe('compile over definitions', () => {
    it('computes value definitions', () => {
      const input =
        `val x = 3 + 4
         val y = 2 * x
         y - x`
      assertResultAsString(input, '7')
    })

    it('computes multi-arg definitions', () => {
      const input =
        `def mult(x, y) = (x * y)
         mult(2, mult(3, 4))`
      assertResultAsString(input, '24')
    })

    it('uses named def instead of lambda', () => {
      const input =
        `def positive(x) = x > 0
         (-3).to(3).filter(positive)`
      assertResultAsString(input, 'set(1, 2, 3)')
    })
  })

  describe('compile over sets', () => {
    it('computes an interval', () => {
      const input = '2.to(5)'
      assertResultAsString(input, 'set(2, 3, 4, 5)')
    })

    it('computes a flat set', () => {
      const input = 'set(1, 3 - 1, 3)'
      assertResultAsString(input, 'set(1, 2, 3)')
    })

    it('computes a flat set without duplicates', () => {
      const input = 'set(1, 2, 3 - 1, 3, 1)'
      assertResultAsString(input, 'set(1, 2, 3)')
    })

    it('computes a set of sets', () => {
      const input = 'set(set(1, 2), set(2, 3), set(1, 3))'
      assertResultAsString(input, 'set(set(1, 2), set(1, 3), set(2, 3))')
    })

    it('computes a set of intervals', () => {
      const input = 'set(1.to(3), 3.to(4))'
      assertResultAsString(input, 'set(set(1, 2, 3), set(3, 4))')
    })

    it('computes equality over sets', () => {
      assertResultAsString('set(1, 2) == set(1, 3 - 1)', 'true')
      assertResultAsString('set(1, 2) == set(1, 3 - 3)', 'false')
    })

    it('computes equality over intervals', () => {
      assertResultAsString('1.to(3) == 1.to(4 - 1)', 'true')
      assertResultAsString('1.to(3) == set(1, 2, 3)', 'true')
      assertResultAsString('set(1, 2, 3) == 1.to(3)', 'true')
      assertResultAsString('(-3).to(4) == set(-3, -2, -1, 0, 1, 2, 3, 4)', 'true')
      assertResultAsString('(-2).to(-4) == set()', 'true')
      assertResultAsString('3.to(-2) == set()', 'true')
      assertResultAsString('1.to(3) == 1.to(4)', 'false')
      assertResultAsString('(-1).to(3) == 1.to(3)', 'false')
      assertResultAsString('2.to(4) == 1.to(4)', 'false')
      assertResultAsString('(-4).to(-2) == (-2).to(-4)', 'false')
      assertResultAsString('3.to(0) == 4.to(-1)', 'true')
    })

    it('computes inequality over sets', () => {
      assertResultAsString('set(1, 2) != set(1, 3 - 1)', 'false')
      assertResultAsString('set(1, 2) != set(1, 3 - 3)', 'true')
    })

    it('computes inequality over intervals', () => {
      assertResultAsString('1.to(3) != 1.to(4 - 1)', 'false')
      assertResultAsString('1.to(3) != set(1, 2, 3)', 'false')
      assertResultAsString('set(1, 2, 3) != 1.to(3)', 'false')
      assertResultAsString('1.to(3) != 1.to(4)', 'true')
      assertResultAsString('2.to(4) != 1.to(4)', 'true')
    })

    it('computes a set of sets without duplicates', () => {
      const input = 'set(set(1, 2), set(2, 3), set(1, 3), set(2 - 1, 2 + 1))'
      assertResultAsString(input, 'set(set(1, 2), set(1, 3), set(2, 3))')
    })

    it('computes contains', () => {
      assertResultAsString('set(1, 2, 3).contains(2)', 'true')
      assertResultAsString('set(1, 2, 3).contains(4)', 'false')
    })

    it('computes in', () => {
      assertResultAsString('2 in set(1, 2, 3)', 'true')
      assertResultAsString('4.in(set(1, 2, 3))', 'false')
    })

    it('computes in an interval', () => {
      assertResultAsString('2 in 1.to(3)', 'true')
      assertResultAsString('4.in(1.to(3))', 'false')
      assertResultAsString('1.to(3).in(set(1.to(3), 2.to(4)))', 'true')
    })

    it('computes in over nested sets', () => {
      assertResultAsString('set(1, 2) in set(set(1, 2), set(2, 3))', 'true')
      assertResultAsString('set(1, 3) in set(set(1, 2), set(2, 3))', 'false')
    })

    it('computes subseteq', () => {
      assertResultAsString('set(1, 2).subseteq(set(1, 2, 3))', 'true')
      assertResultAsString('set(1, 2, 4).subseteq(set(1, 2, 3))', 'false')
    })

    it('computes subseteq over intervals', () => {
      assertResultAsString('2.to(4).subseteq(1.to(10))', 'true')
      assertResultAsString('2.to(0).subseteq(3.to(0))', 'true')
      assertResultAsString('set(2, 3, 4).subseteq(1.to(10))', 'true')
      assertResultAsString('2.to(4).subseteq(1.to(3))', 'false')
      assertResultAsString('2.to(4).subseteq(set(1, 2, 3))', 'false')
    })

    it('computes union', () => {
      assertResultAsString('set(1, 2).union(set(1, 3))', 'set(1, 2, 3)')
      assertResultAsString('1.to(3).union(2.to(4))', 'set(1, 2, 3, 4)')
      assertResultAsString('set(1, 2, 3).union(2.to(4))', 'set(1, 2, 3, 4)')
      assertResultAsString('1.to(3).union(set(2, 3, 4))', 'set(1, 2, 3, 4)')
    })

    it('computes intersect', () => {
      assertResultAsString('set(1, 2).intersect(set(1, 3))', 'set(1)')
      assertResultAsString('1.to(3).intersect(2.to(4))', 'set(2, 3)')
      assertResultAsString('set(1, 2, 3).intersect(2.to(4))', 'set(2, 3)')
      assertResultAsString('1.to(3).intersect(set(2, 3, 4))', 'set(2, 3)')
    })

    it('computes exclude', () => {
      assertResultAsString('set(1, 2, 4).exclude(set(1, 3))', 'set(2, 4)')
      assertResultAsString('1.to(3).exclude(2.to(4))', 'set(1)')
      assertResultAsString('set(1, 2, 3).exclude(2.to(4))', 'set(1)')
      assertResultAsString('1.to(3).exclude(set(2, 3, 4))', 'set(1)')
    })

    it('computes flatten', () => {
      assertResultAsString(
        'set(set(1, 2), set(2, 3), set(3, 4)).flatten()',
        'set(1, 2, 3, 4)'
      )
    })

    it('computes flatten on nested sets', () => {
      assertResultAsString(
        'set(set(set(1, 2), set(2, 3)), set(set(3, 4))).flatten()',
        'set(set(1, 2), set(2, 3), set(3, 4))'
      )
    })

    it('computes exists', () => {
      assertResultAsString('set(1, 2, 3).exists(x => true)', 'true')
      assertResultAsString('set(1, 2, 3).exists(x => false)', 'false')
      assertResultAsString('set(1, 2, 3).exists(x => x >= 2)', 'true')
      assertResultAsString('set(1, 2, 3).exists(x => x >= 5)', 'false')
    })

    it('computes exists over intervals', () => {
      assertResultAsString('1.to(3).exists(x => true)', 'true')
      assertResultAsString('1.to(3).exists(x => false)', 'false')
      assertResultAsString('1.to(3).exists(x => x >= 2)', 'true')
      assertResultAsString('1.to(3).exists(x => x >= 5)', 'false')
    })

    it('computes forall', () => {
      assertResultAsString('set(1, 2, 3).forall(x => true)', 'true')
      assertResultAsString('set(1, 2, 3).forall(x => false)', 'false')
      assertResultAsString('set(1, 2, 3).forall(x => x >= 2)', 'false')
      assertResultAsString('set(1, 2, 3).forall(x => x >= 0)', 'true')
    })

    it('computes forall over nested sets', () => {
      const input =
        'set(set(1, 2), set(2, 3)).forall(s => 2 in s)'
      assertResultAsString(input, 'true')
    })

    it('computes forall over intervals', () => {
      assertResultAsString('1.to(3).forall(x => true)', 'true')
      assertResultAsString('1.to(3).forall(x => false)', 'false')
      assertResultAsString('1.to(3).forall(x => x >= 2)', 'false')
      assertResultAsString('1.to(3).forall(x => x >= 0)', 'true')
    })

    it('computes map', () => {
      // a bijection
      assertResultAsString('set(1, 2, 3).map(x => 2 * x)', 'set(2, 4, 6)')
      // not an injection: 2 and 3 are mapped to 1
      assertResultAsString('set(1, 2, 3).map(x => x / 2)', 'set(0, 1)')
    })

    it('computes map over intervals', () => {
      // a bijection
      assertResultAsString('1.to(3).map(x => 2 * x)', 'set(2, 4, 6)')
      // not an injection: 2 and 3 are mapped to 1
      assertResultAsString('1.to(3).map(x => x / 2)', 'set(0, 1)')
    })

    it('computes filter', () => {
      assertResultAsString('set(1, 2, 3, 4).filter(x => false)', 'set()')
      assertResultAsString('set(1, 2, 3, 4).filter(x => true)', 'set(1, 2, 3, 4)')
      assertResultAsString('set(1, 2, 3, 4).filter(x => x % 2 == 0)', 'set(2, 4)')
    })

    it('computes filter over intervals', () => {
      assertResultAsString('1.to(4).filter(x => false)', 'set()')
      assertResultAsString('1.to(4).filter(x => true)', 'set(1, 2, 3, 4)')
      assertResultAsString('1.to(4).filter(x => x % 2 == 0)', 'set(2, 4)')
    })

    it('computes filter over sets of intervals', () => {
      assertResultAsString('set(1.to(4), 2.to(3)).filter(S => S.contains(1))',
        'set(set(1, 2, 3, 4))')
      assertResultAsString('set(1.to(4), 2.to(3)).filter(S => S.contains(0))',
        'set()')
    })

    it('computes fold', () => {
      // sum
      assertResultAsString('set(1, 2, 3).fold(10, (v, x => v + x))', '16')
      assertResultAsString('set().fold(10, (v, x => v + x))', '10')
      // flatten
      const input1 = dedent(
        `set(1.to(3), 4.to(5), 6.to(7))
        |  .fold(set(0), (a, s => a.union(s)))`
      )
      assertResultAsString(input1, 'set(0, 1, 2, 3, 4, 5, 6, 7)')
      assertResultAsString('set().fold(set(), (a, s => a.union(s)))', 'set()')
      // product by using a definition
      const input2 = dedent(
        `def prod(x, y) = x * y;
        |2.to(4).fold(1, prod)`
      )
      assertResultAsString(input2, '24')
    })
  })
})

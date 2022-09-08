import { describe, it } from 'mocha'
import { assert } from 'chai'
import { parseType } from '../../src/types/parser'

describe('parseType', () => {
  it('parses tuple of literal types', () => {
    const type = parseType('(bool, int, str)')

    assert.isTrue(type.isRight())
    type.map(value => assert.deepEqual(value, {
      kind: 'tuple',
      elems: [
        { kind: 'bool', id: 1n },
        { kind: 'int', id: 2n },
        { kind: 'str', id: 3n },
      ],
      id: 4n,
    }))
  })

  it('parses operator with type vars', () => {
    const type = parseType('(a, b) => ((a) => b)')

    assert.isTrue(type.isRight())
    type.map(value => assert.deepEqual(value, {
      kind: 'oper',
      args: [
        { kind: 'var', name: 'a', id: 1n },
        { kind: 'var', name: 'b', id: 2n },
      ],
      res: {
        kind: 'oper',
        args: [
          { kind: 'var', name: 'a', id: 3n },
        ],
        res: { kind: 'var', name: 'b', id: 4n },
        id: 5n,
      },
      id: 6n,
    }))
  })

  it('parses function of const types', () => {
    const type = parseType('T1 -> (T2 -> T1)')

    assert.isTrue(type.isRight())
    type.map(value => assert.deepEqual(value, {
      kind: 'fun',
      arg: { kind: 'const', name: 'T1', id: 1n },
      res: {
        kind: 'fun',
        arg: { kind: 'const', name: 'T2', id: 2n },
        res: { kind: 'const', name: 'T1', id: 3n },
        id: 4n,
      },
      id: 5n,
    }))
  })

  it('parses records of sets and sequences', () => {
    const type = parseType('{ mySet: set(a), mySeq: seq(a) }')

    assert.isTrue(type.isRight())
    type.map(value => assert.deepEqual(value, {
      kind: 'record',
      fields: [
        { fieldName: 'mySet', fieldType: { kind: 'set', elem: { kind: 'var', name: 'a', id: 1n }, id: 2n } },
        { fieldName: 'mySeq', fieldType: { kind: 'seq', elem: { kind: 'var', name: 'a', id: 3n }, id: 4n } },
      ],
      id: 5n,
    }))
  })

  it('parses discriminated unions', () => {
    const type = parseType('| { tag: "a", a: int }\n| { tag: "b", b: bool }')

    assert.isTrue(type.isRight())
    type.map(value => assert.deepEqual(value, {
      kind: 'union',
      tag: 'tag',
      records: [
        { tagValue: 'a', fields: [{ fieldName: 'a', fieldType: { kind: 'int', id: 1n } }] },
        { tagValue: 'b', fields: [{ fieldName: 'b', fieldType: { kind: 'bool', id: 3n } }] },
      ],
      id: 5n,
    }))
  })

  it('throws error when type is invalid', () => {
    const type = parseType('set(bool, int)')

    assert.isTrue(type.isLeft())
    type.mapLeft(error => assert.sameDeepMembers(error, [
      {
        explanation: "mismatched input ',' expecting {'->', ')'}",
        locs: [{ start: { line: 0, col: 8, index: 8 }, end: { line: 0, col: 8, index: 8 } }],
      },
    ]))
  })
})
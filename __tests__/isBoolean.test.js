/* eslint-disable */
import { expect } from 'chai'
import isBoolean from '../src/isBoolean.js'

describe('isBoolean()', () => {

  it('returns true for primitive booleans', () => {
    expect(isBoolean(true)).to.equal(true)
    expect(isBoolean(false)).to.equal(true)
  })

  it('returns true for Boolean objects', () => {
    expect(isBoolean(new Boolean(true))).to.equal(true)
    expect(isBoolean(new Boolean(false))).to.equal(true)
    // Even weird Boolean objects should return true
    expect(isBoolean(new Boolean())).to.equal(true)
  })

  it('returns false for non-boolean primitives', () => {
    expect(isBoolean(1)).to.equal(false)
    expect(isBoolean(0)).to.equal(false)
    expect(isBoolean('true')).to.equal(false)
    expect(isBoolean('false')).to.equal(false)
    expect(isBoolean(Symbol('x'))).to.equal(false)
  })

  it('returns false for null and undefined', () => {
    expect(isBoolean(null)).to.equal(false)
    expect(isBoolean(undefined)).to.equal(false)
  })

  it('returns false for arrays, objects, and functions', () => {
    expect(isBoolean([])).to.equal(false)
    expect(isBoolean({})).to.equal(false)
    expect(isBoolean(() => {})).to.equal(false)
    expect(isBoolean(function () {})).to.equal(false)
  })

  it('returns false for NaN and Infinity', () => {
    expect(isBoolean(NaN)).to.equal(false)
    expect(isBoolean(Infinity)).to.equal(false)
  })

  it('returns false for wrapped non-boolean objects', () => {
    expect(isBoolean(new Number(1))).to.equal(false)
    expect(isBoolean(new String('test'))).to.equal(false)
    expect(isBoolean(Object('false'))).to.equal(false)
  })

  it('correctly evaluates deep nested values', () => {
    const obj = { a: { b: { c: new Boolean(true) }}}
    expect(isBoolean(obj.a.b.c)).to.equal(true)
  })

})

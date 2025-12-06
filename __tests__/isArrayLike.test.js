/* eslint-disable */
import { expect } from 'chai'
import isArrayLike from '../src/isArrayLike.js'

describe('isArrayLike()', () => {
  it('returns true for arrays', () => {
    expect(isArrayLike([1, 2, 3])).to.equal(true)
  })

  it('returns true for strings', () => {
    expect(isArrayLike('hello')).to.equal(true)
  })

  it('returns true for array-like objects', () => {
    const obj = { 0: 'a', 1: 'b', length: 2 }
    expect(isArrayLike(obj)).to.equal(true)
  })

  it('returns false for functions', () => {
    expect(isArrayLike(() => {})).to.equal(false)
  })

  it('returns false for null and undefined', () => {
    expect(isArrayLike(null)).to.equal(false)
    expect(isArrayLike(undefined)).to.equal(false)
  })

  it('returns false for objects without length', () => {
    expect(isArrayLike({ a: 1 })).to.equal(false)
  })

  it('returns false for negative length values', () => {
    expect(isArrayLike({ length: -5 })).to.equal(false)
  })

  it('returns false for non-integer length values', () => {
    expect(isArrayLike({ length: 2.5 })).to.equal(false)
  })

  it('returns true for typed arrays', () => {
    expect(isArrayLike(new Uint8Array(3))).to.equal(true)
  })

  it('returns false for length exceeding MAX_SAFE_INTEGER', () => {
    const obj = { length: Number.MAX_SAFE_INTEGER + 10 }
    expect(isArrayLike(obj)).to.equal(false)
  })
})

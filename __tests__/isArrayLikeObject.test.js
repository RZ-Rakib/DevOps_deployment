/* eslint-disable */
import { expect } from 'chai'
import isArrayLikeObject from '../src/isArrayLikeObject.js'

describe('isArrayLikeObject()', () => {
  it('returns true for normal arrays', () => {
    expect(isArrayLikeObject([1, 2, 3])).to.equal(true)
  })

  it('returns true for array-like objects with object type', () => {
    const obj = { 0: 'a', 1: 'b', length: 2 }
    expect(isArrayLikeObject(obj)).to.equal(true)
  })

  it('returns false for strings (array-like but NOT object-like)', () => {
    expect(isArrayLikeObject('abc')).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isArrayLikeObject(function () {})).to.equal(false)
  })

  it('returns false for null and undefined', () => {
    expect(isArrayLikeObject(null)).to.equal(false)
    expect(isArrayLikeObject(undefined)).to.equal(false)
  })

  it('returns false for numbers and booleans', () => {
    expect(isArrayLikeObject(123)).to.equal(false)
    expect(isArrayLikeObject(true)).to.equal(false)
  })

  it('returns true for typed arrays', () => {
    expect(isArrayLikeObject(new Uint8Array(3))).to.equal(true)
  })

  it('returns false for non-array-like objects', () => {
    expect(isArrayLikeObject({ a: 1 })).to.equal(false)
  })

  it('returns false for objects missing length', () => {
    expect(isArrayLikeObject({ 0: 'a', 1: 'b' })).to.equal(false)
  })
})

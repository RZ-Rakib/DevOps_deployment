/* eslint-disable */
import { expect } from 'chai'
import isTypedArray from '../src/isTypedArray.js'

describe('isTypedArray()', () => {
  it('returns true for valid typed arrays', () => {
    expect(isTypedArray(new Uint8Array(2))).to.equal(true)
    expect(isTypedArray(new Uint16Array(3))).to.equal(true)
    expect(isTypedArray(new Float32Array(4))).to.equal(true)
  })

  it('returns false for normal arrays', () => {
    expect(isTypedArray([])).to.equal(false)
    expect(isTypedArray([1, 2, 3])).to.equal(false)
  })

  it('returns false for objects', () => {
    expect(isTypedArray({})).to.equal(false)
    expect(isTypedArray({ length: 2 })).to.equal(false)
  })

  it('returns false for null and undefined', () => {
    expect(isTypedArray(null)).to.equal(false)
    expect(isTypedArray(undefined)).to.equal(false)
  })

  it('returns false for strings and numbers', () => {
    expect(isTypedArray('abc')).to.equal(false)
    expect(isTypedArray(123)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isTypedArray(() => {})).to.equal(false)
  })

  // it('returns false for Buffer (Node.js)', () => {
  //   const buf = Buffer.from([1, 2, 3])
  //   expect(isTypedArray(buf)).to.equal(false)
  // })
})

/* eslint-disable */
import { expect } from 'chai'
import isBuffer from '../src/isBuffer.js'

describe('isBuffer()', () => {
  it('returns true for Node.js Buffer instances', () => {
    const buf = Buffer.from([1, 2, 3])
    expect(isBuffer(buf)).to.equal(true)
  })

  it('returns false for Uint8Array and other TypedArrays', () => {
    expect(isBuffer(new Uint8Array(3))).to.equal(false)
    expect(isBuffer(new Float32Array(4))).to.equal(false)
  })

  it('returns false for normal arrays', () => {
    expect(isBuffer([1, 2, 3])).to.equal(false)
  })

  it('returns false for objects', () => {
    expect(isBuffer({})).to.equal(false)
    expect(isBuffer({ length: 3 })).to.equal(false)
  })

  it('returns false for null and undefined', () => {
    expect(isBuffer(null)).to.equal(false)
    expect(isBuffer(undefined)).to.equal(false)
  })

  it('returns false for strings and numbers', () => {
    expect(isBuffer('hello')).to.equal(false)
    expect(isBuffer(123)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isBuffer(() => {})).to.equal(false)
  })
})

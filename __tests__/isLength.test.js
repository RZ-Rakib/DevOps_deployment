/* eslint-disable */
import { expect } from 'chai'
import isLength from '../src/isLength.js'

describe('isLength()', () => {
  it('returns true for valid lengths', () => {
    expect(isLength(0)).to.equal(true)
    expect(isLength(5)).to.equal(true)
    expect(isLength(Number.MAX_SAFE_INTEGER)).to.equal(true)
  })

  it('returns false for negative numbers', () => {
    expect(isLength(-1)).to.equal(false)
    expect(isLength(-100)).to.equal(false)
  })

  it('returns false for non-integer numbers', () => {
    expect(isLength(2.5)).to.equal(false)
    expect(isLength(1.1)).to.equal(false)
  })

  it('returns false for Infinity', () => {
    expect(isLength(Infinity)).to.equal(false)
  })

  it('returns false for values greater than MAX_SAFE_INTEGER', () => {
    expect(isLength(Number.MAX_SAFE_INTEGER + 1)).to.equal(false)
  })

  it('returns false for non-number types', () => {
    expect(isLength('3')).to.equal(false)
    expect(isLength(true)).to.equal(false)
    expect(isLength(null)).to.equal(false)
    expect(isLength(undefined)).to.equal(false)
    expect(isLength({})).to.equal(false)
    expect(isLength([])).to.equal(false)
  })
})

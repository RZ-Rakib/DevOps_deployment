/* eslint-disable */
import { expect } from 'chai'
import isDate from '../src/isDate.js'

describe('isDate()', () => {

  it('returns true for valid Date objects', () => {
    expect(isDate(new Date())).to.equal(true)
  })

  it('returns true for invalid Date objects (still Date instances)', () => {
    expect(isDate(new Date('invalid date'))).to.equal(true)
  })

  it('returns false for date strings', () => {
    expect(isDate('2024-01-01')).to.equal(false)
    expect(isDate('Mon April 23 2012')).to.equal(false)
  })

  it('returns false for numbers', () => {
    expect(isDate(1700000000000)).to.equal(false)
  })

  it('returns false for plain objects', () => {
    expect(isDate({})).to.equal(false)
  })

  it('returns false for objects that mimic dates', () => {
    const fakeDate = {
      getTime() { return Date.now() }
    }
    expect(isDate(fakeDate)).to.equal(false)
  })

  // it('returns false for objects spoofing [object Date] without being Date instances', () => {
  //   const fakeTagObject = {
  //     [Symbol.toStringTag]: 'Date'
  //   }
  //   expect(isDate(fakeTagObject)).to.equal(false)
  // })

  it('returns false for arrays', () => {
    expect(isDate([new Date()])).to.equal(false)
  })

  it('returns false for null and undefined', () => {
    expect(isDate(null)).to.equal(false)
    expect(isDate(undefined)).to.equal(false)
  })

  it('returns false for boolean values', () => {
    expect(isDate(true)).to.equal(false)
    expect(isDate(false)).to.equal(false)
  })

  it('returns false for functions', () => {
    expect(isDate(() => {})).to.equal(false)
  })

  it('handles Node.js util.types.isDate when available', () => {

    expect(isDate(new Date())).to.equal(true)
    expect(isDate('not-date')).to.equal(false)
  })

})

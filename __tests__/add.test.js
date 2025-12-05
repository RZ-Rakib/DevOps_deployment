/* eslint-disable */
import { expect } from 'chai'
import add from '../src/add.js'

describe('add()', () => {

  it('adds two positive numbers', () => {
    expect(add(6, 4)).to.equal(10)
  })

  it('adds a negative and a positive number', () => {
    expect(add(-3, 7)).to.equal(4)
  })

  it('returns defaultValue when both values are undefined', () => {
    expect(add(undefined, undefined)).to.equal(0)
  })

  it('uses first number when second is undefined', () => {
    expect(add(5, undefined)).to.equal(5)
  })

  it('uses second number when first is undefined', () => {
    expect(add(undefined, 8)).to.equal(8)
  })

  it('treats null as 0', () => {
    expect(add(null, 3)).to.equal(3)
  })

  it('adds string numbers correctly', () => {
    expect(add("5", "7")).to.equal(12)
  })

  it('concatenates when either argument is string', () => {
    expect(add("5", 7)).to.equal("57")
  })

  it('returns NaN for non-numeric values', () => {
    expect(add("a", 3)).to.satisfy(Number.isNaN)
  })

  it('handles Symbol values (returns NaN)', () => {
    const sym = Symbol("s")
    expect(add(sym, 3)).to.satisfy(Number.isNaN)
  })

  it('handles negative zero correctly', () => {
    // baseToString has a special case to return "-0"
    expect(add(-0, 0)).to.equal(0)
  })

})

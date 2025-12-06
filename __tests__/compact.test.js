/* eslint-disable */
import { expect } from 'chai'
import compact from '../src/compact.js'

describe('compact()', () => {
  it('removes all falsey values from a basic array', () => {
    const input = [0, 1, false, 2, '', 3, null, undefined, NaN]
    const result = compact(input)
    expect(result).to.deep.equal([1, 2, 3])
  })

  it('returns an empty array when given an empty array', () => {
    const input = []
    const result = compact(input)
    expect(result).to.deep.equal([])
  })

  it('returns an empty array when all values are falsey', () => {
    const input = [0, false, '', null, undefined, NaN]
    const result = compact(input)
    expect(result).to.deep.equal([])
  })

  it('preserves the order of truthy values', () => {
    const input = [1, 'a', true, {}, [], 'last']
    const result = compact(input)
    expect(result).to.deep.equal([1, 'a', true, {}, [], 'last'])
  })

  it('keeps object and array references unchanged', () => {
    const obj = { a: 1 }
    const arr = [1, 2]
    const input = [0, obj, false, arr, null]
    const result = compact(input)

    expect(result).to.have.lengthOf(2)
    expect(result[0]).to.equal(obj)
    expect(result[1]).to.equal(arr)
  })

  it('handles nested arrays as truthy values', () => {
    const input = [0, [1, 2], [0, false], '', [[3]]]
    const result = compact(input)
    expect(result).to.deep.equal([[1, 2], [0, false], [[3]]])
  })

  it('treats non-empty strings as truthy and empty strings as falsey', () => {
    const input = ['', ' ', '0', 'false', 'text']
    const result = compact(input)
    expect(result).to.deep.equal([' ', '0', 'false', 'text'])
  })

  it('handles boolean-only arrays correctly', () => {
    const input = [true, false, true, false]
    const result = compact(input)
    expect(result).to.deep.equal([true, true])
  })

  it('throws a TypeError when called with non-iterable input', () => {
    expect(() => compact(null)).to.throw(TypeError)
    expect(() => compact(undefined)).to.throw(TypeError)
    expect(() => compact(123)).to.throw(TypeError)
  })
})

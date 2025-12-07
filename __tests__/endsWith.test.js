/* eslint-disable */
import { expect } from 'chai'
import endsWith from '../src/endsWith.js'

describe('endsWith()', () => {
  it('returns true when string ends with target', () => {
    expect(endsWith('abc', 'c')).to.equal(true)
    expect(endsWith('hello', 'lo')).to.equal(true)
  })

  it('returns false when string does NOT end with target', () => {
    expect(endsWith('abc', 'b')).to.equal(false)
    expect(endsWith('hello', 'he')).to.equal(false)
  })

  it('works with custom position: true when target matches before position', () => {
    expect(endsWith('abc', 'b', 2)).to.equal(true)
    expect(endsWith('abcdef', 'de', 5)).to.equal(true)
  })

  it('works with custom position: false when target does not match before position', () => {
    expect(endsWith('abc', 'c', 2)).to.equal(false)
  })

  it('treats position greater than string length as full length', () => {
    expect(endsWith('abc', 'c', 99)).to.equal(true)
  })

  it('treats negative position as 0', () => {
    expect(endsWith('abc', 'a', -5)).to.equal(false)
  })

  it('treats NaN position as 0', () => {
    expect(endsWith('abc', 'a', NaN)).to.equal(false)
  })

  it('returns true when target is empty string', () => {
    expect(endsWith('abc', '')).to.equal(true)
    expect(endsWith('', '')).to.equal(true)
  })

  it('returns false when string is empty but target is not', () => {
    expect(endsWith('', 'a')).to.equal(false)
  })

  it('coerces position using +position', () => {
    expect(endsWith('abc', 'b', '2')).to.equal(true)
    expect(endsWith('abc', 'c', '3')).to.equal(true)
  })

  it('handles long strings and long targets', () => {
    expect(endsWith('javascript', 'script')).to.equal(true)
    expect(endsWith('javascript', 'java')).to.equal(false)
  })

  it('works with repeated characters', () => {
    expect(endsWith('aaaaa', 'aaa')).to.equal(true)
    expect(endsWith('aaaaa', 'aaaaaa')).to.equal(false)
  })
})

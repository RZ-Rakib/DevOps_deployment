/* eslint-disable */
import { expect } from 'chai'
import keys from '../src/keys.js'

describe('keys()', () => {
  it('returns keys of a plain object', () => {
    const obj = { a: 1, b: 2 }
    expect(keys(obj)).to.deep.equal(['a', 'b'])
  })

  it('returns numeric index keys for arrays', () => {
    expect(keys([10, 20, 30])).to.deep.equal(['0', '1', '2'])
  })

  it('handles sparse arrays (keeps index keys)', () => {
    const arr = []
    arr[5] = 'x'
    expect(keys(arr)).to.deep.equal(['0', '1', '2', '3', '4', '5'])
  })

  it('returns character indexes for strings', () => {
    expect(keys('abc')).to.deep.equal(['0', '1', '2'])
  })

  it('works with array-like objects', () => {
    const obj = { 0: 'a', 1: 'b', length: 2 }
    expect(keys(obj)).to.deep.equal(['0', '1', 'length'])
  })

  it('ignores prototype properties', () => {
    function Foo() {
      this.a = 1
      this.b = 2
    }
    Foo.prototype.c = 3

    expect(keys(new Foo())).to.have.members(['a', 'b'])
    expect(keys(new Foo())).to.not.include('c')
  })

  it('returns empty array for null and undefined', () => {
    expect(keys(null)).to.deep.equal([])
    expect(keys(undefined)).to.deep.equal([])
  })

  it('handles objects with non-enumerable properties', () => {
    const obj = {}
    Object.defineProperty(obj, 'hidden', {
      value: true,
      enumerable: false
    })
    expect(keys(obj)).to.deep.equal([])
  })
})

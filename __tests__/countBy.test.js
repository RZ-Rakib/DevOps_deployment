/* eslint-disable */
import { expect } from 'chai'
import countBy from '../src/countBy.js'

describe('countBy()', () => {
  it('counts values by iteratee result for an array of objects', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'betty', active: true },
      { user: 'fred', active: false }
    ]

    const result = countBy(users, (value) => value.active)

    expect(result).to.deep.equal({ true: 2, false: 1 })
  })

  it('counts numbers by a derived key (parity)', () => {
    const numbers = [1, 2, 3, 4, 5, 6]

    const result = countBy(numbers, (n) => (n % 2 === 0 ? 'even' : 'odd'))

    expect(result).to.deep.equal({ odd: 3, even: 3 })
  })

  it('works with string collections (array-like)', () => {
    const result = countBy('aabbccA', (ch) => ch.toLowerCase())

    expect(result).to.deep.equal({ a: 3, b: 2, c: 2 })
  })

  it('works with plain objects as collections', () => {
    const collection = { a: 1, b: 2, c: 1, d: 3 }

    const result = countBy(collection, (v) => v)

    expect(result).to.deep.equal({ 1: 2, 2: 1, 3: 1 })
  })

  it('returns an empty object for empty collections', () => {
    expect(countBy([], (v) => v)).to.deep.equal({})
    expect(countBy({}, (v) => v)).to.deep.equal({})
  })

  it('returns an empty object when collection is null or undefined', () => {
    expect(countBy(null, (v) => v)).to.deep.equal({})
    expect(countBy(undefined, (v) => v)).to.deep.equal({})
  })

  it('handles special keys like "__proto__" without prototype pollution', () => {
    const input = ['__proto__', '__proto__', 'normal']

    const result = countBy(input, (v) => v)

    expect(result).to.have.property('__proto__', 2)
    expect(result).to.have.property('normal', 1)

    expect({}.polluted).to.equal(undefined)
  })
})

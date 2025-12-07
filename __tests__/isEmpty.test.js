/* eslint-disable */
import { expect } from "chai"
import isEmpty from "../src/isEmpty.js"

describe("isEmpty()", () => {
  it("returns true for null", () => {
    expect(isEmpty(null)).to.equal(true)
  })

  it("returns true for undefined", () => {
    expect(isEmpty(undefined)).to.equal(true)
  })

  it("returns true for boolean primitives", () => {
    expect(isEmpty(true)).to.equal(true)
    expect(isEmpty(false)).to.equal(true)
  })

  it("returns true for numbers", () => {
    expect(isEmpty(0)).to.equal(true)
    expect(isEmpty(42)).to.equal(true)
    expect(isEmpty(NaN)).to.equal(true)
  })

  it("returns false for non-empty strings", () => {
    expect(isEmpty("abc")).to.equal(false)
  })

  it("returns true for empty string", () => {
    expect(isEmpty("")).to.equal(true)
  })

  it("returns false for non-empty arrays", () => {
    expect(isEmpty([1, 2, 3])).to.equal(false)
  })

  it("returns true for empty arrays", () => {
    expect(isEmpty([])).to.equal(true)
  })

  it("returns false for array-like objects with length > 0", () => {
    const obj = { length: 1, 0: "x" }
    expect(isEmpty(obj)).to.equal(false)
  })

  it("returns true for array-like objects with length 0", () => {
    const obj = { length: 0 }
    expect(isEmpty(obj)).to.equal(true)
  })

  it("returns true for empty arguments", () => {
    (function () {
      expect(isEmpty(arguments)).to.equal(true)
    })()
  })

  it("returns false for non-empty arguments", () => {
    (function () {
      expect(isEmpty(arguments)).to.equal(false)
    })(1)
  })

  it("returns true for empty Buffer", () => {
    const buf = Buffer.alloc(0)
    expect(isEmpty(buf)).to.equal(true)
  })

  it("returns false for non-empty Buffer", () => {
    const buf = Buffer.from([1])
    expect(isEmpty(buf)).to.equal(false)
  })

  it("returns true for empty typed arrays", () => {
    expect(isEmpty(new Uint8Array(0))).to.equal(true)
  })

  it("returns false for non-empty typed arrays", () => {
    expect(isEmpty(new Uint8Array([5]))).to.equal(false)
  })

  it("returns true for empty Map", () => {
    expect(isEmpty(new Map())).to.equal(true)
  })

  it("returns false for non-empty Map", () => {
    const m = new Map()
    m.set("a", 1)
    expect(isEmpty(m)).to.equal(false)
  })

  it("returns true for empty Set", () => {
    expect(isEmpty(new Set())).to.equal(true)
  })

  it("returns false for non-empty Set", () => {
    const s = new Set([1])
    expect(isEmpty(s)).to.equal(false)
  })

  it("returns true for prototype objects with no own keys", () => {
    function Foo() {}
    expect(isEmpty(Foo.prototype)).to.equal(true)
  })

  it("returns false for prototype objects with own keys", () => {
    function Foo() {}
    Foo.prototype.x = 1
    expect(isEmpty(Foo.prototype)).to.equal(false)
  })

  it("returns true for empty plain objects", () => {
    expect(isEmpty({})).to.equal(true)
  })

  it("returns false for plain objects with own properties", () => {
    expect(isEmpty({ a: 1 })).to.equal(false)
  })

  it("returns true when object has only inherited properties", () => {
    const parent = { a: 1 }
    const child = Object.create(parent)
    expect(isEmpty(child)).to.equal(true)
  })

  it("returns true for functions with no own properties", () => {
    function fn() {}
    expect(isEmpty(fn)).to.equal(true)
  })

  it("returns false for functions with own properties", () => {
    function fn() {}
    fn.x = 10
    expect(isEmpty(fn)).to.equal(false)
  })
})

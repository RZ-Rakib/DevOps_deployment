/* eslint-disable */
import { expect } from "chai"
import eq from "../src/eq.js"

describe("eq()", () => {
  it("returns true for strictly equal primitives", () => {
    expect(eq(5, 5)).to.equal(true)
    expect(eq("a", "a")).to.equal(true)
  })

  it("returns false for different primitive values", () => {
    expect(eq(5, 6)).to.equal(false)
    expect(eq("a", "b")).to.equal(false)
  })

  it("returns true when comparing the same object reference", () => {
    const obj = { a: 1 }
    expect(eq(obj, obj)).to.equal(true)
  })

  it("returns false when comparing two identical but separate object references", () => {
    expect(eq({ a: 1 }, { a: 1 })).to.equal(false)
  })

  it("treats primitive and object wrapper as equal", () => {
    expect(eq("a", Object("a"))).to.equal(true)
    expect(eq(1, Object(1))).to.equal(true)
  })

  it("returns true when both values are NaN", () => {
    expect(eq(NaN, NaN)).to.equal(true)
  })

  it("returns false when only one value is NaN", () => {
    expect(eq(NaN, 1)).to.equal(false)
    expect(eq("a", NaN)).to.equal(false)
  })

  it("returns true for -0 and 0 (SameValueZero behavior)", () => {
    expect(eq(-0, 0)).to.equal(true)
  })

  it("returns true when both values are undefined", () => {
    expect(eq(undefined, undefined)).to.equal(true)
  })

  it("returns true when both values are null", () => {
    expect(eq(null, null)).to.equal(true)
  })

  it("treats null and undefined as equal", () => {
    expect(eq(null, undefined)).to.equal(true)
  })

  it("treats different types as equal when == considers them equal", () => {
    expect(eq(1, "1")).to.equal(true)
    expect(eq(true, 1)).to.equal(true)
  })
})


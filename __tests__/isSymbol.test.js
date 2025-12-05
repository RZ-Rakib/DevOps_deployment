/* eslint-disable */

import { expect } from "chai";
import isSymbol from "../src/isSymbol.js";

describe("isSymbol()", () => {
  
  it("returns true for a primitive symbol", () => {
    expect(isSymbol(Symbol("x"))).to.equal(true);
  });

  it("returns true for Symbol.iterator", () => {
    expect(isSymbol(Symbol.iterator)).to.equal(true);
  });

  it("returns true for a Symbol object wrapper", () => {
    expect(isSymbol(Object(Symbol("test")))).to.equal(true);
  });

  it("returns false for a string", () => {
    expect(isSymbol("abc")).to.equal(false);
  });

  it("returns false for a number", () => {
    expect(isSymbol(123)).to.equal(false);
  });

  it("returns false for null", () => {
    expect(isSymbol(null)).to.equal(false);
  });

  it("returns false for undefined", () => {
    expect(isSymbol(undefined)).to.equal(false);
  });

  it("returns false for an object", () => {
    expect(isSymbol({})).to.equal(false);
  });

  it("returns false for an array", () => {
    expect(isSymbol([1, 2, 3])).to.equal(false);
  });

  it("returns false for a function", () => {
    expect(isSymbol(() => {})).to.equal(false);
  });

  it("returns false for a boolean", () => {
    expect(isSymbol(true)).to.equal(false);
  });

});

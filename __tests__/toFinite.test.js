/* eslint-disable */

import { expect } from "chai";
import toFinite from "../src/toFinite.js";

describe("toFinite()", () => {

  it("returns 0 for null, undefined, false, and empty string", () => {
    expect(toFinite(null)).to.equal(0);
    expect(toFinite(undefined)).to.equal(0);
    expect(toFinite(false)).to.equal(0);
    expect(toFinite("")).to.equal(0);
  });

  it("returns the same number for finite numeric input", () => {
    expect(toFinite(3.2)).to.equal(3.2);
    expect(toFinite(-10.8)).to.equal(-10.8);
    expect(toFinite(0)).to.equal(0);
  });

  it("converts numeric strings correctly", () => {
    expect(toFinite("3.2")).to.equal(3.2);
    expect(toFinite("10")).to.equal(10);
    expect(toFinite("-7.5")).to.equal(-7.5);
  });

  it("returns 0 for non-numeric strings", () => {
    expect(toFinite("abc")).to.equal(0);
    expect(toFinite(" ")).to.equal(0);
  });

  it("converts Infinity to MAX_INTEGER", () => {
    expect(toFinite(Infinity)).to.equal(1.7976931348623157e+308);
  });

  it("converts -Infinity to -MAX_INTEGER", () => {
    expect(toFinite(-Infinity)).to.equal(-1.7976931348623157e+308);
  });

  it("handles boolean values correctly", () => {
    expect(toFinite(true)).to.equal(1);
    expect(toFinite(false)).to.equal(0);
  });

  it("handles objects using valueOf()", () => {
    expect(toFinite({ valueOf: () => 5.5 })).to.equal(5.5);
  });

  it("returns 0 for objects without valid numeric conversion", () => {
    expect(toFinite({})).to.equal(0);
  });

  it("handles arrays", () => {
    expect(toFinite([5])).to.equal(5);
    expect(toFinite([3.2])).to.equal(3.2);
    expect(toFinite([1, 2])).to.equal(0);
  });

});

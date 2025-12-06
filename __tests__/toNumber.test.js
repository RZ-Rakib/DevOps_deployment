/* eslint-disable */

import { expect } from "chai";
import toNumber from "../src/toNumber.js";

describe("toNumber()", () => {

  it("returns number unchanged when input is a number", () => {
    expect(toNumber(10)).to.equal(10);
    expect(toNumber(-5.2)).to.equal(-5.2);
  });

  it("converts numeric strings to numbers", () => {
    expect(toNumber("3.5")).to.equal(3.5);
    expect(toNumber("  42 ")).to.equal(42);
  });

  it("returns NaN for invalid numbers", () => {
    expect(isNaN(toNumber("abc"))).to.equal(true);
  });

  it("handles binary string numbers", () => {
    expect(toNumber("0b101")).to.equal(5);
  });

  it("handles octal string numbers", () => {
    expect(toNumber("0o17")).to.equal(15);
  });

  it("returns NaN for bad hex values", () => {
    expect(isNaN(toNumber("-0x123"))).to.equal(true);
  });

  it("converts objects using valueOf()", () => {
    const obj = { valueOf: () => 7 };
    expect(toNumber(obj)).to.equal(7);
  });

  it("converts objects that stringify to a number", () => {
    expect(toNumber({ toString: () => "12" })).to.equal(12);
  });

  it("returns NaN for symbols", () => {
    expect(isNaN(toNumber(Symbol("x")))).to.equal(true);
  });

  it("handles boolean values", () => {
    expect(toNumber(true)).to.equal(1);
    expect(toNumber(false)).to.equal(0);
  });

  it("handles null and undefined", () => {
    expect(toNumber(null)).to.equal(0);
    expect(isNaN(toNumber(undefined))).to.equal(true);
  });

});

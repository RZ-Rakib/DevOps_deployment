/* eslint-disable */

import { expect } from "chai";
import toInteger from "../src/toInteger.js";

describe("toInteger()", () => {

  it("converts floating numbers to integer by truncation", () => {
    expect(toInteger(3.2)).to.equal(3);
    expect(toInteger(9.99)).to.equal(9);
    expect(toInteger(-4.7)).to.equal(-4);
  });

  it("returns 0 for Number.MIN_VALUE", () => {
    expect(toInteger(Number.MIN_VALUE)).to.equal(0);
  });

  it("converts Infinity to max allowed finite integer", () => {
    expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
    expect(toInteger(-Infinity)).to.equal(-1.7976931348623157e+308);
  });

  it("converts numeric strings to integer", () => {
    expect(toInteger("3.2")).to.equal(3);
    expect(toInteger("8.99")).to.equal(8);
  });

  it("returns 0 for non-numeric string", () => {
    expect(toInteger("abc")).to.equal(0);
    expect(toInteger(" ")).to.equal(0);
  });

  it("handles boolean values correctly", () => {
    expect(toInteger(true)).to.equal(1);
    expect(toInteger(false)).to.equal(0);
  });

  it("handles null and undefined", () => {
    expect(toInteger(null)).to.equal(0);
    expect(toInteger(undefined)).to.equal(0);
  });

  it("handles objects using valueOf() or string coercion", () => {
    expect(toInteger({ valueOf: () => 4.7 })).to.equal(4);
    expect(toInteger({})).to.equal(0);
  });

  it("handles arrays", () => {
    expect(toInteger([5])).to.equal(5);
    expect(toInteger([3.9])).to.equal(3);
    expect(toInteger([1, 2])).to.equal(0);
  });

});

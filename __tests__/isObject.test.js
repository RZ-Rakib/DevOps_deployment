/* eslint-disable */

import { expect } from "chai";
import isObject from "../src/isObject.js";

describe("isObject()", () => {

  it("returns true for plain objects", () => {
    expect(isObject({})).to.equal(true);
  });

  it("returns true for arrays", () => {
    expect(isObject([1, 2, 3])).to.equal(true);
  });

  it("returns true for functions", () => {
    expect(isObject(() => {})).to.equal(true);
  });

  it("returns true for object wrappers (new Number, new String)", () => {
    expect(isObject(new Number(5))).to.equal(true);
    expect(isObject(new String("abc"))).to.equal(true);
  });

  it("returns false for null", () => {
    expect(isObject(null)).to.equal(false);
  });

  it("returns false for primitives", () => {
    expect(isObject(5)).to.equal(false);
    expect(isObject("abc")).to.equal(false);
    expect(isObject(true)).to.equal(false);
  });

  it("returns false for undefined", () => {
    expect(isObject(undefined)).to.equal(false);
  });

});

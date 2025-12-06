/* eslint-disable */

import { expect } from "chai";
import isObjectLike from "../src/isObjectLike.js";

describe("isObjectLike function", () => {

  it("returns true for plain objects", () => {
    expect(isObjectLike({})).to.equal(true);
  });

  it("returns true for arrays", () => {
    expect(isObjectLike([1, 2, 3])).to.equal(true);
  });

  it("returns true for Date objects", () => {
    expect(isObjectLike(new Date())).to.equal(true);
  });

  it("returns true for RegExp objects", () => {
    expect(isObjectLike(/abc/)).to.equal(true);
  });

  it("returns false for null", () => {
    expect(isObjectLike(null)).to.equal(false);
  });

  it("returns false for functions", () => {
    expect(isObjectLike(function () {})).to.equal(false);
  });

  it("returns false for primitives (string, number, boolean)", () => {
    expect(isObjectLike("hello")).to.equal(false);
    expect(isObjectLike(123)).to.equal(false);
    expect(isObjectLike(true)).to.equal(false);
  });

  it("returns false for undefined", () => {
    expect(isObjectLike(undefined)).to.equal(false);
  });

});

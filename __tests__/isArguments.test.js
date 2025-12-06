/* eslint-disable*/
import { expect } from "chai";
import isArguments from "../src/isArguments.js";

describe("isArguments function", () => {

  it("returns true for actual arguments object", () => {
    const result = (function () { return isArguments(arguments); })();
    expect(result).to.equal(true);
  });

  it("returns false for arrays", () => {
    expect(isArguments([1,2,3])).to.equal(false);
  });

  it("returns false for plain objects", () => {
    expect(isArguments({ a: 1 })).to.equal(false);
  });

  it("returns false for null", () => {
    expect(isArguments(null)).to.equal(false);
  });

  it("returns false for undefined", () => {
    expect(isArguments(undefined)).to.equal(false);
  });

  it("returns false for numbers", () => {
    expect(isArguments(123)).to.equal(false);
  });

  it("returns false for functions", () => {
    expect(isArguments(() => {})).to.equal(false);
  });

});

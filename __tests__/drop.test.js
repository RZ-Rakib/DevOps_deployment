/* eslint-disable */
import { expect } from "chai";
import drop from "../src/drop.js";

describe("drop()", () => {
  it("drops 1 element by default", () => {
    expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
  });

  it("drops n elements when n is provided", () => {
    expect(drop([1, 2, 3], 2)).to.deep.equal([3]);
  });

  it("returns an empty array when n exceeds array length", () => {
    expect(drop([1, 2, 3], 10)).to.deep.equal([]);
  });

  it("returns the same array when n is 0", () => {
    expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
  });

  it("treats negative n as 0", () => {
    expect(drop([1, 2, 3], -5)).to.deep.equal([1, 2, 3]);
  });

  it("returns empty array when input array is null or undefined", () => {
    expect(drop(null)).to.deep.equal([]);
    expect(drop(undefined)).to.deep.equal([]);
  });

  it("coerces n using toInteger()", () => {
    expect(drop([1, 2, 3, 4], "2")).to.deep.equal([3, 4]);
    expect(drop([1, 2, 3, 4], 2.8)).to.deep.equal([3, 4]);
  });

  it("works with arrays containing mixed types", () => {
    expect(drop(["a", 1, true, null], 1)).to.deep.equal([1, true, null]);
  });

  it("fails to return correct slice because slice() is broken (expected)", () => {
    const result = drop([1, 2, 3], 1);
    expect(result).to.deep.equal([2, 3]);
  });

  it("returns empty array when dropping exact length", () => {
    expect(drop([1, 2, 3], 3)).to.deep.equal([]);
  });
});

/*eslint-disable*/
import { expect } from "chai";
import difference from "../src/difference.js";

describe("difference()", () => {
  it("returns values from the first array that are not in the second", () => {
    expect(difference([2, 1], [2, 3])).to.deep.equal([1]);
  });

  it("handles multiple exclusion arrays", () => {
    expect(difference([1, 2, 3, 4], [2], [3, 5])).to.deep.equal([1, 4]);
  });

  it("preserves the original order of the first array", () => {
    expect(difference(["a", "b", "c"], ["b"])).to.deep.equal(["a", "c"]);
  });

  it("preserves reference identity for remaining values", () => {
    const obj = { a: 1 };
    const arr = [obj];
    expect(difference(arr, [])[0]).to.equal(obj);
  });

  it("treats NaN as equal to NaN (SameValueZero)", () => {
    expect(difference([NaN, 1], [NaN])).to.deep.equal([1]);
  });

  it("treats -0 and +0 as equal (SameValueZero)", () => {
    expect(difference([-0, 1], [+0])).to.deep.equal([1]);
  });

  it("optimizes large values list using SetCache", () => {
    const large = Array.from({ length: 300 }, (_, i) => i);
    const array = [500, 600, 1];
    expect(difference(array, large)).to.deep.equal([500, 600]);
  });

  it("flattens exclusion arrays one level deep", () => {
    expect(difference([1, 2, 3], [[2], 4])).to.deep.equal([1, 3]);
  });

  it("handles array-like objects", () => {
    const arrayLike = { 0: "x", 1: "y", length: 2 };
    expect(difference(arrayLike, ["y"])).to.deep.equal(["x"]);
  });

  it("returns empty array when first argument is not array-like", () => {
    expect(difference(null, [1])).to.deep.equal([]);
    expect(difference(undefined, [1])).to.deep.equal([]);
    expect(difference(123, [1])).to.deep.equal([]);
  });
});

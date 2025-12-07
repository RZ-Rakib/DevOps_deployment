/* eslint-disable */
import { expect } from "chai";
import filter from "../src/filter.js";

describe("filter()", () => {

  it("returns an array of values that satisfy the predicate", () => {
    const result = filter([1, 2, 3, 4], n => n % 2 === 0);
    expect(result).to.deep.equal([2, 4]);
  });

  // it("returns an empty array when no values satisfy the predicate", () => {
  //   const result = filter([1, 2, 3], n => n > 10);
  //   expect(result).to.deep.equal([]);
  // });

  it("passes correct arguments to predicate (value, index, array)", () => {
    const calls = [];
    filter(["a", "b"], (value, index, array) => {
      calls.push([value, index, array]);
      return false;
    });
    expect(calls).to.deep.equal([
      ["a", 0, ["a", "b"]],
      ["b", 1, ["a", "b"]],
    ]);
  });

  // it("returns empty array when input array is null", () => {
  //   expect(filter(null, () => true)).to.deep.equal([]);
  // });

  // it("returns empty array when input array is undefined", () => {
  //   expect(filter(undefined, () => true)).to.deep.equal([]);
  // });

  it("works with mixed-type arrays", () => {
    const data = [1, "two", false, { a: 1 }, null];
    const result = filter(data, value => value);
    expect(result).to.deep.equal([1, "two", { a: 1 }]);
  });

  it("stops early if predicate always returns false (but no side effects)", () => {
    let count = 0;
    filter([10, 20, 30], () => { count++; return false; });
    expect(count).to.equal(3);
  });

  it("throws an error when predicate is not a function", () => {
    expect(() => filter([1, 2], null)).to.throw();
    expect(() => filter([1, 2], "not a function")).to.throw();
  });

});

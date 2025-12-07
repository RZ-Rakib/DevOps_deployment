/* eslint-disable */
import { expect } from "chai";
import map from "../src/map.js";

describe("map()", () => {

  it("maps values of a normal array", () => {
    const result = map([1, 2, 3], n => n * 2);
    expect(result).to.deep.equal([2, 4, 6]);
  });

  it("passes correct arguments to the iteratee (value, index, array)", () => {
    const calls = [];
    map([10, 20], (value, index, array) => {
      calls.push([value, index, array]);
    });
    expect(calls).to.deep.equal([
      [10, 0, [10, 20]],
      [20, 1, [10, 20]]
    ]);
  });

  it("returns an empty array when given null", () => {
    expect(map(null, n => n)).to.deep.equal([]);
  });

  it("returns an empty array when given undefined", () => {
    expect(map(undefined, n => n)).to.deep.equal([]);
  });

  it("works with array-like objects", () => {
    const arrayLike = { 0: "x", 1: "y", length: 2 };
    const result = map(arrayLike, v => v + "!");
    expect(result).to.deep.equal(["x!", "y!"]);
  });

  it("handles iteratee returning different types", () => {
    const result = map([1, 2], (v) => (v === 1 ? "one" : { num: v }));
    expect(result).to.deep.equal(["one", { num: 2 }]);
  });

  it("preserves result length equal to input length", () => {
    const result = map([1, 2, 3], () => 0);
    expect(result.length).to.equal(3);
  });

  it("throws if iteratee is not a function", () => {
    expect(() => map([1, 2, 3], null)).to.throw();
  });

});

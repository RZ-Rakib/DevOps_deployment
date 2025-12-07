/*eslint-disable */
import { expect } from "chai";
import reduce from "../src/reduce.js";

describe("reduce()", () => {

  it("reduces an array with an initial accumulator", () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n, 0);
    expect(result).to.equal(6);
  });

  it("uses first array element as accumulator when none is provided", () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n);
    // accumulator = 1, then 1+2=3, 3+3=6
    expect(result).to.equal(6);
  });

  it("reduces an object with an explicit accumulator", () => {
    const obj = { a: 1, b: 2, c: 3 };

    const result = reduce(
      obj,
      (acc, value, key) => {
        acc.push([key, value]);
        return acc;
      },
      []
    );

    expect(result).to.deep.equal([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]);
  });

  it("reduces an object without an accumulator (first value becomes accumulator)", () => {
    const obj = { a: 2, b: 3, c: 4 };
    const result = reduce(obj, (acc, value) => acc + value);

    // accumulator starts as first property value: 2
    // 2 + 3 + 4 = 9
    expect(result).to.equal(9);
  });

  it("passes correct iteratee arguments (accumulator, value, key/index, collection)", () => {
    const arr = ["x", "y"];
    const calls = [];

    reduce(arr, (acc, value, index, collection) => {
      calls.push({ acc, value, index, isSameCollection: collection === arr });
      return acc;
    }, 0);

    expect(calls).to.deep.equal([
      { acc: 0, value: "x", index: 0, isSameCollection: true },
      { acc: 0, value: "y", index: 1, isSameCollection: true },
    ]);
  });

  it("handles empty arrays when accumulator is provided", () => {
    const result = reduce([], (acc, n) => acc + n, 10);
    expect(result).to.equal(10);
  });

  it("returns undefined for empty array with no accumulator (matches internal behavior)", () => {
    const result = reduce([], () => {});
    expect(result).to.equal(undefined);
  });

  it("handles null or undefined collections by returning the accumulator", () => {
    const fn = (acc, n) => acc + n;

    expect(reduce(null, fn, 5)).to.equal(5);
    expect(reduce(undefined, fn, 5)).to.equal(5);
  });

  it("reduces array-like objects (string)", () => {
    const result = reduce("abc", (acc, char) => acc + char, "");
    expect(result).to.equal("abc");
  });

  // it("handles early iteratee termination when iteratee returns false", () => {
  //   const result = reduce([1, 2, 3, 4], (acc, n) => {
  //     if (n === 3) return false;
  //     return acc + n;
  //   }, 0);

  //   expect(result).to.equal(3);
  // });

});

/* eslint-disable */

import { expect } from "chai";
import slice from "../src/slice.js";

describe("slice()", () => {
  it("creates a slice from a starting index", () => {
    const arr = [1, 2, 3, 4];
    expect(slice(arr, 2)).to.deep.equal([3, 4]);
  });

  it("creates a slice between start and end", () => {
    const arr = [1, 2, 3, 4];
    expect(slice(arr, 1, 3)).to.deep.equal([2, 3]);
  });

  it("handles negative start index", () => {
    const arr = [1, 2, 3, 4];
    expect(slice(arr, -2)).to.deep.equal([3, 4]);
  });

  it("handles negative end index", () => {
    const arr = [1, 2, 3, 4];
    expect(slice(arr, 0, -1)).to.deep.equal([1, 2, 3]);
  });

  it("returns empty array when array is null or undefined", () => {
    expect(slice(null, 1)).to.deep.equal([]);
    expect(slice(undefined, 1)).to.deep.equal([]);
  });

  // it("returns entire array when start=0 and end >= length", () => {
  //   const arr = [1, 2, 3];
  //   expect(slice(arr, 0, 10)).to.deep.equal([1, 2, 3]);
  // });

  it("handles start > end (returns empty array)", () => {
    const arr = [1, 2, 3];
    expect(slice(arr, 3, 1)).to.deep.equal([]);
  });
});

/* eslint-disable */

import { expect } from "chai";
import chunk from "../src/chunk.js";

describe("chunk()", () => {

  // it("splits an array into chunks of given size", () => {
  //   expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([
  //     ['a', 'b'],
  //     ['c', 'd']
  //   ]);
  // });

  // it("handles chunk sizes larger than array length", () => {
  //   expect(chunk(['a', 'b'], 5)).to.deep.equal([
  //     ['a', 'b']
  //   ]);
  // });

  // it("creates a final chunk with remaining elements", () => {
  //   expect(chunk(['a', 'b', 'c', 'd', 'e'], 2)).to.deep.equal([
  //     ['a', 'b'],
  //     ['c', 'd'],
  //     ['e']
  //   ]);
  // });

  // it("defaults size to 1 when not provided", () => {
  //   expect(chunk(['a', 'b', 'c'])).to.deep.equal([
  //     ['a'], ['b'], ['c']
  //   ]);
  // });

  it("returns empty array for null input", () => {
    expect(chunk(null, 2)).to.deep.equal([]);
  });

  it("returns empty array when size < 1", () => {
    expect(chunk(['a', 'b'], 0)).to.deep.equal([]);
    expect(chunk(['a', 'b'], -5)).to.deep.equal([]);
  });

  // it("coerces string sizes to integer correctly", () => {
  //   expect(chunk(['a', 'b', 'c', 'd'], "2")).to.deep.equal([
  //     ['a', 'b'],
  //     ['c', 'd']
  //   ]);
  // });

  it("handles non-array input by treating length as 0", () => {
    expect(chunk(123, 2)).to.deep.equal([]);
    expect(chunk({}, 2)).to.deep.equal([]);
  });

  // it("handles undefined size safely", () => {
  //   expect(chunk(['x', 'y'])).to.deep.equal([['x'], ['y']]);
  // });

});

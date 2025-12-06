/* eslint-disable */

import { expect } from "chai";
import castArray from "../src/castArray.js";

describe("castArray()", () => {
  it("wraps non-array primitive values in an array", () => {
    expect(castArray(5)).to.deep.equal([5]);
  });

  it("wraps objects in an array", () => {
    expect(castArray({ a: 1 })).to.deep.equal([{ a: 1 }]);
  });

  it("returns the same array instance when input is already an array", () => {
    const arr = [1, 2, 3];
    expect(castArray(arr)).to.equal(arr);
  });

  it("wraps null in an array", () => {
    expect(castArray(null)).to.deep.equal([null]);
  });

  it("wraps undefined in an array", () => {
    expect(castArray(undefined)).to.deep.equal([undefined]);
  });

  it("returns array containing undefined when called with no arguments", () => {
    expect(castArray()).to.deep.equal([undefined]);
  });

  it("handles multiple arguments by only using the first argument", () => {
    expect(castArray(1, 2, 3)).to.deep.equal([1]);
  });
});

/* eslint-disable */

import { expect } from "chai";
import clamp from "../src/clamp.js";

describe("clamp()", () => {

  it("clamps a number within the given lower and upper bounds", () => {
    expect(clamp(3, 1, 5)).to.equal(3);
  });

  it("returns the lower bound when number is below range", () => {
    expect(clamp(-10, -5, 5)).to.equal(-5);
  });

  it("returns the upper bound when number is above range", () => {
    expect(clamp(10, -5, 5)).to.equal(5);
  });

  it("coerces inputs to numbers", () => {
    expect(clamp("10", "0", "8")).to.equal(8);
    expect(clamp("3", "1", "10")).to.equal(3);
  });

  it("handles NaN bounds by treating them as 0", () => {
    expect(clamp(5, NaN, 10)).to.equal(10);
    expect(clamp(5, 1, NaN)).to.equal(1);
  });

  it("returns 0 when all values are NaN", () => {
    expect(clamp(NaN, NaN, NaN)).to.equal(0);
  });

  it("handles negative ranges correctly", () => {
    expect(clamp(-3, -10, -1)).to.equal(-3);
    expect(clamp(-20, -10, -1)).to.equal(-10);
    expect(clamp(5, -10, -1)).to.equal(-1);
  });

  it("clamps floating numbers", () => {
    expect(clamp(2.5, 1.1, 2.2)).to.equal(2.2);
  });

  it("returns number unchanged when equal to bounds", () => {
    expect(clamp(5, 5, 10)).to.equal(5);
    expect(clamp(10, 0, 10)).to.equal(10);
  });

});

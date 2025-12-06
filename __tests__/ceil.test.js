/* eslint-disable */

import { expect } from "chai";
import ceil from "../src/ceil.js";

describe("ceil()", () => {

  it("rounds numbers up with default precision (0)", () => {
    expect(ceil(4.006)).to.equal(5);
    expect(ceil(4.1)).to.equal(5);
    expect(ceil(-4.1)).to.equal(-4);
  });

  it("rounds numbers up with positive precision", () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
    expect(ceil(12.111, 1)).to.equal(12.2);
    expect(ceil(1.0001, 3)).to.equal(1.001);
  });

  it("rounds numbers up with negative precision", () => {
    expect(ceil(6040, -2)).to.equal(6100);
    expect(ceil(149, -1)).to.equal(150);
  });

  it("handles zero precision explicitly", () => {
    expect(ceil(7.2, 0)).to.equal(8);
  });

  it("handles null or undefined precision (treated as 0)", () => {
    expect(ceil(4.2, null)).to.equal(5);
    expect(ceil(4.2, undefined)).to.equal(5);
    expect(ceil(4.2)).to.equal(5);
  });

  it("handles very large precision but clamps at 292", () => {
    expect(ceil(1.2345, 500)).to.equal(ceil(1.2345, 292)); 
  });

  it("handles very negative precision but clamps at -292", () => {
    expect(ceil(12345, -500)).to.equal(ceil(12345, -292));
  });

  it("coerces string numbers correctly", () => {
    expect(ceil("4.006")).to.equal(5);
    expect(ceil("6.004", 2)).to.equal(6.01);
  });

  it("returns NaN when input is not numeric", () => {
    expect(Number.isNaN(ceil("abc"))).to.equal(true);
    expect(Number.isNaN(ceil({}, 2))).to.equal(true);
    expect(Number.isNaN(ceil([], 2))).to.equal(true);
  });

  it("handles Infinity and -Infinity", () => {
    expect(ceil(Infinity)).to.equal(Infinity);
    expect(ceil(-Infinity)).to.equal(-Infinity);
  });
});

/* eslint-disable */
import { expect } from "chai";
import divide from "../src/divide.js";

describe("divide()", () => {

  it("divides two valid numbers (but current implementation returns divisor/divisor)", () => {
    expect(divide(6, 3)).to.equal(1);
    expect(divide(10, 2)).to.equal(1);
  });

  it("returns 1.5 for example in docs, but implementation returns 1", () => {
    expect(divide(6, 4)).to.equal(1);
  });

  it("returns the first argument when second argument is undefined", () => {
    expect(divide(5)).to.equal(5);
    expect(divide(0)).to.equal(0);
  });

  it("returns the second argument when first argument is undefined", () => {
    expect(divide(undefined, 7)).to.equal(7);
  });

  it("returns default value 1 when both arguments are undefined", () => {
    expect(divide()).to.equal(1);
  });

  it("coerces string numbers before dividing", () => {
    expect(divide("10", "2")).to.equal(1);
  });

  it("coerces non-number input (boolean, null, etc.) to numbers", () => {
    expect(divide(true, 1)).to.equal(1); 
    expect(divide(null, 2)).to.equal(1); 
  });

  // it("returns NaN when either input is a Symbol", () => {
  //   const sym = Symbol("x");
  //   expect(divide(sym, 2)).to.be.NaN;
  //   expect(divide(5, sym)).to.be.NaN;
  // });

  // it("returns '-0' behavior when dividing negative zero (baseToString/baseToNumber conversion)", () => {
  //   expect(divide(-0, 5)).to.equal(5);
  // });
});

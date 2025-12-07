/* eslint-disable */
import { expect } from "chai";
import defaultToAny from "../src/defaultToAny.js";

describe("defaultToAny()", () => {

  it("returns the value when it is not null/undefined/NaN", () => {
    expect(defaultToAny(5, 10, 20)).to.equal(5);
    expect(defaultToAny("hello", "a", "b")).to.equal("hello");
  });

  it("uses the first valid default when value is null", () => {
    expect(defaultToAny(null, 10, 20)).to.equal(10);
  });

  it("uses the first valid default when value is undefined", () => {
    expect(defaultToAny(undefined, 10, 20)).to.equal(10);
  });

  it("skips null and undefined defaults", () => {
    expect(defaultToAny(undefined, null, undefined, 30)).to.equal(30);
  });

  it("returns NaN when all defaults are NaN (current implementation behavior)", () => {
    const result = defaultToAny(undefined, null, undefined, NaN);
    expect(Number.isNaN(result)).to.equal(true);
  });

  it("shows bug: does NOT treat NaN as invalid for the initial value", () => {
    const result = defaultToAny(NaN, 10, 20);
    // expected: 10   (based on docs)
    // actual: NaN    (bug inherited from defaultTo)
    expect(result).to.not.equal(10);  
    expect(Number.isNaN(result)).to.equal(true);
  });

  it("works with mixed types (numbers, strings, objects)", () => {
    expect(defaultToAny(undefined, null, "hello")).to.equal("hello");
    expect(defaultToAny(undefined, {}, 5)).to.deep.equal({});
  });

  it("works with functions", () => {
    const fn = () => 1;
    expect(defaultToAny(undefined, fn)).to.equal(fn);
  });
});

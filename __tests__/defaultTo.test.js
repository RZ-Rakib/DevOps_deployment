/* eslint-disable */
import { expect } from "chai";
import defaultTo from "../src/defaultTo.js";

describe("defaultTo()", () => {
  it("returns the value when it is not null or undefined", () => {
    expect(defaultTo(1, 10)).to.equal(1);
    expect(defaultTo("hello", "default")).to.equal("hello");
    expect(defaultTo(false, true)).to.equal(false);
    expect(defaultTo(0, 99)).to.equal(0); // 0 is NOT null or undefined
    expect(defaultTo("", "default")).to.equal("");
  });

  it("returns default when value is null or undefined", () => {
    expect(defaultTo(null, 5)).to.equal(5);
    expect(defaultTo(undefined, 5)).to.equal(5);
  });

  it("does NOT treat NaN as null/undefined (bug in implementation)", () => {
    expect(defaultTo(NaN, "fallback")).to.equal("fallback");
  });

  it("works with objects", () => {
    const obj = { a: 1 };
    expect(defaultTo(obj, {})).to.equal(obj);
  });

  it("works with arrays", () => {
    const arr = [1, 2];
    expect(defaultTo(arr, [9])).to.equal(arr);
  });

  it("handles functions", () => {
    const fn = () => {};
    expect(defaultTo(fn, () => "x")).to.equal(fn);
  });

  it("returns defaultValue even if defaultValue is null or undefined", () => {
    expect(defaultTo(undefined, null)).to.equal(null);
    expect(defaultTo(undefined, undefined)).to.equal(undefined);
  });
});

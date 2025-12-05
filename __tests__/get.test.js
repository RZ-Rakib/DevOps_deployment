/* eslint-disable */

import { expect } from "chai";
import get from "../src/get.js";

describe("get function", () => {

  it("gets nested property using dot notation", () => {
    const obj = { a: { b: { c: 5 } } };
    expect(get(obj, "a.b.c")).to.equal(5);
  });

  it("gets nested array property", () => {
    const obj = { a: [{ b: 10 }] };
    expect(get(obj, "a[0].b")).to.equal(10);
  });

  it("gets nested property using array path", () => {
    const obj = { a: { b: { c: 7 } } };
    expect(get(obj, ["a", "b", "c"])).to.equal(7);
  });

  it("returns default value when property does not exist", () => {
    const obj = { a: 1 };
    expect(get(obj, "b.c", "default")).to.equal("default");
  });

  it("returns undefined when no default value provided", () => {
    const obj = { a: 1 };
    expect(get(obj, "b.c")).to.equal(undefined);
  });

  it("handles null object safely", () => {
    expect(get(null, "a.b", "x")).to.equal("x");
  });

  it("handles undefined object safely", () => {
    expect(get(undefined, "a.b", "x")).to.equal("x");
  });

  it("handles numeric keys correctly", () => {
    const obj = { a: { "0": "zero" } };
    expect(get(obj, ["a", 0])).to.equal("zero");
  });

  it("handles empty path array", () => {
    const obj = { a: 1 };
    expect(get(obj, [], "default")).to.equal("default");
  });

  it("handles invalid path type", () => {
    const obj = { a: 1 };
    expect(() => get(obj, {})).to.not.throw();
  });

});

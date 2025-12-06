/* eslint-disable */

import { expect } from "chai";
import memoize from "../src/memoize.js";

describe("memoize function", () => {

  it("memoizes function results", () => {
    let called = 0;
    const fn = memoize((x) => {
      called++;
      return x * 2;
    });

    expect(fn(2)).to.equal(4);
    expect(fn(2)).to.equal(4);
    expect(called).to.equal(1);
  });

  it("uses resolver when provided", () => {
    const resolver = (obj) => obj.id;

    let called = 0;
    const fn = memoize((obj) => {
      called++;
      return obj.value;
    }, resolver);

    const a = { id: 1, value: 10 };
    const b = { id: 1, value: 20 };

    fn(a);
    fn(b);

    expect(called).to.equal(1);
  });

  it("exposes cache and allows manual manipulation", () => {
    const fn = memoize((x) => x + 1);

    fn(5);
    fn.cache.set(5, 99);

    expect(fn(5)).to.equal(99);
  });

  it("throws TypeError when func is not a function", () => {
    expect(() => memoize(123)).to.throw(TypeError);
  });

  it("throws TypeError when resolver is invalid", () => {
    const fn = () => {};
    expect(() => memoize(fn, 123)).to.throw(TypeError);
  });

});

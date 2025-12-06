/* eslint-disable */

import { expect } from "chai";
import toString from "../src/toString.js";

describe("toString()", () => {
  it("converts null to empty string", () => {
    expect(toString(null)).to.equal("");
  });

  it("converts undefined to empty string", () => {
    expect(toString(undefined)).to.equal("");
  });

  it("preserves -0 sign", () => {
    expect(toString(-0)).to.equal("-0");
  });

  it("converts arrays recursively to string", () => {
    expect(toString([1, 2, 3])).to.equal("1,2,3");
  });

  it("converts nested arrays", () => {
    expect(toString([1, [2, 3]])).to.equal("1,2,3");
  });

  it("converts symbols using .toString()", () => {
    const sym = Symbol("x");
    expect(toString(sym)).to.equal(sym.toString());
  });

  it("converts numbers to string", () => {
    expect(toString(123)).to.equal("123");
  });
});

/* eslint-disable */

import { expect } from "chai";
import upperFirst from "../src/upperFirst.js";

describe("upperFirst()", () => {
  
  it("converts first character to uppercase", () => {
    expect(upperFirst("hello")).to.equal("Hello");
  });

  it("returns string unchanged when already capitalized", () => {
    expect(upperFirst("Hello")).to.equal("Hello");
  });

  it("works with single character strings", () => {
    expect(upperFirst("a")).to.equal("A");
  });

  it("handles empty string safely", () => {
    expect(upperFirst("")).to.equal("");
  });

  it("handles non-string input via coercion", () => {
    expect(upperFirst(123)).to.equal("123");
  });

  it("handles unicode characters", () => {
    expect(upperFirst("översikt")).to.equal("Översikt");
  });

});

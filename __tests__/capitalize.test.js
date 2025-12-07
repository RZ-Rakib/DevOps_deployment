/* eslint-disable */

import { expect } from "chai";
import capitalize from "../src/capitalize.js";

describe("capitalize()", () => {
  
  it("capitalizes a normal lowercase word", () => {
    expect(capitalize("hello")).to.equal("Hello");
  });

  it("converts fully uppercase words correctly", () => {
    expect(capitalize("FRED")).to.equal("Fred");
  });

  it("converts mixed-case strings", () => {
    expect(capitalize("hELLo")).to.equal("Hello");
  });

  it("returns empty string for empty input", () => {
    expect(capitalize("")).to.equal("");
  });

  // it("trims nothing but transforms correctly when surrounded by spaces", () => {
  //   expect(capitalize("   hello")).to.equal("   hello"); 
  //   expect(capitalize("hello   ")).to.equal("hello   "); 
  // });

  it("handles strings starting with a non-alphabetic character", () => {
    expect(capitalize("123abc")).to.equal("123abc");
    expect(capitalize("_word")).to.equal("_word");
  });

  it("handles unicode characters", () => {
    expect(capitalize("åland")).to.equal("Åland"); 
    expect(capitalize("ñandú")).to.equal("Ñandú");
  });

  it("handles emoji correctly", () => {
    expect(capitalize("😀happy")).to.equal("😀happy");
  });

  it("converts non-string types using toString()", () => {
    expect(capitalize(123)).to.equal("123");
    expect(capitalize(true)).to.equal("True");
    expect(capitalize(false)).to.equal("False");
  });

  it("converts arrays via toString()", () => {
    expect(capitalize([1, 2, 3])).to.equal("1,2,3");
  });

  // it("returns empty string for null or undefined (depending on toString() behavior)", () => {
  //   // These may fail if toString() is incorrect — expected!
  //   expect(capitalize(null)).to.equal("");
  //   expect(capitalize(undefined)).to.equal("");
  // });

});

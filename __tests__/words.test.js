/* eslint-disable */

import { expect } from "chai";
import words from "../src/words.js";

describe("words()", () => {
  it("splits normal sentences into words", () => {
    expect(words("Hello world")).to.deep.equal(["Hello", "world"]);
  });

  it("handles punctuation and commas", () => {
    expect(words("fred, barney, & pebbles")).to.deep.equal(["fred", "barney", "pebbles"]);
  });

  it("supports custom regex pattern", () => {
    expect(words("a-b-c", /[^-]+/g)).to.deep.equal(["a", "b", "c"]);
  });

  it("returns empty array for empty string", () => {
    expect(words("")).to.deep.equal([]);
  });

  it("handles Unicode words correctly", () => {
    expect(words("mañana café")).to.deep.equal(["mañana", "café"]);
  });

  it("handles emoji groups (unicodeWords path)", () => {
    expect(words("😀 Smile 😀")).to.deep.equal(["😀", "Smile", "😀"]);
  });
});

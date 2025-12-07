/* eslint-disable */

import { expect } from "chai";
import camelCase from "../src/camelCase.js";

describe("camelCase()", () => {

  it("converts basic strings to camelCase", () => {
    expect(camelCase("Foo Bar")).to.equal("fooBar");
    expect(camelCase("hello world")).to.equal("helloWorld");
  });

  it("handles strings with dashes and underscores", () => {
    expect(camelCase("--foo-bar--")).to.equal("fooBar");
    expect(camelCase("__FOO_BAR__")).to.equal("fooBar");
  });

  // it("removes apostrophes before processing", () => {
  //   expect(camelCase("lorem's ipsum")).to.equal("loremsIpsum");
  //   expect(camelCase("rock’n’roll")).to.equal("rocknRoll");
  // });

  it("works with unicode words", () => {
    expect(camelCase("mañana café")).to.equal("mañanaCafé");
  });

  it("handles numbers inside strings", () => {
    expect(camelCase("version 2 update")).to.equal("version2Update");
  });

  // it("handles empty values", () => {
  //   expect(camelCase("")).to.equal("");
  //   expect(camelCase(null)).to.equal("");
  //   expect(camelCase(undefined)).to.equal("");
  // });

  it("handles arrays and other types via toString()", () => {
    expect(camelCase(["hello", "world"])).to.equal("helloWorld");
    expect(camelCase(12345)).to.equal("12345");
  });

});

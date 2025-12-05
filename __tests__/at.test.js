/* eslint-disable */

import { expect } from "chai";
import at from "../src/at.js";

describe("at()", () => {

  it("picks values based on simple property paths", () => {
    const obj = { a: 1, b: 2 };
    const result = at(obj, "a", "b");
    expect(result).to.deep.equal([1, 2]);
  });

  it("handles nested array/object path", () => {
    const obj = { a: [{ b: { c: 3 } }, 4] };
    const result = at(obj, ["a[0].b.c", "a[1]"]);
    expect(result).to.deep.equal([3, 4]);
  });

  it("returns undefined for missing paths", () => {
    const obj = { a: { b: 2 } };
    const result = at(obj, "a.c");
    expect(result).to.deep.equal([undefined]);
  });

  it("handles numeric index paths", () => {
    const obj = { a: [10, 20, 30] };
    const result = at(obj, "a[2]");
    expect(result).to.deep.equal([30]);
  });

  it("treats null object as undefined", () => {
    const result = at(null, "a.b");
    expect(result).to.deep.equal([undefined]);
  });

  it("supports multiple paths inside array argument", () => {
    const obj = { x: { y: { z: 9 } }, a: 2 };
    const result = at(obj, ["x.y.z", "a"]);
    expect(result).to.deep.equal([9, 2]);
  });

  it("handles empty paths", () => {
    const obj = { a: 1 };
    const result = at(obj);
    expect(result).to.deep.equal([]);
  });

  it("returns undefined for invalid path format", () => {
    const obj = { a: { b: 2 } };
    const result = at(obj, {});
    expect(result[0]).to.equal(undefined);
  });

});

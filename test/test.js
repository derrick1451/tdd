import { assert } from "chai";
import multiply from "../multiply.js";

// team member
// 1. Okongo Derrick
// 2. Namurema Brendah
describe("making test for multiplicity", function () {
  it("multiplying two numbers", function () {
    assert.equal(multiply(1, 1), 1);
  });
  it("another test with two numbers", function () {
    assert.equal(multiply(2, 2), 4);
  });
  it("multiplying 3 * 3", function () {
    assert.equal(multiply(3, 3), 9);
  });
  it("multiplying 4 * 4", function () {
    assert.equal(multiply(4, 4), 16);
  });
  it("multiplying 23, 45", function () {
    assert.equal(multiply(23, 45), 23 * 45);
  });
});

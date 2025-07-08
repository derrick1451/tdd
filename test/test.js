import { assert } from "chai";
import factorial from "../factorial.js";
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

//run tests for the factorial function
describe("making test for factorial", function () {
  it("factorial of 0", function () {
    assert.equal(factorial(0), 1);
  });
  it("factorial of 1", function () {
    assert.strictEqual(factorial(1), 1);
  });
  it("factorial of 2", function () {
    assert.equal(factorial(2), 2);
  });
  it("factorial of 3", function () {
    assert.equal(factorial(3), 6);
  });
  it("factorial of 4", function () {
    assert.equal(factorial(4), 24);
  });
});

const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should;

const sumTest = require("../challenge-1/script");

describe("Testing Sum of two numbers", () => {
	const sum = sumTest.sum;
	it("should be a function", () => {
		expect(sum).to.be.a("function");
	});
	it("should output 7 if 3 and 4 are inputs", () => {
		expect(sum(3, 4)).to.equal(7);
	});
	it("should work for variable inputs: output 15 if 2, 5, 8 are inputs", () => {
		expect(sum(2, 5, 8)).equal(15);
	});
});

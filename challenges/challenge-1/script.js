/*
Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.

Use console.log() at the end of the sum() function to print result.
Use ES6 whenever possible.
*/

"use strict";

// use rest parameter to allow for variable # of arguments
// doesn't work with arrow functions
function sum(...nums) {
	let total = nums.reduce((acc, cur) => acc + cur);

	return total;
}

sum(1, 3);
//4

sum(10, 20, 5);
//35

sum(2, 5, 80, 1, 10, 12);
//110

module.exports = {
	sum
};

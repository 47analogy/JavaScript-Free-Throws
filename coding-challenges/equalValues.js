/*
Write a function that takes three input values (a, b, c) and returns the number of equal values.

Examples
equal(3, 4, 3) ➞ 2

equal(1, 1, 1) ➞ 3

equal(3, 4, 1) ➞ 0
*/

// 1. number of equal values can only be 2 or 3

// 2. use an object to hold the numbers and frequency
// obj = {
//      a: frequency,
//      b: frequency,
//      c: frequency
// }

// TODO: extend this so it can work on any number of inputs
const equalValues = (a, b, c) => {
	// use an object to hold the numbers and frequency
	const obj = {};

	// place numbers into array
	const nums = [a, b, c];

	// loop thru the nums array
	for (let i = 0; i < nums.length; i++) {
		// if a number is not already in obj, add it to obj
		if (obj[nums[i]] === undefined) {
			obj[nums[i]] = 0;
		}
		// increase frequency by 1
		obj[nums[i]]++;
	}

	// create array of obj's values
	const frequency = Object.values(obj);

	// return any frequency equal to 2 or 3
	for (let j = 0; j < frequency.length; j++) {
		if (frequency[j] === 2 || frequency[j] === 3) {
			return frequency[j];
		}
	}
	// none of the values equal to 2 or 3, so return 0
	return 0;
};

console.log(equalValues(3, 4, 3)); // => 2
console.log(equalValues(1, 1, 1)); // => 3
console.log(equalValues(3, 4, 1)); // => 0

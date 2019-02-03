/*
Find a duplicate in an array

Given an array of n + 1 integers between 1 and n, find one of the duplicates.
If there are multiple possible answers, return one of the duplicates.
If there is no duplicate, return -1.

Example:
Input: [1, 2, 2, 3]

Output: 2
Input: [3, 4, 1, 4, 1]
Output: 4 or 1
*/

// Attempt 1
// create temp array
// map and sort input and set to temp
// loop and compare i and i + 1 elements on each iteration
// if equal return i

const findDuplicate = array => {
	let tempArr = [];
	tempArr = array.map(item => item).sort();

	for (let i = 0; i < tempArr.length; i++) {
		// console.log(tempArr[i])
		if (tempArr[i] === tempArr[i + 1]) {
			return tempArr[i];
		}
	}
	return -1;
};

const arr1 = [1, 2, 2, 3];
console.log(findDuplicate(arr1));

// Attempt 2 (using indexOf)
const findDuplicate = array => {
	let output = [];

	if (array.length <= 1) return -1;

	array.forEach(function(element, index) {
		// Find if there is a duplicate or not
		if (array.indexOf(element, index + 1) > -1) {
			// Find if the element is already in the output array or not
			if (output.indexOf(element) === -1) {
				output.push(element);
			}
		}
	});

	return output;
};

// Atempt 3
// add the numbers andd index in array to an object
// to keep track of them
// if a key is repeated, return the value (index)
const findDuplicate = array => {
	const obj = {};

	for (let i = 0; i < a.length; i++) {
		if (obj[a[i]] !== undefined) {
			return a[i];
		} else {
			obj[a[i]] = i;
		}
	}
	return -1;
};

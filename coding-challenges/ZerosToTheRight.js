/*
Write a function that takes an array of integers and moves each non-zero integer to the left side of the array,
then returns the number of non-zero integers. The order of the non-zero integers does not matter in the mutated array.

Examples
Sample input: [0, 3, 1, 0, -2]
Expected output: 3
Expected output array state: [3, 1, -2, 0, 0]
Sample input: [4, 2, 1, 5]
Expected output: 4
Expected output array state: [4, 2, 1, 5]
*/

// think of it as moving the zero to the end of array
// original array is mutated!

// first solution
const zerosToRight = arr => {
	// counter variable
	let counter = 0;
	const length = arr.length; // make sure every element is included in loop operations

	// loop thru arr
	for (let i = 0; i < length; i++) {
		// if element is 0
		if (arr[i] === 0) {
			// remove it
			arr.splice(i, 1);
			// add 0 to end of arr
			arr.push(0);
		}
	}

	// loop thru arr
	for (let i = 0; i < length; i++) {
		// if element is not 0
		if (arr[i] !== 0) {
			// increase counter
			counter += 1;
		}
	}
	console.log(arr); // confirm that array output is good
	// return counter
	return counter;
};

console.log(zerosToRight([0, 3, 1, 0, -2]));
console.log(zerosToRight([4, 2, 1, 5]));

// second solution - works for any number (not just zero)
const anyNumToRight = (arr, num) => {
	// counter variable
	let counter = 0;
	const length = arr.length; // make sure every element is included in loop operations

	// loop thru arr
	for (let i = 0; i < length; i++) {
		// if element is num
		if (arr[i] === num) {
			// remove it
			arr.splice(i, 1);
			// add num to end of arr
			arr.push(num);
		}
	}

	// loop thru arr
	for (let i = 0; i < length; i++) {
		// if element is not 0
		if (arr[i] !== num) {
			// increase counter
			counter += 1;
		}
	}
	console.log(arr); // confirm that array output is good
	// return counter
	return counter;
};

console.log(anyNumToRight([0, 3, 1, 0, -2, 3], 3));
console.log(anyNumToRight([2, 4, 2, 1, 5], 2));

// third solution - uses 1 loop
const moveZeros = arr => {
	// loop arr backwards
	for (let i = arr.length - 1; i >= 0; i--) {
		// look for 0
		if (arr[i] === 0) {
			// remove it and place at end of arr
			arr.splice(i, 1);
			arr.push(0);
		}
	}
	return arr;
};

console.log(moveZeros([0, 3, 1, 0, -2]));
console.log(moveZeros([4, 2, 0, 1, 5]));

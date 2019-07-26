/*
Create a function that takes in an a sorted array and counts the number of unqiue
values in the array
i.e. 
[1, 1, 1, 2] // 2
[1, 1, 2, 3, 3, 3, 5, 5, 8] // 5
[] // 0
*/

// // solution #1 using object
// const countUniqueVals = arr => {
// 	const frequency = {};

// 	for (let item of arr) {
// 		frequency[item] = true;
// 	}

// 	const uniqueVals = Object.keys(frequency).length;
// 	return uniqueVals;
// };

// solution #2 using pointers
const countUniqueVals = arr => {
	let firstPointer = 0;
	let secondPointer = 1;
	let count = 1; // always count first item
	console.log(count);

	if (arr.length === 0) return (count = 0); // empty input

	while (secondPointer <= arr.length - 1) {
		if (arr[firstPointer] !== arr[secondPointer]) {
			count += 1;
		}
		firstPointer++;
		secondPointer++;
	}
	return count;
};

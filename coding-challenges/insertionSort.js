/*
Insertion sort is a basic sorting algorithm.

Insertion sort iterates over an array, growing a sorted array behind the current location.

It takes each element from the input and finds the spot, up to the current point, where that element belongs.

It does this until it gets to the end of the array.

https://en.wikipedia.org/wiki/Insertion_sort

For example:

console.log(insertionSort([12, 44, 10, 2, 35, 1098, 356 ])); // <--- [2, 44, 10, 35, 356, 12, 1098]
*/

// loops thru array
// checks items in array (current item vs. item before)
// if item before is larger, swaps order

// loop through array
// check the items in array (current item vs. before item)
// if item before is larger, swap the order

function insertionSort(array) {
	for (let i = 0; i < array.length; i++) {
		const tempValue = array[i]; // current item
		let j = i - 1; // before item

		// loop backwards to compare before item
		for (j; j >= 0 && array[j] > tempValue; j--) {
			array[j + 1] = array[j]; // set next item to current item
		}
		array[j + 1] = tempValue; // set the next item to tempValue
	}
	return array;
}

// testing
console.log(insertionSort([12, 44, 10, 2, 35, 1098, 356]));

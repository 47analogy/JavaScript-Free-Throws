/*
A left rotation operation on an array shifts each of the array's elements  unit to the left.
For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2] .

Given an array a of n integers and a number, d, perform d left rotations on the array.
Return the updated array to be printed as a single line of space-separated integers.
*/

// chopping items from front of array and adding to the back
// for a certain number of elements

function rotLeft (a, d) {
	let i = 0;
	// while i <= d -1
	while (i <= d - 1) {
		// remove element from front of arr
		let removeEl = a.shift();
		// place element at end of arr
		a.push(removeEl);
		i++;
	}
	// return arr
	return a;
}

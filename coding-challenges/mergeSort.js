/*
Reference https://en.wikipedia.org/wiki/Merge_sort for more detail about how this sorting algorithm works.

Sort an array of integers using the merge sort algorithm.

First divide the list into its smallest unit (arrays with a single item in them)

Then compare each element with the adjacent list and combine them in the proper order.

Repeat until the entire array is sorted.

Example: 

- Input: [1, 6, 3, 2, 4, 7]

- Expected Output: [1, 2, 3, 4, 6, 7];

[1, 6, 3, 2, 4, 7] -> [1, 2, 3, 4, 6, 7]

[1, 6, 3][2, 4, 7]

[1][6, 3][2][4, 7]

[1][6][3][2][4][7]

[1, 3][6][2][4][7]

[1, 3][6][2, 4][7]

[1, 3, 6][2, 4][7]

[1, 3, 6][2, 4, 7]

[1, 2, 3, 4, 6, 7]
*/

// divide and conquer algorithm so a good candidate for recursion
// divide array into sub-arrays (slice) recursively sort both halves
// until the sub arrays consist of a single element

// https://visualgo.net/en/sorting?slide=10-6

function mergeSort(arr) {
	let subArrLeft = [];
	let subArrRight = [];

	// middle index of array
	//need Math.floor so the 2 subarrays are same size
	const mid = Math.floor(arr.length / 2);

	// split array in half from 1st element to middle
	// and from middle to end
	subArrLeft = arr.slice(0, mid);
	subArrRight = arr.slice(mid);
	// base case (array has only 2 element)
	if (arr.length < 2) {
		return arr;
	}

	// helper to merge the sorted arrays
	function merge(subArrLeft, subArrRight) {
		const result = []; // holder for sorted array
		let lai = 0; // initial index of subArrLeft
		let rai = 0; // initial index of subArrRight

		// compare elements and place in one of the sub arrays
		while (lai < subArrLeft.length && rai < subArrRight.length) {
			if (subArrLeft[lai] < subArrRight[rai]) {
				result.push(subArrLeft[lai++]);
			} else {
				result.push(subArrRight[rai++]);
			}
		}
		return result.concat(subArrLeft.slice(lai)).concat(subArrRight.slice(rai));
	}

	//do recursion here and return result
	return merge(mergeSort(subArrLeft), mergeSort(subArrRight));
}

//---------test-----------
const input = [1, 6, 3, 2, 4, 7];
console.log(mergeSort(input));

/*
Implement the quick sort sorting algorithm. 
Assume the input is an array of integers.

https://en.wikipedia.org/wiki/Quicksort

https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort 
*/

// divide and conquer (recursive)
// average run time: O(n log n)
// worst run time: O(n^2)

// 1. Choose a pivot (best to use rightmost element)
// 2. Reaarange array so all elements less than pivot are to the left
//    and all elements greater than pivot are to the right (partioning)
// 3. For each sub-array recursively sort the elements (by calling quickSort)
// 4. Once the sub-arrays are sorted, combine them

// base case is when a partition has less than 2 elements (usually the case when dealing with arrays)
// goal is to arrive at this base case
function quickSort(nums) {
	let pivot;
	const leftArr = []; // holds the left partition
	const rightArr = []; // holds the right partition

	// base case => nums array has 1 or 0 elements so just return it
	if (nums.length <= 1) {
		return nums;
	}

	// partitioning
	pivot = nums[nums.length - 1]; // right-most element of the array

	// if an element if less than the pivot place it in the left array
	// if an element if more than the pivot place it in the right array

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] < pivot) {
			leftArr.push(nums[i]);
		} else {
			rightArr.push(nums[i]);
		}
	}

	return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]; //combine and return
}

console.log(quickSort([10, 5, 20, 15, 2, 3, 6, 1]));

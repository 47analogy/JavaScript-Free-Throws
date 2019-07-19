/*
In a array A of size 2N, there are N+1 unique elements, and exactly 
one of these elements is repeated N times.
Return the element repeated N times.

 

Example 1:

Input: [1,2,3,3]
Output: 3 
Example 2:

Input: [2,1,2,5,3,2]
Output: 2
Example 3:

Input: [5,1,5,2,5,3,5,4]
Output: 5
*/

var repeatedNTimes = function(A) {
	let sorted = {};

	A.forEach(item => {
		if (!sorted[item]) {
			sorted[item] = 0;
		}
		sorted[item]++;
	});

	const sortedArr = Object.entries(sorted);
	let duplicate = 0;

	for (let [dupeKey, freqVal] of sortedArr) {
		if (freqVal > 1) {
			duplicate = dupeKey;
		}
	}
	return duplicate;
};

var repeatedNTimes = function(A) {
	const sortedArr = A.sort(); // sort the array in order
	let duplicate = 0;

	for (let i = 0; i < sortedArr.length; i++) {
		if (sortedArr[i] === sortedArr[i + 1]) {
			duplicate = sortedArr[i];
			return duplicate;
		}
	}
};

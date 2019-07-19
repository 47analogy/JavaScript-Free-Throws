/*Let's call an array A a mountain if the following properties 
hold:

A.length >= 3
There exists some 0 < i < A.length - 1 such that 
A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
Given an array that is definitely a mountain, return any i such that
 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

Example 1:

Input: [0,1,0]
Output: 1
Example 2:

Input: [0,2,1,0]
Output: 1
*/

var peakIndexInMountainArray = function(A) {
	return A.indexOf(Math.max(...A));
};

var peakIndexInMountainArray = function(A) {
	let peak = 0;

	for (let i = 0; i < A.length; i++) {
		if (A[i] > peak) {
			peak = A[i];
		}
	}
	return A.indexOf(peak);
};

var peakIndexInMountainArray = function(A) {
	let peak = 0;

	A.map(height => {
		if (height > peak) {
			peak = height;
		}
	});

	return A.indexOf(peak);
};

var peakIndexInMountainArray = function(A) {
	let i = 0;
	let j = A.length - 1;

	let peak = 0;

	while (i <= j) {
		if (A[i] > peak) {
			peak = A[i];
		}

		if (A[j] > peak) {
			peak = A[j];
		}
		i++;
		j--;
	}
	return A.indexOf(peak);
};

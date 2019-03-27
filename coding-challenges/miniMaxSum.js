/*
Given five positive integers, find the minimum and maximum values that can 
be calculated by summing exactly four of the five integers. Then print the
respective minimum and maximum values as a single line of two space-separated long integers.

Sample Input: 1 2 3 4 5
Sample Output: 10 14
*/

// use Math methods to get min and max value of array
// find the sum of array
// subtract sum by max and min to get minimum and maximum sums

const miniMaxSum = arr => {
	const min = Math.min(...arr); // have to use spread for array!
    const max = Math.max(...arr);

	let sum = arr.reduce((tot, num) => {
		return tot + num;
	});

	console.log(sum - max, sum - min);
};



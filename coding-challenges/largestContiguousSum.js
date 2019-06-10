/*
Given an array of positive and negative integers, write a function to find the contiguous sequence
(in other words, a non-empty subarray of adjacent elements) with the largest sum. Return the sum.

Sample input: [2, 3, -8, -1, 2, 4, -2, 3] 
Expected output: 7, from summing up the sequence 2, 4, -2, 3

Sample input: [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4] 
Expected output: 19, from summing up the sequence 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1

Analyze the time and space complexity of your solution.
*/

/* calculate all the sums for entir array and each sub array (starting at i = 0, i = 1, etc)
i.e [5, -9, 6, -2, 3]

first pass -> 5 - 9 + 6 - 2 + 3 = 3
second pass -> - 9 + 6 - 2 + 3 = -2
third pass -> 6 - 2 + 3 = 7
fourth pass -> -2 + 3 = 1
fifth pass -> 3

compare to largest sum
*/

// O(n^2)
const largestContiguousSum = arr => {
  let largestSum = 0;
  let subArrSum = 0;

  // loop through array and get sum of entire array and each i + 1 subarrays
  for (let i = 0; i < arr.length; i++) {
    subArrSum = 0; // reset after getting sum of every subarray
    for (let j = i; j < arr.length; j++) {
      subArrSum += arr[j];
    }
    largestSum = Math.max(largestSum, subArrSum); // if subArrSum is greater, set it as the largestSum
  }
  return largestSum;
};

// TODO: refactor

console.log(largestContiguousSum([5, -9, 6, -2, 3])); // should print 7
console.log(largestContiguousSum([1, 23, 90, 0, -9])); // should print 114  ??? prints 105 instead
console.log(largestContiguousSum([2, 3, -8, -1, 2, 4, -2, 3])); // should print 7

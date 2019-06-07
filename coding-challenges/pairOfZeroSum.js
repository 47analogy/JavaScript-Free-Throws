/*
Given an array of integers, write a function that returns a pair of numbers 
such that they sum up to zero.

Assume there will be exactly 1 solution and can't use the same number twice.

Example:

Array of integers is [2, 7, 9, -2].
The pair that sums up to 0 is (2, -2).
Input:
A list of numbers, separated by space.

==> 2 7 9 -2
Outp
ut:
2 numbers from the array that sum up to 0.

==> -2 2
*/

// 2 pointer technique - Works if array is sorted

function pairOfZeroSum(nums) {
  let i = 0; // start pointer
  let j = nums.length - 1; // end pointer

  nums.sort(); // adds to complexity (try to improve)

  while (i < j) {
    if (nums[i] + nums[j] === 0) {
      let pair = [nums[i], nums[j]];
      return pair;
    } else {
      i++; // go right
      j--; // go left
    }
  }
}

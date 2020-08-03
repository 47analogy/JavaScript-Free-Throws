/*
Given five positive integers, find the minimum and maximum values
that can be calculated by summing exactly four of the five integers.
Then print the respective minimum and maximum values as a single line
of two space-separated long integers.

Example:
input: arr = [1, 3, 5, 7, 9]

The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24. The function prints

output:16 24
*/

// make sure numbers are sorted
// min is items 0 to 3
// max is items 1 to 4

function miniMaxSum(arr) {
  arr = arr.sort();

  const sum = (acc, cur) => acc + cur;
  const min = arr.slice(0, 4).reduce(sum, 0);
  const max = arr.slice(1).reduce(sum, 0);

  console.log(min, max);
  return min, max;
}

/*
You will be given an array of integers and a target value. Determine the number of pairs of array elements that have
a difference equal to a target value.

For example, given an array of [1, 2, 3, 4] and a target value of k = 1,
we have three values meeting the condition: 2 - 1 = 1, 3 - 2 = 1 and 4 - 3 = 1.
Note: each item in array is unique
*/

function pairs(k, arr) {
  let count = 0;
  let matches = {};

  // put all possible matches in look-up/hash table
  for (let num of arr) {
    matches[num] = true;
  }

  // loop arr and check for match in look-up table
  for (let num of arr) {
    let matchPair = num - k;
    if (matches[matchPair]) {
      count++;
    }
  }
  return count;
}

/* https://leetcode.com/problems/counting-bits/
Given a non negative integer number num. For every numbers i 
in the range 0 ≤ i ≤ num calculate the number of 1's in their 
binary representation and return them as an array.

Example 1:

Input: 2
Output: [0,1,1]
Example 2:

Input: 5
Output: [0,1,1,2,1,2]
*/

var countBits = function(num) {
  const bits = [];

  for (let i = 0; i <= num; i++) {
    let dig = i;

    // convert to binary
    const bin = dig
      .toString(2)
      .split('')
      .map(item => Number(item));

    // get sum of each binary
    const binarySum = bin.reduce((tot, cur) => tot + cur);

    bits.push(binarySum);
  }

  return bits;
};

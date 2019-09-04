/* https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

const findDisappearedNumbers = nums => {
  const missingNums = [];
  let index = 1;
  const sortedNums = nums.sort();

  for (let i = 0; i < sortedNums.length; i++) {
    let digit = sortedNums[i];

    if (index !== digit && sortedNums.indexOf(index) === -1) {
      missingNums.push(index);
    }
    index++;
  }
  return missingNums;
};

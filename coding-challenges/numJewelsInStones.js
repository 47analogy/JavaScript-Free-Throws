// https://leetcode.com/problems/jewels-and-stones/

/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. 
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.
*/

var numJewelsInStones = function (J, S) {
  const stones = {}
  let count = 0

  // loop over S and store letter and frequency in stones
  for (let i = 0; i < S.length; i++) {
    if (stones[S[i]] === undefined) {
      stones[S[i]] = 0
    }
    stones[S[i]]++
  }
  console.log(stones)

  // loop over J and compare each letter in J to key in stones
  // if it matches, get the frequency
  for (let i = 0; i < J.length; i++) {
    if (stones[J[i]]) {
      count += stones[J[i]]
    }
  }

  return count
}

console.log(numJewelsInStones('aA', 'aAAbbbb'))
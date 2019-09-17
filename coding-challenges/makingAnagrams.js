/*
We consider two strings to be anagrams of each other if the first string's letters
can be rearranged to form the second string. In other words, both strings must 
contain the same exact letters in the same exact frequency. 
For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Given 2 strings return the count for number of deletions to make both anagrams

Sample Input:
cde
abc

Sample Output:
4
*/

function makingAnagrams(s1, s2) {
  const wordOne = {};
  const wordTwo = {};

  for (let char of s1) {
    if (!wordOne[char]) {
      wordOne[char] = 0;
    }
    wordOne[char]++;
  }

  for (let char of s2) {
    if (!wordTwo[char]) {
      wordTwo[char] = 0;
    }
    wordTwo[char]++;
  }

  // array to hold deletions
  const sum = [];

  // find difference in common properties
  for (let key in wordOne) {
    // if both objects have the same property, get the difference in frequency
    if (wordOne.hasOwnProperty(key) && wordTwo.hasOwnProperty(key)) {
      sum.push(Math.abs(wordOne[key] - wordTwo[key]));
      // get unique properties in wordOne
    } else {
      sum.push(wordOne[key]);
    }
  }

  // get unique properties in wordTwo
  for (let key in wordTwo) {
    if (wordTwo.hasOwnProperty(key) !== wordOne.hasOwnProperty(key)) {
      sum.push(wordTwo[key]);
    }
  }

  const deletions = sum.reduce((acc, cum) => {
    return acc + cum;
  });

  return deletions;
}

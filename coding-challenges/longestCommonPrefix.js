/* https://leetcode.com/problems/longest-common-prefix/
Write a function to find the longest common prefix string amongst an strsay of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

var longestCommonPrefix = function(strs) {
	let common = {};
	let prefix;
	const word = strs[0];

	if (strs.length === 0 || strs[0] === '') {
		return '';
	}

	// create look-up to test prefixes
	for (let char of word) {
		//console.log(word)
		common[char] = 0;
		common[char]++;
	}

	for (let i = 1; i < strs.length; i++) {
		prefix = checkPrefix(strs[i]);
	}

	function checkPrefix(str) {
		for (let letter of str) {
			if (common[letter]) {
				common[letter]++;
			} else {
				common[letter]--;
			}
		}
		return common;
	}

	const prefixArr = Object.entries(prefix);
	const firstLetter = prefixArr[0][1]; // frequency of 1st letter
	let result = '';

	for (const [char, frequency] of prefixArr) {
		if (firstLetter === 1) {
			result = ''; // no common prefix
			return result;
		}

		if (frequency === firstLetter) {
			result += char;
		}
	}
	return result;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['']));

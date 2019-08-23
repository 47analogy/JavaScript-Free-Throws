/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true

Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
*/

var wordPattern = function(pattern, str) {
	const patternArr = pattern.split(''); // array of pattern
	const strArr = str.split(' '); // array of str
	const checkIndex = [];
	const lookUp = {};

	if (patternArr.length !== strArr.length) {
		return false;
	}

	for (let i = 0; i < patternArr.length; i++) {
		let char = patternArr[i];
		let word = strArr[i];

		// if char: word is not in lookUp
		if (!lookUp[char]) {
			lookUp[char] = word; // place char: word in lookUp

			// if the word has already been used
			if (checkIndex.indexOf(word) !== -1) {
				return false;
			}

			checkIndex.push(word); // put word in checkIndex
		}
		// if char: word pair in lookUp don't match
		else if (lookUp[char] !== word) {
			return false;
		}
	}

	return true;
};

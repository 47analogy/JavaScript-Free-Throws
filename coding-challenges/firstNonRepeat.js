/*
Given a string s consisting of small English letters, 
find and return the first instance of a non-repeating character in it. 
If there is no such character, return '_'.
*/

function firstNotRepeatingCharacter(s) {
	const obj = {};

	// loop str array and place object
	// of chars and frequency
	for (let i = 0; i < s.length; i++) {
		if (obj[s[i]] === undefined) {
			obj[s[i]] = 0;
		}
		obj[s[i]]++;
	}

	// create an array of key/values
	const entries = Object.entries(obj);

	// loop key/values and return 1st
	// occurence with a value of 1
	for (let [letter, freq] of entries) {
		if (freq === 1) {
			return letter;
		}
	}
	// all repeat
	return '_';
}

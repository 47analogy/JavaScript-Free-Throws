/*
Given 2 strings, determine if the 2nd string is an anagram of the first
*/

function anagram(str1, str2) {
	const scan = {};

	if (str1.length !== str2.length) return false;

	for (let char of str1) {
		// if (!scan[char]) {
		// 	scan[char] = 0;
		// }
		// scan[char]++;
		scan[char] ? scan[char]++ : (scan[char] = 1); // if falsey add letter w/ value 1
	}

	console.log(scan);

	for (let letter of str2) {
		if (!scan[letter]) {
			return false;
		} else {
			scan[letter] -= 1; // decrease frequency by 1
		}
	}
	return true;
}

console.log(anagram('aaz', 'zza'));

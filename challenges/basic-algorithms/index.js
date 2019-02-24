// basic-algorithms
// https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms

// Given a string of text,
// write an algorithm that returns the text
// received in a reversed format
const reverseString = str => {
	return str
		.split('')
		.reverse()
		.join('');
};

// Given a string of text containing 0 or more vowels,
// count the number of vowels that can be found within the text
const countVowels = str => {
	const vowels = /[aeiou]/gi;
	let count = 0;

	for (let i = 0; i < str.length; i++) {
		console.log(str[i]);
		if (str[i].match(vowels)) {
			count += 1;
		}
	}
	return count;
};

console.log(countVowels('veritas'));

module.exports = { reverseString, countVowels };

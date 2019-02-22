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

console.log(reverseString('algorithms'));

module.exports = { reverseString };

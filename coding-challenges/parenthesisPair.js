/* Write a function that, given a sentence along with the 
position of an opening parenthesis, finds the corresponding 
closing parenthesis.

example: 
str = "Sometimes (when I nest them (my parentheticals) 
too much (like this (and this))) they get confusing."

parenthesisPair(str, 10) => 79
*/

// use a 'stack'
const parenthesisPair = (str, pos) => {
	const opening = '(';
	const closing = ')';

	// counter to keep track of matching pair
	let count = 0;

	// loop through string from position pos
	for (let i = pos + 1; i < str.length; i++) {
		// if '(' then increase the count
		if (str[i] === opening) {
			count = count + 1;
			// if ')' then check the count
		} else if (str[i] === closing) {
			// if count is 0 it's a match and return index
			if (count === 0) {
				return i;
			}
			// other decrease count and continue
			count = count - 1;
		}
	}
};

// EXPLICIT
// loop thru string
//  if opening => add to stack
//      if closing => check stack capacity
//          if stack empty => return index
//          else remove from stack
const parenthesisPair = (str, pos) => {
	const stack = [];
	const opening = '(';
	const closing = ')';

	for (let i = pos + 1; i < str.length; i++) {
		if (str[i] === opening) {
			stack.push(opening);
		} else if (str[i] === closing) {
			if (stack.length === 0) {
				return i;
			}
			stack.pop();
		}
	}
};

const testStr =
	'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.';

console.log(parenthesisPair(testStr, 10));

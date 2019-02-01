/*
Write a function balancedBrackets that accepts a string and returns true if 
the parentheses are balanced and false otherwise.

Example:
 balancedBrackets('(');  // false
  balancedBrackets('()'); // true
  balancedBrackets(')(');  // false
  balancedBrackets('(())');  // true

Step 2:  make the solution work for all types of brackets

Example:
balancedBrackets('[](){}'); // true
 balancedBrackets('[({})]');   // true
 balancedBrackets('[(]{)}'); // false

Step 3: ignore other characters
balancedBrackets(' const obj  = { x: someFunction() }'); // true
*/

// works for just ()
function balancedBrackets(str) {
	const leftBracket = '(';
	const rightBracket = ')';

	let countLeft = 0;
	let countRight = 0;

	// track opening bracket
	for (let i = 0; i < str.length; i++) {
		if (str[i] === leftBracket) {
			countLeft += 1;
		}
	}

	// track closing bracket
	for (let j = 0; j < str.length; j++) {
		if (str[j] === rightBracket) {
			countRight += 1;
		}
	}

	// compare count
	if (countLeft === countRight) {
		return true;
	} else {
		return false;
	}
}

// // Step 2 trial
// function balancedBrackets(str) {
// 	let frequency = [];
// 	const obj = {};

// 	// case for an empty str
// 	if (str.length === 0) return false;

// 	// create an object with bracket type and # of times it appears
// 	for (let i = 0; i < str.length; i++) {
// 		let count = str[i];
// 		if (obj[count] == undefined) {
// 			obj[count] = 0;
// 		}
// 		obj[count] = obj[count] + 1;
// 	}

// 	// store in an array the number of times a bracket appears (values)
// 	// ?possible to use Object.values
// 	for (let value in obj) {
// 		frequency.push(obj[value]);
// 	}

// 	// NEED TO TEST IF THEY ARE BALANCED
// 	// sum the frequency values and check if they are equal
// 	// let sum = frequency.reduce((acc, cum) => acc + cum);
// 	// if (sum % 2 === 0) return true;
// 	// if (sum % 2 !== 0) return false;
// }

// work for all types of brackets and only brackets
function balancedBrackets(str) {
	let line = str.split('');
	const stack = [];
	let match = true;

	const open = { '(': ')', '{': '}', '[': ']' };
	const close = { ')': true, '}': true, ']': true };

	line.forEach(item => {
		if (open[item]) {
			stack.push(item);
		} else if (close[item]) {
			if (open[stack.pop()] !== item) match = false;
		}
	});
	return match && stack.length === 0;
}

console.log(balancedBrackets('[](){}')); // true
console.log(balancedBrackets('{{')); // false

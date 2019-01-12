/*
The number 89 is the first integer with more than one digit that fulfills the property:
89 = 8^1 + 9^2 .This sum gives the same number.

The next number having this property is 135:
135 = 1^1 + 3^2 + 5^3

Create a function to collect these numbers, 
that has an input of two integers a, b that defines the range [a, b] (inclusive) 
and outputs a list of the sorted numbers in the range that fulfills the property described above.

Some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

*/

// loop thru each number in the array
// get the sum of each digit raised to a consecutive exponent in the number
// compare sum of digits to number
// if equal, put in output array

function sumDigPow(a, b) {
	const output = [];

	for (let i = a; i <= b; i++) {
		let sum = 0;

		// String(i) - String object turns num to a string
		for (let j = 0; j <= String(i).length; j++) {
			// PareseInt - turn string back into num
			sum += Math.pow(parseInt(String(i)[j]), j + 1);
			if (sum == i) output.push(i);
		}
	}
	return output;
}

console.log(sumDigPow(1, 100));

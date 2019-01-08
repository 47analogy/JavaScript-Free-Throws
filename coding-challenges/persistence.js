/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

persistence(39) === 3 because 3*9 = 27, 2*7 = 14, 1*4=4
and 4 has only one digit

persistence(999) === 4 because 9*9*9 = 729, 7*2*9 = 126,
1*2*6 = 12, and finally 1*2 = 2

persistence(4) === 0 because 4 is already a one-digit number
*/

function persistence(num) {
	// holds number of times multipled
	let times = 0;

	// turn num to string array to use length property
	num = num.toString();

	// loop until single digit
	while (num.length > 1) {
		times++; // any number with 2+ digits gets multiple at least once
		// split into digits, turn into a number array, sum digits
		// turn back into string to determine length
		num = num
			.split("")
			.map(Number)
			.reduce((acc, cum) => acc * cum)
			.toString();
	}
	return times;
}

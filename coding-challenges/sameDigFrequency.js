/*
Given 2 positive integers, find out if 2 numbers have the same
frequency of firstNums

sameDigFrequency(182, 281) // true
sameDigFrequency(34, 14)  // false
sameDigFrequency(3589578, 5879385) // true
sameDigFrequency(22, 222) // false
*/

// solution 1
function sameDigFrequency(num1, num2) {
	let frequency = {};

	// turn both numbers to strings
	let integer1 = num1.toString();
	let integer2 = num2.toString();

	// if length is not same, return false
	if (integer1.length !== integer2.length) return false;

	// loop num 1 and place into frequency
	for (let i = 0; i < integer1.length; i++) {
		if (frequency[integer1[i]] === undefined) {
			frequency[integer1[i]] = 0;
		}
		frequency[integer1[i]]++;
	}

	// loop num2
	for (let i = 0; i < integer2.length; i++) {
		// if num is in frequency
		console.log(frequency[integer2[i]]);
		if (frequency[integer2[i]]) {
			// set the value to 0
			frequency[integer2[i]] = 0;
		}
	}

	// get array of all values from frequency
	const freqValues = Object.values(frequency);

	// loop array of values
	for (let item of freqValues) {
		// if any value is not 1
		if (item !== 0) {
			return false;
		} else {
			// return true
			return true;
		}
	}
}

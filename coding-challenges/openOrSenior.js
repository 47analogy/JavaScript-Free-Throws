/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
They would like your help with an application form that will tell prospective members 
which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of lists containing two items each. Each list contains information 
for a single potential member. Information consists of an integer for the person's age and 
an integer for the person's handicap.


Example Input
[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

Example Output
["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

// Solution #1 - Using Array.flat() --not supported by all browsers yet
function openOrSenior(data) {
	// create a flat and output array
	const flatArr = data.flat();
	const outputArr = [];

	// look at age
	for (let i = 0; i < flatArr.length; i += 2)
		// if age > 55 && handicap > 7
		if (flatArr[i] >= 55 && flatArr[i + 1]) {
			// output senior
			outputArr.push('Senior');
			// else output open
		} else {
			outputArr.push('Open');
		}
	return outputArr;
}

// Solution #2 - Stepping through sub arrays (each sub array index is 0 or 1)
function openOrSenior(data) {
	const output = [];

	for (let i = 0; i < data.length; i++) {
		if (data[i][0] >= 55 && data[i][1] > 7) {
			output.push('Senior');
		} else {
			output.push('Open');
		}
	}

	return output;
}

// Solution #3 - Using forEach
function openOrSenior(data) {
	const output = [];

	data.forEach(member => {
		if (member[0] >= 55 && member[1] > 7) {
			output.push('Senior');
		} else {
			output.push('Open');
		}
	});

	return output;
}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]));

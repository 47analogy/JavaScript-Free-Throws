// Hitting the Jackpot

// Create a function that takes in an array (slot machine outcome) and
// returns true if all elements in the array are identical, and false otherwise.
// The array will contain 4 elements.

// Examples:

// testJackpot(["@", "@", "@", "@"]) ➞ true

// testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

// testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

// testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

// testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false

// The elements must be exactly identical for there to be a jackpot.

function testJackpot(outcomes) {
	const jackpotItems = {};

	// loop thru array and add each item as an object
	for (let i = 0; i < outcomes.length; i++) {
		if (jackpotItems[outcomes[i]] === undefined) {
			jackpotItems[outcomes[i]] = 0;
		}
		jackpotItems[outcomes[i]]++;
	}

	// check object values
	let results = Object.values(jackpotItems);

	// if object value equals 4 then return true
	if (results[0] !== 4) {
		return false;
	} else {
		// otherwise return false
		return true;
	}
}

console.log(testJackpot(['3', '3', '3', '3']));

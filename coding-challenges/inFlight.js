// Write a function that takes an integer flight_length (in minutes)
// and a list of integers movie_lengths (in minutes)
// and returns a boolean indicating whether there are
// two numbers in movie_lengths whose sum equals flight_length.

// O(n^2) --> not good
function inflight(flightLength, movieLength) {
	let firstNum = 0;
	let secNum = 0;

	// loop array to get number to add to every other ones
	for (let i = 0; i < movieLength.length; i++) {
		firstNum = movieLength[i];
		// loop array to add to remaining numbers
		for (let j = i + 1; j < movieLength.length; j++) {
			secNum = movieLength[j];
			// get the sum and compare to target
			if (firstNum + secNum === flightLength) {
				// return true or false
				return true;
			}
		}
	}
	return false;
}

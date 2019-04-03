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

console.log(inflight(10, [4, 3, 2, 5, 7]));

// Better version
function inflight(flightLength, movieLength) {
	let firstMovie = 0;
	let secondMovie = 0;

	// create set for movies
	const movies = new Set();

	// loop through moviesLengths
	for (let i = 0; i < movieLength.length; i++) {
		firstMovie = movieLength[i];

		// check if movies set has 2 movies equal to flightLength

		// ie for firstMovie = 4, we want secondMovie = 6
		secondMovie = flightLength - firstMovie;
		// ie look for secondMovie = 6 in the movies set
		if (movies.has(secondMovie)) {
			return true;
		}
		// not equal to flight length, so add the movie to set
		// and keep looking
		movies.add(firstMovie);
	}
	// none of the movies equals flightLength
	return false;
}

console.log(inflight(10, [4, 9, 2, 9, 7]));

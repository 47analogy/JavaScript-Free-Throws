/*
Write a function that takes an integer flightLength (in minutes) 
and an array of integers movieLengths (in minutes) and returns a
boolean indicating whether there are two numbers in movieLengths 
whose sum equals flightLength.

inFlightMovies(250, [20, 100, 120, 150, 200]) => true
inFlightMovies(250, [20, 500, 120, 150, 200]) => false

*/

// solution 1
function inFlightMovies(flightLength, movieLengths) {
  let sorted = movieLengths.sort((a, b) => a - b); // O (n log n)

  console.log(sorted);

  let left = 0;
  let right = movieLengths.length - 1;

  while (left < right) {
    let sum = sorted[left] + sorted[right];

    if (sum === flightLength) {
      return true;
    } else if (sum > flightLength) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

// better solution using a set
function inFlightMovies(flightLength, movieLengths) {
  const moviesSeen = new Set();

  for (let movie of movieLengths) {
    const firstMovieSeen = movie;

    const matchingSecondMovie = flightLength - firstMovieSeen;

    if (moviesSeen.has(matchingSecondMovie)) {
      return true;
    }
    
    moviesSeen.add(firstMovieSeen);
  }
  return false;
}

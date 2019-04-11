/*
Find Rotation Point
You went and bought a copy of Webster's English dictionary on April Fool's Day and 
received the joke edition of the dictionary. You open it up and see that the first entry 
in the dictionary starts somewhere in the middle. Once the end of the alphabet is reached, 
it circles around and starts over at the 'A' section and goes all the way through until it r
eaches the beginning. Otherwise, though, everything else seems to be in order.

For example, a rotated list of words might look something like this:

const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',    // <-- rotation happens here
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
]
Write a function findRotationPoint that receives an array of words and calculates the 
index of the point where the rotation occurs. With the above list of words,
 your function would return 5.
*/

// find which word is the rotation point and assign to variable
// loop through the input array and search for rotation point word
// return index where it occurs
// Can't use sort without creating a new copy (i.e. map) of input array because sort mutates the orginal array

const findRotationPoint = words => {
	let rotationIndex; // holds rotation point index

	// map and sort array then return first word
	const rotationWord = words
		.map(word => word)
		.sort()
		.shift();

	// compare each element in words to rotationWord and return index
	rotationIndex = words.indexOf(rotationWord);
	return rotationIndex;
};

// using modified binary search
const findRotationPoint = arr => {
	const firstIndex = arr[0];

	let lowIndex = 0;
	let highIndex = arr.length - 1;

	while (lowIndex < highIndex) {
		const midIndex = Math.floor((lowIndex + highIndex) / 2);
		if (arr[midIndex] >= firstIndex) {
			// look right
			lowIndex = midIndex;
		} else {
			// look left
			highIndex = midIndex;
		}
		// if low and high meet
		if (lowIndex + 1 === highIndex) {
			break;
		}
	}
	return highIndex;
};

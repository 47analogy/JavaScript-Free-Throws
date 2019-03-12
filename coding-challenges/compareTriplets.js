/* Given two arrays, with 3 elements in each, compare each corresponding element and assign a 1 point for the greater element. 
Return the score as an array

Example: 

array1 = [5, 6, 7]
array2 = [3, 6, 10]

outputs [array1 score, array2 score] = [1, 1] because 5 > 3, 6 = 6, 7 < 10.
*/

// TODO: refactor...make DRY

function compareTriplets(a, b) {
	// hold score for each element compare
	let scoreA = 0;
	let scoreB = 0;

	// combine both arrays
	const combineArr = [...a, ...b];

	// compare 1st elements
	if (combineArr[0] > combineArr[3]) {
		scoreA += 1;
	} else if (combineArr[0] < combineArr[3]) {
		scoreB += 1;
	}

	// compare 2nd elements
	if (combineArr[1] > combineArr[4]) {
		scoreA += 1;
	} else if (combineArr[1] < combineArr[4]) {
		scoreB += 1;
	}

	// compare 3rd elements
	if (combineArr[2] > combineArr[5]) {
		scoreA += 1;
	} else if (combineArr[2] < combineArr[5]) {
		scoreB += 1;
	}

	// places scores in array and return
	const score = [scoreA, scoreB];
	return score;
}

const al = [17, 28, 30];
const bo = [99, 16, 8];

console.log(compareTriplets(al, bo));

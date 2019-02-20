/* Given a package with a weight limit limit and an array arr of item weights, 
implement a function getIndicesOfItemWeights that finds two items whose sum of 
weights equals the weight limit limit. Your function should return a pair [i, j] 
of the indices of the item weights, ordered such that i > j. If such a pair doesn’t 
exist, return an empty array.

Analyze the time and space complexities of your solution.

Example:

input: arr = [4, 6, 10, 15, 16]
       limit = 21
output: [3, 1]   // since these are the indices of
                // weights 6 and 15 whose sum equals 21
*/

// add each number in arr to each other and compare to limit
// if 2 num = limit place in output
// get indices of output
// return indices or []

const getIndicesOfItemWeights = (arr, limit) => {
	const output = {};

	// add nums to each other and compare to limit
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === limit) {
				output[i] = arr[i];
				output[j] = arr[j];
			}
		}
	}

	// put in correct order and get index
	let index = Object.keys(output);
	let values = Object.values(output);

	if (values[0] < values[1]) {
		let temp;
		temp = index[0]; //1
		index[0] = index[1]; // 15
		index[1] = temp; //6
	}

	return index;
};

const array = [4, 6, 10, 15, 16];
const lim = 21;
console.log(getIndicesOfItemWeights(array, lim)); // output: [3, 1]

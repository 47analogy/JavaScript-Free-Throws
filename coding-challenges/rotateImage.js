/*
Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9, 
write a method to rotate the image by 90 degrees counterclockwise. Can you do this in place?
Ex:

rotateImage([ [1, 2],
              [3, 4]]);
should return

[ [2, 4],
  [1, 3]].

Likewise, 
rotateImage([
  [1, 1, 5, 9, 9],
  [2, 2, 6, 0, 0],
  [3, 3, 7, 1, 1],
  [4, 4, 8, 2, 2],
  [5, 5, 9, 3, 3]
  ]);
should return

[ [ 9, 0, 1, 2, 3 ],
  [ 9, 0, 1, 2, 3 ],
  [ 5, 6, 7, 8, 9 ],
  [ 1, 2, 3, 4, 5 ],
  [ 1, 2, 3, 4, 5 ] ]
*/

// iterating multidimensional array using nested for loop
const teamWins = [
	['Eagles', 9],
	['Redskins', 3],
	['Cowboys', 1],
	['Giants', 7]
];

// loops elements in outer array
for (let i = 0; i < teamWins.length; i++) {
	// size of the inner array (items in each array)
	const innerArrLength = teamWins[i].length;
	console.log(innerArrLength);

	// loop elements in inner array
	for (let j = 0; j < innerArrLength; j++) {
		console.log('[' + i + ',' + j + '] = ' + teamWins[i][j]);
	}
}

// solution 1
function rotateImage(arr) {
	// reverse the rows
	arr = arr.map(item => {
		return item.reverse();
	});

	// swap the symmetric elements
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < i; j++) {
			let temp = arr[i][j];
			// console.log('temp', temp)
			arr[i][j] = arr[j][i];
			// console.log('arr[i][j]', arr[i][j]);
			// console.log('arr[j][i]', arr[j][i]);
			arr[j][i] = temp;
			// console.log('temp', temp)
		}
	}
	return arr;
}

// solution 2
function rotateImage(arr) {
	const length = arr.length;
	for (let i = 0; i < length / 2; i++) {
		for (let j = i; j < length - i - 1; j++) {
			let bucket = arr[i][j];
			arr[i][j] = arr[j][length - i - 1];
			arr[j][length - i - 1] = arr[length - i - 1][length - j - 1];
			arr[length - i - 1][length - j - 1] = arr[length - j - 1][i];
			arr[length - j - 1][i] = bucket;
		}
	}
	return arr;
}

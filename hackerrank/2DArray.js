/*
Given a  2D Array, :

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
We define an hourglass in A to be a subset of values with indices falling in this 
pattern in 's graphical representation:

a b c
  d
e f g
There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass'
values. Calculate the hourglass sum for every hourglass in arr, then print the 
maximum hourglass sum.
*/

/*
[[1, 2, 3, 4, 5, 6],
 [7, 8, 9, 10, 11, 12],
 [13, 14, 15, 16, 17, 18],
 [19, 20, 21, 22, 23, 24], 
 [25, 26, 27, 28, 29, 30],
 [31, 32, 32, 34, 35, 36]]


***3 x 3***
1 2 3      1 2 3       [0][0] [0][1] [0][2]      
4 5 6  =>    5    =>          [1][1]          
7 8 9      7 8 9       [2][0] [2][1] [2][2]


***Pattern***

[i][j]     [i][j+1]    [i][j +2]
          [i+1][j+1]  
[i+2][j]  [i+2][j+1]   [i+2][j+2]
*/

function hourglassSum(arr) {
	const sumArr = [];
	// loop thru 2D array
	// get values of each 3 x 3 array
	for (let i = 0; i <= 3; i++) {
		for (let j = 0; j <= 3; j++) {
			let sum = 0;
			// get sum of each hourglass
			sum += arr[i][j];
			sum += arr[i][j + 1];
			sum += arr[i][j + 2];
			sum += arr[i + 1][j + 1];
			sum += arr[i + 2][j];
			sum += arr[i + 2][j + 1];
			sum += arr[i + 2][j + 2];
			// put sum into sum array
			sumArr.push(sum);
		}
	}
	// get the highest number and return it
	let maxSum = Math.max(...sumArr);
	return maxSum;
}

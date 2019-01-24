/*
Implement a function named generateRange(min, max, step), 
which takes three arguments and generates a range of integers 
from min to max, with the step. The first integer is the 
minimum value, the second is the maximum of the range
and the third is the step. (min < max)

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
which takes three arguments and generates a range of integers from min to max, with given step. The first is minimum value, second is maximum of range and the third is step.

Conditions:
min < max
step > 0
the range does not HAVE to include max (depending on the step)
*/

// create an output array to return
// use for loop starting from min up to max, but
// use step to increment (i = i + step)
// push number to array
// return output

// demonstrates how to use a for loop with an increment besides 1
// ? array methods not ideal b/c input for range is 2 numbers

const generateRange = (min, max, step) => {
	const range = [];

	// i to be incremented by i + step
	for (let i = min; i <= max; i += step) {
		range.push(i);
	}
	return range;
};

console.log(generateRange(2, 10, 2));
console.log(generateRange(1, 10, 3));

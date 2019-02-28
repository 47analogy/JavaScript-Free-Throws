// Write a function that receives an array of integers and returns an array of the products.

// For example, given

// [1, 7, 3, 4]
// your function should return

// [84, 12, 28, 21]
// by calculating

// [7*3*4, 1*3*4, 1*7*4, 1*7*3]

// Try to also do a solution that does not to use division
// What is the time and space complexity

// solush1 - w/ division
const productOfAllNums = arr => {
	const prodArr = [];
	let product;

	// get product of arr
	product = arr.reduce((total, num) => {
		return total * num;
	});

	for (let i = 0; i < arr.length; i++) {
		prodArr.push(product / arr[i]);
	}

	return prodArr;
};

productOfAllNums([1, 7, 3, 4]); // [84, 12, 28, 21]

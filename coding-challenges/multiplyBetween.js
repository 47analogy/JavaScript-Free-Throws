// Write a function called "multiplyBetween".

// Given 2 integers, "multiplyBetween" returns the product between the
// two given integers, beginning at num1, and excluding num2.

// Notes:
// * The product between 1 and 4 is 1 * 2 * 3 = 6.
// * If num2 is not greater than num1, it should return 0.

// var output = multiplyBetween(2, 5);
// console.log(output); // --> 24

// Attempt 1
// if condition num1 > num2
// populate array with nums b/t num1 and num2
// get products of all nums
// return output

function multiplyBetween(num1, num2) {
  let productArr = [];
  let product = 1;

  if (num1 > num2) return 0;

  for (let i = num1; i < num2; i++) {
    productArr.push(i);
  }

  for (let j = 0; j < productArr.length; j++) {
    product *= productArr[j];
  }
  return product;
}

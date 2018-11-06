// sumDigits(10);  // Returns 1
// sumDigits(99);  // Returns 18
// sumDigits(-32); // Returns 5

// takes a number and sums the digits
function sumDigits(number) {
  let sumArr = [];
  let sum = 0;

  // cases where number is negative
  number = Math.abs(number);

  // convert to string
  // split into digits
  // map and return a new number array
  sumArr = number
    .toString()
    .split("")
    .map(Number);

  // sum the array
  for (let i = 0; i < sumArr.length; i++) {
    sum += sumArr[i];
  }

  return sum;
}

console.log(sumDigits(99));

/* alternative ways to solve

const sumDigits = (number) => {
  String(number).replace('-', '').split('').reduce((prev, curr) => prev + Number(curr), 0);
  return number;
}

function sumDigits(number) {
  // Turn number into absolute value -> Stringify number -> Split at each character
  var values = String(Math.abs(number)).split("");
  // Instantiate variable to hold math result
  var product = null;
  // For each value, add the value to the product
  for (var i = 0; i < values.length; i++) {
    product = product + Number(values[i]);
  }
  // Return the product variable
  return product;
}

*/

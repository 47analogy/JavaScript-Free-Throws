/*
An Armstrong number is an n-digit number that is equal to the sum of
the n'th powers of its digits. Determine if the input number is an Armstrong number.
Return either true or false .

For example with the number 153 there are 3 digits so you would add together
the cubed values of all the digits like this: 1^3 + 5^3 + 3^3 === 153

Input Sample:

6 --> 6^1 = 6
153 --> 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
351 --> 3^3 + 5^3 + 1^3 + 1^3 = 27 + 3 + 125 = 153 (not 351)

Output Sample:

true
true
false
*/

// convert numbers to single digit array
// get the nth power of each digit (based on array length)
// get sum the nth power digits (use for-loop or array methods)
// compare and return true or false
function isArmstrongNumber(n) {
  let sum = 0; // holds sum of nth power digits
  const strArr = n.toString().split(""); // convert number to string array
  const nthPower = strArr.length; // exponent

  // loop strArr and sum exponents of the digits
  // note: still string array so convert to numbers using Number()
  for (let i = 0; i < strArr.length; i++) {
    // console.log(Number(strArr[i]));
    sum = sum + Math.pow(Number(strArr[i]), nthPower);
  }
  // compare if Armstrong number or not
  if (sum === n) {
    return true;
  } else {
    return false;
  }
}

const input1 = 6;
const input2 = 153;
const input3 = 351;

console.log(isArmstrongNumber(input1)); // true
console.log(isArmstrongNumber(input2)); // true
console.log(isArmstrongNumber(input3)); // false

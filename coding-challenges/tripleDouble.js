/*
Write a function tripledouble(num1,num2) which takes numbers num1 and num2 
and returns 1 if there is a straight triple of a number at any place in num1 
and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 
=> num1 has straight triple 999s and num2 has straight double 99s

tripledouble(1222345, 12345) == 0
=> num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
*/

function tripledouble(num1, num2) {
  // covert nums to strings
  const num1Str = num1.toString();
  const num2Str = num2.toString();

  // find a triplet
  for (let i = 0; i < num1Str.length; i++) {
    if (num1Str[i] === num1Str[i + 1] && num1Str[i] === num1Str[i + 2]) {
      let triplet = num1Str[i];
      if (checkDouble(triplet)) {
        return 1;
      }
    }
  }

  // helper to see if a triplet is also a double
  function checkDouble(numToCheck) {
    for (let i = 0; i < num1Str.length + 1; i++) {
      if (num2Str[i] === num2Str[i + 1] && num2Str[i] === numToCheck) {
        return true;
      }
    }
  }

  return 0;
}

/*
An integer d is a divisor of an integer n if the
remainder of n / d = 0.

Given an integer, for each digit that makes up the
integer determine whether it is a divisor.Count
the number of divisors occurring within the integer.

Note: Each digit is considered to be unique, so each
occurrence of the same digit should be counted
(e.g.for n = 111, 1 is a divisor of 111 each time 
it occurs so the answer is 3).

12 => 2

1012 => 3
*/

// split integer into digits and see if each digit is a divisor
function findDigits(n) {
  let count = 0;

  const digits = n
    .toString()
    .split("")
    .map(num => Number(num))
    .forEach(digit => {
      if (checkDivisor(n, digit)) {
        count++;
      }
    });

  function checkDivisor(integer, num) {
    if (integer % num === 0) {
      return true;
    }
  }

  return count;
}

console.log(findDigits(12));

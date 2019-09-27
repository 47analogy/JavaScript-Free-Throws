/*
Write function that accepts a base and an exponent. The function
should return the power of the base to the exponent.
*/

function power (base, exp) {
  if (exp === 0) {
    return 1
  } else {
    return base * power(base, exp - 1)
  }
}

/*
Write function factorial that accepts a number and return the factorial
of that number.
i.e. factorial(4) = 4 * 3 * 2 * 1  = 24
Note: Factorial (0) is 1.
*/

function factorial (n) {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

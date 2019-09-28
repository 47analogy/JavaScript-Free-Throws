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

/*
Write function productOfArray that takes an array of numbers and returns
the product of them all
i.e.  productOfArray([1, 2, 3]) => 6
*/

function productOfArray (arr) {
  if (arr[0] === 0) return 0 // case where array contains just a zero

  if (arr.length === 1) {
    return 1
  } else {
    return arr[1] * productOfArray(arr.slice(1)) // chop off an item
  }
}

/*
Write function recursiveRange that takes a number and adds
up all the numbers from 0 to n
i.e.  productOfArray(6) => 21
*/

function recursiveRange (n) {
  if (n === 0) {
    return 0
  } else {
    return n + recursiveRange(n - 1)
  }
}

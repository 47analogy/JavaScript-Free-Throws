/*
A twin prime is a prime number that differs from another prime number by two.
Write a function called isTwinPrime which takes an integer
and returns true if it is a twin prime, or false if it is not.

Example:

5 is a prime, and 5 + 2 = 7, which is also a prime, so returns true.
9 is not a prime, and so does not need checking, so it returns false.
7 is a prime, but 7 + 2 = 9, which is not a prime. However, 7 - 2 = 5, which is a prime, so it returns true.
23 is a prime, but 23 + 2 is 25, which is not a prime.  23 - 2 is 21, which isn't a prime either, so 23 is not a twin prime.

Prime number can only be divided by 1 and itself, so
any even number can't be a prime number
*/

// check if input num is prime
// if not => return false
// if yes => add 2 to it and check if prime
// if yes => return true
// if no => subtract 2 and check if prime
// if yes => return true
// if not => return false

function isTwinPrime(n) {
	// helper function to determine a prime number
	// sees if a number divides evenly into the imput num
	function isPrime(val) {
		for (let i = 2; i < val; i++) {
			if (val % i === 0) {
				return false;
			}
		}
		// returns true
		return val >= 2;
	}

	// test if adding or subtracting 2 is also a prime
	if (isPrime(n) && isPrime(n + 2)) {
		return true;
	} else if (isPrime(n) && isPrime(n - 2)) {
		return true;
	} else {
		return false;
	}
}

// Try to optimize

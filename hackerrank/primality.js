// determine if a number n is prime
// Prime - not divisible by anything but 1 and itself

// O(n)
function primality(n) {
  // edge cases
  if (n === 1) return 'Not Prime';

  // loop through range between 2 and n
  for (let i = 2; i < n; i++) {
    // if n % i === 0
    if (n % i === 0) {
      // Not prime
      return 'Not prime';
    }
  }

  // prime
  return 'Prime';
}

// O(Sqrt(n))
function primality(n) {
  if (n === 1) return 'Not Prime';

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return 'Not prime';
    }
  }

  return 'Prime';
}

/*
Lilah has a stringof lowercase English letters that she repeated infinitely many times.

Given an integer find and print the number of letter a's in the first n letters of Lilah's infinite string.

For example, if the string s = 'abcac and , n = 10 the substring we consider is abcacabcac,
the first 10 characters of her infinite string. There are  occurrences of a in the substring.

Function Description

It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider

*/

function repeatedString (s, n) {
  let aCount = 0 // # of a in input string
  let count = 0 // # of a in repeated string

  // if string only consist of a's, return n
  if (s === 'a') return n // might not even need this, but might save some time

  // get number of a in input str
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      aCount++
    }
  }

  // get # of a in repeated str that divides evenly by n
  count = Math.floor(n / s.length) * aCount

  // if repeated str does not divide evenly by n
  // get the # of additional a
  const aCountOdd = n % s.length

  for (let i = 0; i < aCountOdd; i++) {
    if (s[i] === 'a') {
      count++
    }
  }

  return count
}

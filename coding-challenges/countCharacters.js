/*
The main idea is to count all the occuring characters(UTF-8) in string. 
If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { }
*/

function count(string) {
  // create dictionary
  const letterCount = {};

  // edge case for empty string
  if (string.length === 0) return letterCount;

  // loop string and add letter: frequency to dictionary
  string.split("").forEach(char => {
    if (!letterCount[char]) {
      letterCount[char] = 0;
    }
    letterCount[char]++;
  });
  return letterCount;
}

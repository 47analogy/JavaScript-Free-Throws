/*
A pangram is a sentence that contains every single letter
of the alphabet at least once. For example, the sentence
"The quick brown fox jumps over the lazy dog" is a pangram
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return true if it is, false if not. Ignore numbers and punctuation.
*/

function isPangram(string) {
  //turn string to uppercase remove everything except letters
  // get charCode for letters
  const unicode = string
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .split('')
    .map((char) => char.charCodeAt(char));

  // loop and check unicode for A to Z --> 65 = A, 90 = Z
  for (let i = 65; i <= 90; i++) {
    // if a letter of alphabet is not present
    if (unicode.indexOf(i) === -1) {
      return false;
    }
  }
  // all letters are represented
  return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog')); // true
console.log(isPangram('The quick fox jumps over the lazy dog')); // false

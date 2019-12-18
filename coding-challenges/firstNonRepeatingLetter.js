/*
Write a function named first_non_repeating_letter that takes
a string input, and returns the first character that is not 
repeated anywhere in the string.

For example, if given the input 'stress', the function should 
return 't', since the letter t only occurs once in the string, 
and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered
the same character, but the function should return the correct case
for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return 
an empty string ("") or None 
*/

function firstNonRepeatingLetter(s) {
  const letters = {};

  // add letters and frequency to letters object
  s.split("").forEach(char => {
    char = char.toLowerCase();
    if (!letters[char]) {
      letters[char] = 0;
    }
    letters[char]++;
  });

  // loop and get first letter that appears once
  for (let letter of s) {
    let char = letter.toLowerCase();
    if (letters[char] === 1) {
      return letter;
    }
  }
  return "";
}

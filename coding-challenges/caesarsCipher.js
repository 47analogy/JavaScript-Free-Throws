//Given a non-empty string of lowercase letters and a non-negative integer key, write a function that returns a new string obtained by shifting every letter in the input by k positions, where k is the key. Note that letters should wrap around the alphabet such as in the case of "z" shifted by 1 returns "a".

//Ex. Sample Input: "xyz", 2
//Ex. Sample Output: "zab"

function caesarCipher(string, key) {
  let returnString = '';
  for (let i in string) {
    const origCharCode = string.charCodeAt(i);
    const letterCharCode = origCharCode - 96;
    const computedCharCode = letterCharCode + key;

    if (computedCharCode <= 26) {
      returnString += String.fromCharCode(origCharCode + key);
    } else {
      const remainder = computedCharCode % 26;
      returnString += String.fromCharCode(96 + remainder);
    }
  }

  return returnString;
}

/*
CCC 1.1
*/

// does the string have spaces (i.e contain words)?
const isUnique = (str) => {
  // make all letters lowercase and remove spaces
  lowerCaseStr = str.toLowerCase().replace(/\s/g, '');

  // loop string
  for (let i = 0; i < lowerCaseStr.length; i++) {
    let currentChar = lowerCaseStr[i];
    // check if currentChar appears elsewhere in string, starting from next index
    if (lowerCaseStr.indexOf(currentChar, i + 1) !== -1) {
      return false;
    }
  }
  return true;
};

console.log(isUnique('The quick brown fox jumped '));
console.log(isUnique('The fox jumped'));
console.log(isUnique('cupcake'));
console.log(isUnique('pear'));

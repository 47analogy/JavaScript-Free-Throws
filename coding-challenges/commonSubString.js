/*
Function takes in 2 strings, count how many times string 2 appears
in string 1
*/

// Naive solution

function commonSubString(str1, str2) {
  let count = 0;

  //loop over long str
  for (let i = 0; i < str1.length; i++) {
    //loop over short str
    for (let j = 0; j < str2.length; j++) {
      // if chars don't match, break out of inner loop
      if (str2[j] !== str1[i + j]) {
        break;
      }
      // if inner loop completes, count a match
      if (j === str2.length - 1) {
        count++;
      }
    }
  }

  //return count
  return count;
}

const str1 = 'lorlolie loled';
const str2 = 'lol';

console.log(commonSubString(str1, str2));

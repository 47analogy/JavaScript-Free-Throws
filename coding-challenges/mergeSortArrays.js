/*
Given 2 sorted arrays, write a function to merge 
them into 1 sorted array

i.e.
input:
const array1 = [3, 4, 6, 10, 11, 15];
const array2 = [1, 5, 8, 12, 14, 19];

output:
[1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
*/

// key - both arrays are already sorted

// Attempt #1
function mergeArrays(array1, array2) {
  const merged = [...array1, ...array2];
  merged.sort((a, b) => a - b);

  return merged;
}

// Attempt #2
function mergeArrays(array1, array2) {
  const merged = [];

  // pointer for first array
  let array1Pointer = 0;
  // pointer for second array
  let array2Pointer = 0;

  // loop the arrays and watch out for arrays of unequal sizes
  while (array1Pointer < array1.length || array2Pointer < array2.length) {
    let first = array1[array1Pointer];
    let second = array2[array2Pointer];

    // if first < second or second is undefined
    if (first < second || second === undefined) {
      // push first to merged
      merged.push(first);
      // increase pointer for first
      array1Pointer++;
    }

    // if second < first or first is undefined
    if (second < first || first === undefined) {
      // push second to array
      merged.push(second);
      // increase pointer for second
      array2Pointer++;
    }
  }

  return merged;
}

console.log(mergeArrays([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]));

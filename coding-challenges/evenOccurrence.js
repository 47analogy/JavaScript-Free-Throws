// Find the first item that occurs an even number of times in an array.

// Remember to handle multiple even-occurrence items and return the first one.

// Return null if there are no even-occurrence items.

// Example usage:
// const arr = [1, 7, 2, 4, 5, 6, 8, 9, 6, 4];
// console.log(evenOccurrence(arr)); // <--- 4

function evenOccurrence(arr) {
  let count = {}; // create object to keep count of occurences

  // case for if array is empty
  if (arr.length === 0) {
    return null;
  }

  // loop through the array and keep a count of each instance of a number
  for (let i = 0; i < arr.length; i++) {
    if (count.hasOwnProperty(arr[i])) {
      // if count contains the number aka (arr[i]) already then increase the count by 1
      count[arr[i]]++;
    } else {
      count[arr[i]] = 1; // if count does not contain the number then give it a count of 1
    }
  }

  // now that we know the number of occurences for each element
  // find the first element with an even count and return it
  for (let j = 0; j < arr.length; j++) {
    if (count[arr[j]] % 2 === 0) {
      // knowing that 2 divides in any number w/o a remainder
      return arr[j];
    }
  }
  // case for when if none of the elements are even
  return null;
}

console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]));

/*
Find the median of two sorted arrays

Ex:

arr1 = [1, 3, 5]
arr2 = [2, 4, 6]

median(arr1, arr2) = 3.5
*/

// combine both arrays
// determine if number of items is odd or even
// if odd, find the middle number
// if even, find the 2 middle numbers and get average

const median = (arr1, arr2) => {
  const combinedArr = [...arr1, ...arr2].sort();

  return combinedArr.length % 2 !== 0
    ? combinedArr[Math.floor(combinedArr.length / 2)] // odd length array
    : (combinedArr[combinedArr.length / 2 - 1] + // even length array
        combinedArr[combinedArr.length / 2]) /
        2;
};

/*
strArr contains 2 elements: both elements are a string of comma-separated numbers,
sorted in ascending order.

Return a comma-separated string containing the numbers that appear in both elements
of strArr in sorted order. If there is no intersection, return false.

Ex:

Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13

Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10
*/

function findIntersection(strArr) {
  // combine both elements
  strArr = strArr.join(',').split(',');

  // get rid of white spaces and turn to numbers
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].trim();
    strArr[i] = Number(strArr[i]);
  }

  // sort numbers and filter the common/duplicate elements
  strArr = strArr
    .sort((a, b) => a - b)
    .filter((a, b) => strArr.indexOf(a) !== b);

  if (strArr.length === 0) {
    return false;
  }

  return strArr.join();
}

/*
Complete the insertionSort1 function. It should print the interim and final arrays, 
each on a new line.

insertionSort1 has the following parameter(s):
arr: an array of integers to sort

Sample Input
[2, 4, 6, 8, 3]

Sample Output - Print the array as a row of space-separated integers each time 
there is a shift or insertion.

2 4 6 8 8 
2 4 6 6 8 
2 4 4 6 8 
2 3 4 6 8 
*/

function insertionSort1(arr) {
  // assign unsortedNum
  const unsortedNum = arr[arr.length - 1];

  // remove unsortedNum
  arr.pop();

  // loop backwards starting from last element
  for (let i = arr.length - 1; i >= 0; i--) {
    let currentNum = arr[i];
    // if currentNum > unsortedNum
    if (currentNum > unsortedNum) {
      // insert currentNum at arr[element index + 1]
      arr[i + 1] = currentNum;
      // print arr as a row
      console.log(arr.join(" "));
    } else {
      //insert unsortedNum at arr[element index + 1]
      arr.splice(i + 1, 1, unsortedNum);
      // print arr as a row
      console.log(arr.join(" "));
      // exit loop
      break;
    }
    // if unsortedNum is 1 and has to be inserted as first element
    if (i === 0) {
      arr.splice(i, 1, unsortedNum);
      console.log(arr.join(" "));
    }
  }
}

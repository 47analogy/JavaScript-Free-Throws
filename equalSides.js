// Write a function that returns the index of the given array at which the sums of the numbers on either side of it are
// equal to each other.
// Example:

// equalSides([1, 2, 3, 4, 3, 2, 1]);

// should return 3 because the sums of the numbers on either side of arr[3] are both equal to 6. (1+2+3 (4) 3+2+1)

// The length of the sides do not have to be equal, only the sums of their values.
// equalSides([1, 1, 1, 4, 2, 1]);

// should also return 3 (arr[3] = 4), because 1+1+1 is 3, and 2+1 is 3.

// If the array can't be split into equal sides, return -1.

const arr1 = [1, 2, 3, 4, 3, 2, 1];

// #1
function equalSides(arr) {
  // set right side to be the sum of the whole array
  let rightSum = arr.reduce((acc, val) => acc + val, 0);
  //set left side to zero
  let leftSum = 0;

  //loop thru array and get the sum of arr[i-1]
  for (let index = 0; index < arr.length; i++) {
    // get the sum of arr[i-1]
    rightSum -= arr[index];
    //compare the left and right
    // if equal then return index i
    if (rightSum === leftSum) return index;
    // if not equal then get sum of arr[i+1]
    // to compare on next iteration
    leftSum += arr[i];
  }
  // if nothing equals
  return -1;
}

console.log(equalSides(arr1));

// #2
function equalSides(arr) {
  let leftSum = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    leftSum += arr[i - 1];
    let rightSum = 0;
    for (let j = i; j < arr.length - 1; j++) {
      rightSum += arr[j + 1];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

console.log(equalSides(arr1));

// #3
function equalSides(arr) {
  function reduceSide(side) {
    return side.reduce(function(result, currentNum, index, side) {
      return result + currentNum;
    }, 0);
  }
  for (var i = 1; i < arr.length; i++) {
    var a = arr.slice(0, i);
    var b = arr.slice(i + 1, arr.length);
    if (reduceSide(a) === reduceSide(b)) {
      return i;
    }
  }
  return -1;
}

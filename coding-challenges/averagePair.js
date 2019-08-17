// Given a sorted array and a target, determine if there is a pair of values
// in the array where the average of the pair equals the target
// average

function averagePair (arr, target) {
  let left = 0
  let right = arr.length - 1

  if (arr.length === 0 || arr.length === 1) {
    return false
  }

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2

    // add 2 item and divide by 2
    // if avg = target
    if (avg === target) {
      // return true
      return true
    } else if (avg > target) {
      right--
    } else {
      left++
    }
  }
  // else return false
  return false
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([], 3)) // false
console.log(averagePair([1, 2, 4, 5], 3)) // true

/*
Karl has an array of integers. He wants to reduce the array until all remaining
elements are equal. Determine the minimum number of elements to delete to reach his goal.

For example, if his array is arr = [1, 2, 2, 3], we see that he can delete the 2 elements 1 and 3
leaving arr = [2, 2]. He could also delete both twos and either the  or the , but that would take
3  deletions. The minimum number of deletions is 2.

Function Description

Complete the equalizeArray function in the editor below. It must return an integer that
denotes the minimum number of deletions required.

Sample Input:
5
3 3 2 1 3

Sample Output:
2
*/

// need to know all items in array
// and if there are any common elememts in array

function equalizeArray (arr) {
  const itemCount = {}
  let minCount = 0

  // populate hash table
  for (let i = 0; i < arr.length; i++) {
    if (itemCount[arr[i]] === undefined) {
      itemCount[arr[i]] = 0
    }
    itemCount[arr[i]]++
  }

  // get count of most commont item
  const itemFreq = Object.values(itemCount)
  const maxFreq = Math.max(...itemFreq)
  // if there is a most common item
  if (maxFreq >= 2) {
    // calculate min count: difference between most common item and total items
    minCount = arr.length - maxFreq
  } else {
    // if there are no common elements
    // then min count is all items except 1
    minCount = arr.length - 1
  }

  return minCount
}

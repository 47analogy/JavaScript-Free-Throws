/*
Write a function that accepts an array of integers and a number (n). The function should
calculate the maximum sum of n consecutive elements in the array.

i.e.
maxSubArrSum([1, 2, 5, 2, 8, 1, 5], 2) // 10
maxSubArrSum([4, 2, 1, 6, 2], 4) // 13
maxSubArrSum([], 4) // null
*/

const maxSubArrSum = (arr, n) => {
    let tempMax = 0;
    let maxSum = -Infinity; // account for negative numbers

    if (arr.length < n) return null;

    // loop over first n numbers and store sum as a tempMax
    for (let i = 0; i < n; i++) {
        let num = arr[i];
        tempMax += num;
    }
   
    // loop over array starting at index = num
    for (let i = n; i < arr.length; i++) {
        let prevItem =  arr[i - n]
        let nextItem = arr[i]
        
        // store maximum sum
        maxSum = Math.max(tempMax, maxSum)
        //subtract first item and add one item going to the right
        tempMax = tempMax - prevItem + nextItem;
    }
    return maxSum;
};

console.log(maxSubArrSum([1, 2, 5, 2, 8, 1, 5], 2));

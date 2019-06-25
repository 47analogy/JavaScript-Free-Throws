//https://leetcode.com/problems/squares-of-a-sorted-array/

/*Given an array of integers A sorted in non-decreasing order, 
return an array of the squares of each number, also in sorted non-decreasing
 order.

 

Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Example 2:

Input: [-7,-3,2,3,11]
*/
var sortedSquares = function (A) {

    let output = A.map(num => Math.pow(num, 2)).sort((a, b) => a - b)

    return output

};
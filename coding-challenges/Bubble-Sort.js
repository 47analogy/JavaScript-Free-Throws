/*
Bubble sort is the most basic sorting algorithm.
 It compares the first element of an array with the second element.
 If the first element is greater than the second element then it swaps them.
 Then it compares the second and third elements and swaps them if the second is larger.
 Then it compares the third and fourth elements and does the same.
 This continues and the the larger elements begin to "bubble" towards the end.
 The loop then restarts and repeats this process until it makes a clean pass
 without performing any swaps.

 Implement a function that takes an array and sorts it using this technique.
 Don't use JavaScript's built-in sorting function (Array.prototype.sort).

 What's the time complexity of your algorithm?  Are there ways you can improve it?

 Example:
 bubbleSort([2, 1, 3]); // returns [1, 2, 3]

blog.benoitvallon.com/sorting-algorithms-in-javascript/the-bubble-sort-algorithm/
*/

/* Algorithm
do

  swapped = false

  for i = 1 to indexOfLastUnsortedElement-1

    if leftElement > rightElement

      swap(leftElement, rightElement)

      swapped = true

while swapped

// create helper function to swap numbers
// loop thru the array
// compare element  i and i + 1
//     --> if they exist and i > i + 1
// swap elements via helper function
// keep doing until i < i + 1 for entire array (do while loop)
// return output

/*
helper - takes an array, two elements and swaps them
temp = temporary assignment
i = array element
j = array element
*/
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// array = the input array
function bubbleSort(array) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1); // swaps them
        swapped = true;
      }
    }
  } while (swapped); // keep looping while swapped is true
  return array;
}

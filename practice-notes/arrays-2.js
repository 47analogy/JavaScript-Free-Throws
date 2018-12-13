/*
array reduce
takes in a callback (anonymous function)
starting point for acc is optional

Parameters
acc  = total value
cur = current value

when it starts acc is 1 and cur is 4
works similar to a for loop in that
it adds 1 and 4 to get 5, which becomes acc and cur is now 7
repeats: travels right for each elements of the array until
there aren't any elements left
adds 5 to 7 which results in an output of 12
*/

const arr = [1, 4, 7];

// sum amounts in an array
const sum = arr.reduce((acc, cur) => {
  return acc + cur;
});

// shorter syntax
const sum2 = arr.reduce((total, amount) => total + amount);

console.log(sum);

console.log(sum2);

// find average using reduce
// using index
const arr2 = [3, 6, 9];

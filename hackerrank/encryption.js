/*
An English text needs to be encrypted using the following encryption scheme.

First, the spaces are removed from the text.

Then, it is rewritten into as a grid where the square root of the string length
is greater than the rows, which is greater than the columns.

Then the output is obtained by displaying all characters in a row and inserting
a space, etc.

Sample Input: haveaniceday
Sample Output: hae and via ecy

* Rewritten, the string has  3 rows and  4 columns:

have
anic
eday
*/

function encryption(s) {
  // findGridSize
  let sqrt = Math.sqrt(s.length);
  let row = Math.floor(sqrt);
  let col = Math.ceil(sqrt);

  const array2D = [];
  const grid = s.split('');

  // create2DMatrix
  while (grid.length) {
    array2D.push(grid.splice(0, col));
  }

  // TODO
  // displayMessage
}

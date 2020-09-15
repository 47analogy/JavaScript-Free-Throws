/*
Given an array, group the elements according to a size

i.e.
input: ['a', 'b', 'c', 'd', 'e', 'f', 'g','h'], size = 2

output: [['a', 'b'], ['c', 'd'], ['e', 'f'], ['g','h']]
*/

const chunkArray = (array, size) => {
  const outputArray = [];
  const arrayCopy = [...array]; // don't mutate original array

  while (arrayCopy.length > 0) {
    //extract from start index to size index
    outputArray.push(arrayCopy.splice(0, size));
  }

  return outputArray;
};

console.log(chunkArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 2));

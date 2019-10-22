/*
There is a collection of input strings and a collection of query strings.
For each query string, determine how many times it occurs in the
list of input strings.The function must return an array of integers
representing the frequency of occurrence of each query string in strings.

For example, given input of
string = ['aba', 'baba', 'aba', 'xzxb']
queries = ['aba', 'xzxb', 'ab']

Output will be [2, 1, 0]

matchingStrings has the following parameters:

strings - an array of strings to search
queries - an array of query strings
*/

function matchingStrings(strings, queries) {
  const frequency = {}; // look-up
  const occurences = []; // result

  // place the strings in a look-up (string: # of times it appears)
  for (let string of strings) {
    if (!frequency[string]) {
      frequency[string] = 0;
    }
    frequency[string]++;
  }

  // iterate each of the queries
  for (let string of queries) {
    // if query appears in obj
    if (frequency[string]) {
      // push into array
      occurences.push(frequency[string]);
    } else {
      // otherwise push 0
      occurences.push(0);
    }
  }
  // return array
  return occurences;
}

console.log(
  matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab'])
);

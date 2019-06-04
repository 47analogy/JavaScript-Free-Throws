/*
You've been hired to write the software to count the votes for a local election. 
Write a function countVotes that receives an array of (unique) names, each one 
representing a vote for that person. Your function should return the name of the 
winner of the election. In the case of a tie, the person whose name comes last 
alphabetically wins the election (a dumb rule to be sure, but the votes don't need
 to know).

Example:

const votes = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];

countVotes(votes);  // should return 'michael'
Analyze the time and space complexity of your solution.
*/
const countingVotes = arr => {
  const votes = {}; // hash table to store names: num of votes

  // sort arr alphabetically (makes time complexity worse)
  arr.sort();

  // loop though array and populate votes
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    if (votes[arr[i]] === undefined) {
      // name is not is votes
      votes[arr[i]] = 0; // add key : value
    }
    votes[arr[i]]++; // add a vote for name
  }
  // get name with most votes
  let winner = '';
  let count = 0;

  for (let key in votes) {
    if (votes[key] >= count) {
      count = votes[key];
      winner = key;
    }
  }

  // return name of winner
  return winner;
};

console.log(
  countingVotes([
    'veronica',
    'mary',
    'alex',
    'james',
    'mary',
    'michael',
    'alex',
    'michael',
  ])
);

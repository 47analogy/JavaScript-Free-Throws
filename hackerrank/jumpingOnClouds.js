/*
Emma is playing a new mobile game that starts with consecutively numbered
clouds. Some of the clouds are thunderheads and others are cumulus.
She can jump on any cumulus cloud having a number that is equal to the
number of the current cloud plus 1 or 2. She must avoid the thunderheads.
Determine the minimum number of jumps it will take Emma to jump from her
starting postion to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered 0 if they are safe
or 1 if they must be avoided. For example, c = [0, 1, 0, 0, 0, 1, 0] indexed
from 0...6.

The number on each cloud is its index in the list so she must avoid the
clouds at indexes  and . She could follow the following two paths:  or .
The first path takes jumps while the second takes .

*/

function jumpingOnClouds (c) {
  let count = 0

  // loop Array
  for (let i = 0; i < c.length; i++) {
    // check for if a jump of 2 spaces is valid
    if (c[i] === 0 && c[i + 2] === 0) {
      count++
      // skip over to next cloud to continue looping
      i = i + 1
    }
    // else check if a jump of 1 space is valid
    else if (c[i] === 0 && c[i + 1] === 0) {
      count++
    }
  }
  return count
}

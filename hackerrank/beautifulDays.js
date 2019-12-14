/*
Lily likes to play games with integers. She has created a new game where she determines
the difference between a number and its reverse. For instance, given the number 12, its reverse is 21.
Their difference is 9. The number 120 reversed is 21, and their difference is 99.

She decides to apply her game to decision making. She will look at a numbered range of days and
will only go to a movie on a beautiful day.

Given a range of numbered days, [i...j] and a number k, determine the number of days in the range that 
are beautiful. Beautiful numbers are defined as numbers where |i - reverse(i) is evenly divisible by k. 
If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful
days in the range.

Sample Input: i = 20, j = 23, k = 6
Sample Output: 2
*/

function beautifulDays(i, j, k) {
  let numBeautifulDays = 0;

  for (let day = i; day <= j; day++) {
    let num = day;
    let numReversed = day
      .toString()
      .split("")
      .reverse()
      .join("");

    if (Math.abs(num - numReversed) % k === 0) numBeautifulDays++;
  }
  return numBeautifulDays;
}

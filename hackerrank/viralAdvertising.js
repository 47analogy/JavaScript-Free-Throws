/*
HackerLand Enterprise is adopting a new viral advertising strategy.
When they launch a new product, they advertise it to exactly 5 people 
on social media. On the first day, half of those people (i.e., floor (5/2) = 2) 
like the advertisement and each shares it with 3 of their friends. At the 
beginning of the second day, floor(5/2) * 3 = 2 * 3 = 6 people receive the
advertisement. Each day, floor(recipients / 2) of the recipients like the 
advertisement and will share it with 3 friends on the following day. 
Assuming nobody receives the advertisement twice, determine how many people
have liked the ad by the end of a given day, beginning with launch day as day 1.

For example, assume you want to know how many have liked the ad by the end of the 5th day:

Day Shared Liked Cumulative
1      5     2       2
2      6     3       5
3      9     4       9
4     12     6      15
5     18     9      24
*/

// solush1
function viralAdvertising(n) {
  let initialLikes = 2; // always day 1 likes
  let likesBefore = 2; // used for calc
  let likesCurrent = Math.floor((likesBefore * 3) / 2);
  let cumulativeLikes = (initialLikes += likesCurrent);

  if (n === 1) {
    return initialLikes; // edge case for 1 day
  } else {
    for (let i = 0; i < n - 2; i++) {
      likesBefore = likesCurrent;
      likesCurrent = Math.floor((likesBefore * 3) / 2);
      cumulativeLikes = initialLikes += likesCurrent;
    }
  }

  return cumulativeLikes;
}

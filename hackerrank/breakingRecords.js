/*
Maria plays college basketball and wants to go pro. Each season 
she maintains a record of her play. She tabulates the number of 
times she breaks her season record for most points and least 
points in a game. Points scored in the first game establish her
 record for the season, and she begins counting from there.

For example, assume her scores for the season are represented in
the array scores = [12, 24, 10, 24]. Scores are in the same 
order as the games played. She would tabulate her results as follows:

                                 Count
Game  Score  Minimum  Maximum   Min Max
 0      12     12       12       0   0
 1      24     12       24       0   1
 2      10     10       24       1   1
 3      24     10       24       1   1
Given Maria's scores for a season, find and print the number of
times she breaks her records for most and least points scored during the season.

It must return an integer array containing the numbers of times 
she broke her records. Index 0 is for breaking most points records
and index 1 is for breaking least points records

Sample Input:
10 5 20 20 4 5 2 25 1

Sample Output:
2 4
*/

function breakingRecords(scores) {
  // recordHigh, recordLow (set to scores[0])
  let recordHigh = scores[0];
  let recordLow = scores[0];
  // min, max (set to 0)
  let min = 0,
    max = 0;
  // output = []
  const output = [];
  // loop each item inside the array and compare (loop)
  for (let i = 0; i < scores.length; i++) {
    // if recordLow > item
    if (recordLow > scores[i]) {
      // recordLow = item
      recordLow = scores[i];
      // increase min count
      min++;
    }

    if (recordHigh < scores[i]) {
      // recordHigh = item
      recordHigh = scores[i];
      // increase max count
      max++;
    }
  }
  // return output => [max, min]
  output[0] = max;
  output[1] = min;

  return output;
}

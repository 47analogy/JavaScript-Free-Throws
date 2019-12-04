/*
Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock.
Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Function Description

Complete the timeConversion function in the editor below. 
It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

s: a string representing time in a 12-hour clock format: hh:mm:ssAM or hh:mm:ssPM

Convert and print the given time in 24-hour format, where 00 <= hh <= 23.

Sample Input:
07:05:45PM

Sample Output:

19:05:45
*/

// only need to worry about hours and whether AM or PM
function timeConversion(s) {
  let militaryTime = " ";

  // 2 edge cases
  if (s.substr(0, 2) === "12" && s.includes("AM")) {
    militaryTime = "00" + s.substr(2, 6);
    return militaryTime;
  }

  if (s.substr(0, 2) === "12" && s.includes("PM")) {
    militaryTime = s.substr(0, 8);
    return militaryTime;
  }

  // determine if AM or PM
  if (s.includes("AM")) {
    militaryTime = s.substr(0, 8); // just drop AM
  } else {
    let hour = parseInt(s.substr(0, 2));
    hour += 12; // add 12 to the hours
    militaryTime = hour.toString() + s.substr(2, 6);
  }
  return militaryTime;
}

/*
A meeting is stored as objects with integer properties startTime and endTime. 
These integers represent the number of 30-minute blocks past 9:00am.
i.e.
{ startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
{ startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

Write a function mergeRanges() that takes an array of multiple meeting time 
ranges and returns an array of condensed ranges.

i.e.
Given:

[
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]


Returns:

[
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]
*/

// sort meetings by start times
// if meetings overlap (end time of 1st meeting is >= than start time of 2nd meeting)
// merge the 2 meetings

const mergeRanges = (meetingTimes) => {
  const conciseRanges = [];
  const sortedMeetings = meetingTimes.sort((a, b) => a.startTime - b.startTime);

  // add earliest meeting
  conciseRanges.push(sortedMeetings[0]);

  for (let i = 0; i < sortedMeetings.length; i++) {
    let current = sortedMeetings[i];
    let last = conciseRanges[conciseRanges.length - 1];

    if (current.startTime <= last.endTime) {
      // get the latest end time of the 2 meetings
      // current is now the start and latest end time
      last.endTime = Math.max(last.endTime, current.endTime);
    } else {
      // meeting can't be merged
      conciseRanges.push(current);
    }
  }

  return conciseRanges;
};

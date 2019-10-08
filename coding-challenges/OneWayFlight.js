/*
One-Way Flight Trip
You've booked a really cheap one-way flight. 
Unfortunately, that means you have tons of layovers 
before you reach your destination. The morning of, 
you woke up late and had to scramble to the airport to 
catch your first flight. However, in your rush, you 
accidentally scrambled all your flight tickets. 
You don't know the route of your entire trip now!

Write a function reconstructTrip to reconstruct your trip 
from your mass of flight tickets. Each ticket is
a two-element array with the source airport as the 
first element and the destination airport as 
the second element. The ticket for your first flight has 
a destination but no source, and the ticket for your final
flight has a source, but no destination.

An example input might look like this:

const tickets = [
  ['PIT', 'ORD'],
  ['XNA', 'CID'],
  ['SFO', 'BHM'],
  ['FLG', 'XNA'],
  [null, 'LAX'], 
  ['LAX', 'SFO'],
  ['CID', 'SLC'],
  ['ORD', null],
  ['SLC', 'PIT'],
  ['BHM', 'FLG'],
];
Your function should output an array with the route of your trip.
For the above example, it should look like this:

['LAX', 'SFO', 'BHM', 'FLG', 'XNA', 'CID', 'SLC', 'PIT', 'ORD']
*/

// input is a multideminsional array
// output is an array

// solush 1
function oneWayFlight(arr) {
  let start = '';
  const flights = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == null) {
      start = arr[i][1];
    }
    flights[arr[i][0]] = arr[i][1];
  }

  let j = 0;
  result.push(start);
  while (result.length < arr.length - 1) {
    result.push(flights[result[j]]);
    j++;
  }
  return result;
}

// solush 2
function oneWayFlight(arr) {
  let flights = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == null) {
      result.push(arr[i][1]);
    } else {
      flights[arr[i][0]] = arr[i][1];
    }
  }

  const airports = Object.keys(flights);

  for (let i = 1; i < airports.length; i++) {
    result.push(flights[result[i - 1]]);
  }
  return result;
}

console.log(oneWayFlight([[null, 'PDX'], ['PDX', 'DCA'], ['DCA', null]]));

console.log(
  oneWayFlight([
    ['PIT', 'ORD'],
    ['XNA', 'CID'],
    ['SFO', 'BHM'],
    ['FLG', 'XNA'],
    [null, 'LAX'],
    ['LAX', 'SFO'],
    ['CID', 'SLC'],
    ['ORD', null],
    ['SLC', 'PIT'],
    ['BHM', 'FLG'],
  ])
);

/*
  Callbacks functions are used everywhere in JavaScript.
  Remember that a callback is simply a function that is passed into another function.
  That function is then invoked inside the outer function and does some action.
  Take the following example

  function sayHello(name) {
    console.log(`Hello, ${name}`);
  }

  function callSayHelloWithName(callback) {
    const innerName = 'Lars';
    callback(innerName);
  }

  callSayHelloWithName(sayHello);
    
*/

/*
  Problem 1: Greet
  Create a function called `greet` that takes in a 'name' parameter
  simply use that function to alert the name provided;
  Next, create a function called `greetCaller` that takes a callback parameter
  our greetCaller function should declare a name variable and pass it to the callback.
  Invoke greetCaller with greet passed into it.
*/

// code greet here.

/*
  Problem 2: forEach
  use .forEach to loop over the simpsons list and alert each name passed back to your anonymous callback to the console. 
*/

const simpsons = ['Marge', 'Lisa', 'Homer', 'Bart', 'Maggie'];

// code for `forEach` goes here

/*
  Problem 3: every
  create a function called `every` that takes in an array and a callback as it's parameters
  loop over every single item (using a native for loop) and pass each item to the callback
  When you're done, make sure that you finish the code inside of `every` and ensure it works the way it's supposed to
*/

// every(simpsons, (/* don't forget your items */) => {
//   // fill this in.
//   // log ieach item that comes back to the console.
// });
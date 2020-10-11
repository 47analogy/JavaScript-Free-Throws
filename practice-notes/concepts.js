// Destructuring

//useful for extracting properties from objects
const dog = {
  name: 'Deuce',
  breed: 'Rottweiler',
  sex: 'male',
};

const { name, breed } = dog;

console.log(`The dog\'s name is ${name} and he\'s a ${breed}`);

/* 
Spread Operator allows iterable to spread/expand inside the receiver
i.e. copy all items in one or more arrays/objects to another array/object

**Useful for making copies, without reference to the original 
and overwriting object properties 
*/

// useful for for passing an array items as separate arguments to a function
const displayNames = (name1, name2, name3) => {
  return `${name1}, ${name2}, ${name3}`;
};

console.log(displayNames(...['Moe', 'Larry', 'Curly']));

// useful for combining arrays
const numbers = [1, 2, 3];
const colors = ['red', 'blue', 'green'];
const colorNumbers = [...colors, ...numbers];
const favColor = 'purple';

const allColors = [...colors, favColor];
console.log(allColors);

console.log(colorNumbers);

const numberColors = [4, 5, 6, ...colors];

console.log(numberColors);

// can also be used similar to .split on a string
const team = 'Yankees';
const teamLetters = [...team];
console.log([...teamLetters]);

// Promise object
// pending, fulfilled, rejected
function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    // function that takes some time to execute
    setTimeout(resolve, ms);
  });
}

promiseTimeout(2000)
  .then(() => {
    console.log('Done!!');
    return promiseTimeout(1000);
  })
  .then(() => {
    console.log('Also done!!');
    return Promise.resolve(42); // helper
  })
  .then((result) => {
    console.log(result); // 42
  })
  .catch(() => {
    console.log('Error!');
  });

// async / await
async function longRunningOperation() {
  // logic
  return 42;
}

async function run() {
  // logic
  console.log('Start!!');
  await promiseTimeout(2000); // takes some time to execute / waits 2 secs

  const response = await longRunningOperation(); // waits for promiseTimeOut to complete b/f running
  console.log(response);

  console.log('Stop!!');
}

run();

///
const x = { testKeyId: 'test' };

console.log([x]);

const peopleObj = {
  jim: {
    name: 'jim',
    age: 20,
  },
  tim: {
    name: 'tim',
    age: 22,
  },
};
const peopleArray = Object.values(peopleObj);
console.log(peopleArray);

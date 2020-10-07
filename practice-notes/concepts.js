// Destructuring

//useful for extracting properties from objects
const dog = {
  name: 'Deuce',
  breed: 'Rottweiler',
  sex: 'male',
};

const { name, breed } = dog;

console.log(`The dog\'s name is ${name} and he\'s a ${breed}`);

// Spread Operator

// useful for for passing an array items as separate arguments to a function
const displayNames = (name1, name2, name3) => {
  console.log(`${name1}, ${name2}, ${name3}`);
};

displayNames(...['Moe', 'Larry', 'Curly']);

// useful for combining arrays
const numbers = [1, 2, 3];
const colors = ['red', 'blue', 'green'];
const colorNumbers = [...colors, ...numbers];

console.log(colorNumbers);

const numberColors = [4, 5, 6, ...colors];

console.log(numberColors);

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

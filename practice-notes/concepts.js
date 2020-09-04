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

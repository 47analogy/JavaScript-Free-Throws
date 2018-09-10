/*
  Objects are used all over in JavaScript.
  These following problems will help you get a better feel for object literals
  We want you familiar with the following Object methods:
  .keys(), .values(), .entries(), .
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
*/

/* 
  Problem 1: Giver Info
  return an array of an Objects properties/keys
*/

const student = {
  name: 'Jonas',
  age: '12',
  gender: 'M',
  role: 'Receiver'
};
const studentKeys = Object.keys(student); // finish this.
console.log(studentKeys);

/* 
  Problem 2: Giver Info
  using the same object as above.
  return an array of an Objects values
*/

const studentValues = Object.values(student); // finish this.
console.log(studentValues);

/* 
  Problem 3: Giver Info
  Add a list of characters to Jonas' object
  The list should be called 'characters' and it should be an array.
  example:
  { name: 'Jonas', age: '12', gender: 'M', role: 'Receiver', characters: ['Lily', 'Mother', 'Father', 'Caleb', 'Asher']}
  next: select that list and iterate over it using `.forEach` simply log the name of each char in the list;
*/


student.characters = ['Lily', 'Mother', 'Father', 'Caleb', 'Asher'];
const listOfChars = student.characters; // finish this.

console.log(listOfChars)

listOfChars.forEach(character => {
  console.log(character);
})



console.log(student)


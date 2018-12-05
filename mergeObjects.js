// Write a function that given an array of objects will return a single 'merged' object,
// where duplicate keys have the last value given.
// For example:

// [
// {1: '1', 2: '2', 3: '3'}
// {3: '4', 4: '4', 5: '6'} 3 and dupe keys
// {5: '5', 6: '6', 7: '7'} 5 is a dupe key
// ];
// Should return:

// {1: '1', 2: '2': 3: '4', 4: '4', 5: '5', 6: '6', 7: '7'}
// where the value of 5 is '5' because '5' it was the last given value for that key.

// merge the objects into single object

// remove first instance of duplicate key from single object
// https://medium.freecodecamp.org/reduce-f47a7da511a9

function mergeObjects(arr) {
  let mergeArrObj = {};
  // goes thru each property in arrObj
  // combines and returns merged object
  // (Object.assign copies over any properties already present)
  mergeArrObj = arr.reduce(function(prev, curr) {
    return Object.assign(prev, curr);
  }, {});
  return mergeArrObj;
}

const arrObj = [
  { 1: "1", 2: "2", 3: "3" },
  { 3: "4", 4: "4", 5: "6" },
  { 5: "5", 6: "6", 7: "7" }
];

console.log(mergeObjects(arrObj));

//# 2
function mergeObjects(objs) {
  let newObj = objs[0];
  for (let i = 1; i < objs.length; i++) {
    for (var key in objs[i]) {
      if (!newObj[key] || newObj[key] !== objs[i][key]) {
        newObj[key] = objs[i][key];
      }
    }
  }
  return newObj;
}

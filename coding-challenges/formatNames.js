/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by 
commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/

function list(names) {
  // traverse the array
  // get the name property
  // add name to str
  // add & before last name

  let namesStr = "";
  const last2Names = names.length - 1; // add after this item

  // edge cases
  if (names.length === 0) return "";
  if (names.length === 1) return names[0].name;

  for (let i = 0; i < names.length; i++) {
    // insert & after next to last name
    if (i === last2Names) {
      namesStr = namesStr.substr(0, namesStr.length - 2); // remove last comma
      namesStr += ` & ${names[i].name}`;
    } else {
      namesStr += `${names[i].name}, `;
    }
  }

  return namesStr;
}

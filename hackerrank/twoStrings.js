/*
Given two strings, determine if they share a common substring.
A substring may be as small as one character.

For example, the words "a", "and", "art" share the common substring.
The words "be" and "cat" do not share a substring.
*/

// JUST NEED TO SEE IF 1 LETTER IS IN BOTH!
function twoStrings(s1, s2) {
  let s1Obj = {};
  let s2Obj = {};

  for (let i = 0; i < s1.length; i++) {
    let char = s1[i];

    s1Obj[char] = char;
  }

  for (let i = 0; i < s2.length; i++) {
    let char = s2[i];

    s2Obj[char] = char;
  }

  for (let value in s1Obj) {
    if (s1Obj[value] === s2Obj[value]) {
      return "YES";
    }
  }
  return "NO";
}

// Better Solution...Wow, can't believe I wrote that #%&!*$ above
function twoStrings(s1, s2) {
  const letters = {};

  for (let char1 of s1) {
    letters[char1] = true;
  }

  for (let char2 of s2) {
    if (letters[char2]) {
      return "YES";
    }
  }
  return "NO";
}

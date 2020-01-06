/*
What is an anagram? Well, two words are anagrams of each other if they both contain the
same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list. You will be given
two inputs a word and an array with words. You should return an array of all the anagrams 
or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

// solush 1
function anagrams(word, words) {
  const anagrams = [];
  const wordObj = createLetterFreq(word);

  // loop words and compare to letters
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let wordTest = createLetterFreq(word);
    // if anagram add to anagrams array
    if (compareFreq(wordObj, wordTest)) {
      anagrams.push(word);
    }
  }

  function createLetterFreq(word) {
    const letters = {};
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      if (!letters[letter]) {
        letters[letter] = 0;
      }
      letters[letter]++;
    }
    return letters;
  }

  function compareFreq(obj1, obj2) {
    const obj1PropNames = Object.getOwnPropertyNames(obj1);
    const obj2PropNames = Object.getOwnPropertyNames(obj2);

    if (obj1PropNames.length !== obj2PropNames.length) return false;

    for (let i = 0; i < obj1PropNames.length; i++) {
      let propName = obj1PropNames[i];
      if (obj1[propName] !== obj2[propName]) {
        return false;
      }
    }
    return true;
  }

  return anagrams;
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); // ['aabb', 'bbaa']
console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])); // ['carer', 'racer']
console.log(anagrams("laser", ["lazing", "lazy", "lacer"])); // [];

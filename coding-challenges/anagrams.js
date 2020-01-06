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
  const originalWord = createLetterFreq(word);

  // line 30: don't confuse with the "word" parameter
  words.map(word => {
    let wordToTest = createLetterFreq(word);
    // if anagram add to anagrams array
    if (compareObjectFreq(originalWord, wordToTest)) {
      anagrams.push(word);
    }
  });

  function createLetterFreq(term) {
    const letters = {};
    term.split("").map(letter => {
      if (!letters[letter]) {
        letters[letter] = 0;
      }
      letters[letter]++;
    });
    return letters;
  }

  function compareObjectFreq(obj1, obj2) {
    const obj1PropNames = Object.getOwnPropertyNames(obj1);
    const obj2PropNames = Object.getOwnPropertyNames(obj2);

    if (obj1PropNames.length !== obj2PropNames.length) return false;

    for (let propName of obj1PropNames) {
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

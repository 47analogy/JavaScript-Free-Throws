/*Harold is a kidnapper who wrote a ransom note, but now he is worried it
will be traced back to him through his handwriting. He found a magazine
and wants to know if he can cut out whole words from it and use them to
create an untraceable replica of his ransom note. The words in his note
are case-sensitive and he must use only whole words available in the magazine.
He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, return Yes
if he can replicate his ransom note exactly using whole words from the magazine;
otherwise, return No.

For example, the note is "Attack at dawn". The magazine contains only "attack at dawn".
The magazine has all the right words, but there's a case mismatch. The answer is No.
*/

// all note words have to be exact matches in magazine, including frequency
function checkMagazine(magazine, note) {
  // create dictionary of magazines words
  const magazineWords = {};

  magazine.forEach((word) => {
    if (!magazineWords[word]) {
      magazineWords[word] = 0;
    }
    magazineWords[word]++;
  });

  // compare word and frequency of words in note array to magazineWord object
  for (let i = 0; i < note.length; i++) {
    let word = note[i];

    // if note word is in magazine dictionary && has a value greater than 0
    if (magazineWords.hasOwnProperty(word)) {
      // decrease value by 1
      magazineWords[word]--;
    }
    // return if word is not available in magazineWords
    if (!magazineWords.hasOwnProperty(word) || magazineWords[word] < 0) {
      return 'No';
    }

    // return if all words are available in magazineWords
    if (note.length === i + 1) {
      return 'Yes';
    }
  }
}

console.log(
  checkMagazine(
    ['two', 'times', 'three', 'is', 'not', 'four'],
    ['two', 'times', 'two', 'is', 'four']
  )
); // No

console.log(
  checkMagazine(
    ['give', 'me', 'one', 'grand', 'today', 'night'],
    ['give', 'one', 'grand', 'today']
  )
); // Yes

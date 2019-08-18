/*
Harold is a kidnapper who wrote a ransom note, but now he is worried
it will be traced back to him through his handwriting. He found a
magazine and wants to know if he can cut out whole words from it and
use them to create an untraceable replica of his ransom note.
The words in his note are case-sensitive and he must use only whole
words available in the magazine. He cannot use substrings or
concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note,
print Yes if he can replicate his ransom note exactly using
whole words from the magazine; otherwise, print No.

For example, the note is "Attack at dawn". The magazine contains
only "attack at dawn". The magazine has all the right words, but
there's a case mismatch. The answer is No.

inputs are arrays of strings
*/

function checkMagazine (magazine, note) {
  const magazineObj = {}
  const noteObj = {}

  if (magazine.length === 0 || note.length === 0) {
    console.log('No')
    return
  }

  for (let i = 0; i < magazine.length; i++) {
    if (!magazineObj[magazine[i]]) {
      magazineObj[magazine[i]] = 0
    }
    magazineObj[magazine[i]]++
  }

  for (let i = 0; i < note.length; i++) {
    if (!noteObj[note[i]]) {
      noteObj[note[i]] = 0
    }
    noteObj[note[i]]++
  }

  for (let key in noteObj) {
    if (noteObj[key] > magazineObj[key]) {
      console.log('No')
      return
    }
  }
  console.log('Yes')
}

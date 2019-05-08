/*
build the data for a word cloud, an infographic where the size of a
word corresponds to how often it appears in the body of text
*/

const testStr =
  'After beating the eggs, Dana read the next step. Add milk and eggs, then add flour and sugar.'

const wordCloud = str => {
  let wordArr = []
  const wordData = {}

  // make all words to lowercase, remove punctuation and convert to array
  /*
    \b - match at start and end of word
    [\w'] - matches letters digits
  */
  wordArr = str.toLowerCase().match(/\b[\w']+\b/g)

  // loop array and store word and frequency into an object
  for (let i = 0; i < wordArr.length; i++) {
    if (wordData[wordArr[i]] === undefined) {
      wordData[wordArr[i]] = 0
    }
    wordData[wordArr[i]]++
  }
}

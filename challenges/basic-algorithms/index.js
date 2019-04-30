// basic-algorithms
// https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms

// Given a string of text,
// write an algorithm that returns the text
// received in a reversed format
const reverseString = str => {
  return str
    .split('')
    .reverse()
    .join('')
}

// Given a string of text containing 0 or more vowels,
// count the number of vowels that can be found within the text
const countVowels = str => {
  const vowels = /[aeiou]/gi
  let count = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(vowels)) {
      count += 1
    }
  }
  return count
}

// Given a string of text, find and return
// the most recurring character
const maxRecurringChar = str => {
  const obj = {}
  let count = 0
  let max = '' // output

  str = str.toLowerCase()

  for (let char of str) {
    if (obj.hasOwnProperty(char)) {
      obj[char]++
    } else {
      obj[char] = 1
    }
  }

  for (let char in obj) {
    if (obj[char] > count) {
      count = obj[char]
      max = char
    }
  }
  // console.log(max)
  return max
}

// Given a sentence containing two or more words,
// return the equivalent of the sentence when
// capitalized.

const capSentence = str => {
  // turn string to array
  // loop through string
  // capitalize first letter of each array
  // join the array
  let strArr = str
    .split(' ')
    .map(word => {
      return word[0].toUpperCase() + word.slice(1)
    })
    .join(' ')

  // return array
  return strArr
}

module.exports = { reverseString, countVowels, maxRecurringChar, capSentence }

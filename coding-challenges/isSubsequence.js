// check if letters in 1st string form a subsequence in the 2nd string
// (i.e. same letters appear without changing their order)

function isSubsequence (subStr, bigStr) {
  let pointer1 = 0
  let pointer2 = 0

  if (!subStr) return true

  // loop thru bigh string
  while (pointer2 < bigStr.length) {
    // if letters are equal, look at sub string letter
    if (bigStr[pointer2] === subStr[pointer1]) {
      pointer1++
    }
    // always look at big string next letter
    pointer2++
    // if traversed to end of sub string, return true
    if (pointer1 === subStr.length) {
      return true
    }
  }
  return false
}

console.log(isSubsequence('sing', 'string'))
console.log(isSubsequence('abc', 'acb'))

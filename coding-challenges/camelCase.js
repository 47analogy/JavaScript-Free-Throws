/* Complete the camelcase function. It must return the integer 
number of words in the input string.
input is a string (i.e. - "saveChangesInTheEditor")
output is the number of words (i.e - 5)
*/

function camelcase(s) {
	let count = 1; // start at 1 to always include 1st word

	for (let i = 0; i < s.length; i++) {
		if (s[i] === s[i].toUpperCase()) {
			count++;
		}
	}
	return count;
}

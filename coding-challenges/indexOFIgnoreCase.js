/*
Write a function indexOfIgnoreCase 
taking two strings and determining the 
first occurrence of the second string in the 
first string. The function should be case insensitive. 
indexOfIgnoreCase("bit","it") and indexOfIgnoreCase("bit","IT") 
should return 1.
*/

// place strings to same case
// look at first char in 2nd str
// loop thru 1st str and compare it to every char
// if match return index, if not look at 2nd char in 2nd str
// repeat (loop)

/* NOTE syntax of indexOf
xx => string being searched
yy => term being searched for

xx.indexOf('yy')
*/

function indexOfIgnoreCase(str1, str2) {
	const firstStr = str1.toLowerCase();
	const secondStr = str2.toLowerCase();

	return firstStr.indexOf(secondStr);
}

console.log(indexOfIgnoreCase('bit', 'it')); // 1
console.log(indexOfIgnoreCase('bit', 'IT')); // 1
console.log(indexOfIgnoreCase('bit', 'T')); // 2
console.log(indexOfIgnoreCase('bit', 'js')); // -1

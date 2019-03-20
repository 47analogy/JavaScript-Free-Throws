/*
Given an array, , of  integers, print each element in reverse order as
a single line of space-separated integers.
*/

function reverseArray(a) {
	const rev = a.reverse(); // can also use map or loop to reverse order
	console.log(...rev); // use spread to log on same line
}

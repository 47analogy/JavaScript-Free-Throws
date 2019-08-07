/* create a function that accepts a variable number of arguments and checks whether there
any duplicates among the arguments passed in

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a, 'b', 'c', 'a') // true
*/

// use rest parameter for variable arguments
const areThereDuplicates = (...args) => {
	const dupes = {};

	for (let i = 0; i < args.length; i++) {
		if (!dupes[args[i]]) {
			dupes[args[i]] = 0;
		}
		dupes[args[i]]++;
	}

	for (key in dupes) {
		if (dupes[key] >= 2) {
			return true;
		}
	}
	return false;
};

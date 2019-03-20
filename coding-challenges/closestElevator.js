/*
Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2),
write a function elevator accepting 3 arguments (in order):

left - The current floor of the left elevator
right - The current floor of the right elevator
call - The called floor, i.e. the floor you want to reach
It should return the name of the elevator closest to the called floor ("left"/"right").

In the case where both elevators are equally distant from the called floor,
choose the elevator to the right.

You can assume that the inputs will always be valid integers between 0-2.
*/

function elevator(left, right, call) {
	// create array with 3 elements
	const arr = [left, right, call];

	// use basic math to compare left and right to call and return
	// side based on difference
	if (Math.abs(arr[2] - arr[1]) < Math.abs(arr[2] - arr[0])) {
		return 'right';
	} else if (Math.abs(arr[2] - arr[1]) > Math.abs(arr[2] - arr[0])) {
		return 'left';
	} else {
		return 'right';
	}
}

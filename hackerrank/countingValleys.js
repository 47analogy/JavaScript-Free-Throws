/*
Gary is an avid hiker. He tracks his hikes meticulously, paying close attention
to small details like topography. During his last hike he took exactly  steps.
For every step he took, he noted if it was an uphill, , or a downhill,  step.
Gary's hikes start and end at sea level and each step up or down represents a
unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a
step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a
step down from sea level and ending with a step up to sea level.
Given Gary's sequence of up and down steps during his last hike, find and
print the number of valleys he walked through.

For example, if Gary's path is s = [DDUUUUDD], he first enters a valley  units deep.
Then he climbs out an up onto a mountain  units high. Finally,
he returns to sea level and ends his hike.

Input Format

The first line contains an integer n, the number of steps in Gary's hike.
The second line contains a single string s, of  characters that describe his path.
Ex:
8
UDDDUDUU

Output Format

Print a single integer that denotes the number of valleys Gary walked
through during his hike.
Ex:
1
*/

function countingValleys(n, s) {
	const stepArr = [];
	let start = 0; // always starting at sea level
	let valleyCount = 0;

	// translate steps into numbers and place into an array
	for (let i = 0; i <= n; i++) {
		if (s[i] === 'D') {
			start -= 1;
		}
		if (s[i] === 'U') {
			start += 1;
		}
		stepArr.push(start);
	}

	// traverse the array
	// if a previous step is at -1 and next step is at 0
	// increase count for number of valleys
	for (let j = 0; j < stepArr.length; j++)
		if (stepArr[j] === -1 && stepArr[j + 1] === 0) {
			valleyCount += 1;
		}
	return valleyCount;
}

/*
You have to divide all your crew members into 2 teams with
the next rules: those who are elder than 40 y.o. 
or younger than 20, should be on the first ship and all 
the others - on the second. It will helps the young
sailors gain the experience of the elder collegues. 
The input data will be the dictionary where keys will 
be the surnames of the sailors and the values will be 
their ages. After the crew formating, you should sort all
of the sailors in the alphabetical order in the each list 
of surnames.
*/

function twoTeams(sailors) {
    const firstShip = [];
    const secondShip = [];

    // loop obj and sort names based on age
    for (let key in sailors) {
        if (sailors[key] > 40 || sailors[key] < 20) {
            // push into first array
            firstShip.push(key)
            } else {
            // push into second array
            secondShip.push(key)
            }
    }

    // sort the arrays
    firstShip.sort();
    secondShip.sort();
    
    return [firstShip, secondShip]
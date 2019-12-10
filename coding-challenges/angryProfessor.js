/*
A Discrete Mathematics professor has a class of students.Frustrated with their 
lack of discipline, he decides to cancel class if fewer than some number of 
students are present when class starts. Arrival times go from on time: (arrivalTime <= 0) 
to arrived late: (arrivalTime > 0).

Given the arrival time of each student and a threshhold number of attendees, determine if the class is canceled.

Note: If a student arrives exactly on time (a = 0), the student is considered to have entered before the class started.
      
ex1:
k = 3 
a = [-1, -3, 4, 2]

YES (canceled)

ex2:
k = 2
a = [0, -1, 2, 1]

NO (not canceled)

*/

// students who arrive a <=0 are early/on-time
function angryProfessor(k, a) {
  let onTimeStudents = 0;

  a.forEach(arriveTime => {
    if (arriveTime <= 0) {
      onTimeStudents++;
    }
  });

  return onTimeStudents >= k ? "NO" : "YES";
}

let totalCredits = prompt("Enter total credits:");
let totalPoints = prompt("Enter total points:");

let gpa = (totalPoints / totalCredits).toFixed(2);

alert(`Your GPA is: ${gpa}`);

//we use create interface method that takes two arguments: readind stdin and stdout
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//The calculate Grades function calculates the student score
//The NaN function validates if the input is a number between the range given in the code
//after validation we now proceed to grading the input marks in accordance to the conditional statements provided
function calculateGrades() {
  rl.question("Enter student marks (0-100): ", function (enterMarks) {
    const marks = parseFloat(enterMarks);

    if (isNaN(marks) || marks < 0 || marks > 100) {
      console.log("Invalid input. Please enter marks ranging from 0 to 100.");
    } else {
      let grade;

      if (marks >= 80) {
        grade = 'A';
        
      } else if (marks >= 60) {
        grade = 'B';
      } else if (marks >= 50) {
        grade = 'C';
      } else if (marks >= 40) {
        grade = 'D';
      } else {
        grade = 'E';
      }

      console.log(`Grade: ${grade}`);
    }

    // Close the readline interface
    rl.close();
  });
}
//here we call the calculate grades function
calculateGrades();

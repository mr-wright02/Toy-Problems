    //we use create interface method that takes two arguments: readline stdin and stdout
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
    //here our readline interface prompts we enter the car speed
rl.question("Enter the car's speed (in km/h): ", function (carSpeed) {
  carSpeed = parseFloat(carSpeed);
    //the NaN function validates if our input is a number
  if (isNaN(carSpeed)) {
    console.log("Invalid input. Please enter a valid speed.");
    rl.close();
    return;
  }
    // this function calculates the speed input through stdin
  function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    //here we introduce our conditional statement
    if (speed <= speedLimit) {
      console.log("Ok");
    } 
    //if the demerit points are less than 12 just print the demerit points
    //if the speed demerit points are greater than 12; print license suspended
    else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

      if (demeritPoints <= 12) {
        console.log(`Points: ${demeritPoints}`);
      } else {
        console.log("License suspended");
      }
    }
    // we then close our event and let the take on calling the set parameters of car speed
    rl.close();
  }
//lets call the claculatedemerit points function
  calculateDemeritPoints(carSpeed);
});

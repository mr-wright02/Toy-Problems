const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Declare variables to store basicSalary and benefits
let basicSalary;
let benefits;

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
  // Define tax rate and deductions
  const taxRate = 0.1;
  const nhifDeduction = 500;
  const nssfDeductionRate = 0.06;

  // Calculate gross salary
  const grossSalary = basicSalary + benefits;

  // Calculate tax (PAYE)
  const tax = grossSalary * taxRate;

  // Calculate NHIF deductions
  const nhif = nhifDeduction;

  // Calculate NSSF deductions
  const nssf = grossSalary * nssfDeductionRate;

  // Calculate net salary
  const netSalary = grossSalary - tax - nhif - nssf;

  return netSalary;
}

// Prompt the user for basic salary and benefits
rl.question("Enter basic salary: ", function (userBasicSalary) {
  basicSalary = parseFloat(userBasicSalary);

  rl.question("Enter benefits: ", function (userBenefits) {
    benefits = parseFloat(userBenefits);

    if (isNaN(basicSalary) || isNaN(benefits)) {
      console.log("Invalid input. Please enter valid numbers.");
    } else {
      // Calculate net salary
      const netSalary = calculateNetSalary(basicSalary, benefits);
      console.log(`Net Salary: ${netSalary}`);
    }

    // Close the readline interface
    rl.close();
  });
});

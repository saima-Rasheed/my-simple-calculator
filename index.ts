#! /usr/bin/env node

import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operatorction to perform action",
    type: "list",
    name: "operators",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

//conditional statement
if (asnwer.operators === "addition") {
  console.log(asnwer.firstNumber + asnwer.secondNumber);
} else if (asnwer.operators === "subtraction") {
  console.log(asnwer.firstNumber - asnwer.secondNumber);
} else if (asnwer.operators === "multiplication") {
  console.log(asnwer.firstNumber * asnwer.secondNumber);
} else if (asnwer.operators === "division") {
  console.log(asnwer.firstNumber / asnwer.secondNumber);
} else {
  console.log("please select a valid operator");
}

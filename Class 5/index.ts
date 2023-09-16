import inquirer from "inquirer";
import chalk from "chalk";

const answers = await inquirer.prompt([
  {
    name: "operation",
    type: "checkbox",
    message: "Enter the operation you want to perform: ",
    choices: ["+", "-", "x", "/"],
  },
  {
    name: "firstNum",
    type: "number",
    message: "Enter the first number:",
  },
  {
    name: "secondNum",
    type: "number",
    message: "Enter the second number:",
  },
]);

if (answers.operation[0] === "+") {
  const answer = answers.firstNum + answers.secondNum;
  console.log(chalk.cyan("The sum is: ") + chalk.bgBlue(answer));
} else if (answers.operation[0] === "-") {
  const answer = answers.firstNum - answers.secondNum;
  console.log(chalk.cyan(`The difference is: ` + chalk.bgBlue(answer)));
} else if (answers.operation[0] === "x") {
  const answer = answers.firstNum * answers.secondNum;
  console.log(chalk.cyan(`The product is: ` + chalk.bgBlue(answer)));
} else if (answers.operation[0] === "/") {
  const answer = answers.firstNum / answers.secondNum;
  console.log(chalk.cyan(`The divide is: ` + chalk.bgBlue(answer)));
} else {
  console.log(chalk.red("Invalid Operator"));
}

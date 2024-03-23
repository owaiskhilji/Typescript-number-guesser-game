#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let rondomnum = Math.floor(Math.random() * 4 + 1);
let user = await inquirer.prompt([
    {
        name: "Enterthenumber",
        type: "number",
        message: "put the number  1 to 4 :"
    }
]);
if (user.Enterthenumber === rondomnum) {
    console.log(chalk.bgGreen("congratulation you win"));
}
else {
    console.log(chalk.bgRed(`Try again: correct anwer is ${rondomnum}`));
}

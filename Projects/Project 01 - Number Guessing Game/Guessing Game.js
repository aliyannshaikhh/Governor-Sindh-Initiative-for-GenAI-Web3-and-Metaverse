import inquirer from "inquirer";
let random_number = Math.floor(Math.random() * 10);
let input = await inquirer.prompt([
    {
        name: "user_input",
        type: "number",
        message: "What's Your Guess? "
    }
]);
let user_guess = input.user_input;
if (user_guess === random_number) {
    console.log("Congratulations! I too chose " + random_number + " ,and you guessed right.");
}
else {
    console.log("Whoops! Try Again." + " I guessed number " + random_number + ".");
}

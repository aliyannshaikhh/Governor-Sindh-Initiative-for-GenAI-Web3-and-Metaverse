import inquirer from "inquirer";
let input = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
let sentence = input.sentence.trim();
let noOfWords = sentence.split(" ");
let noOfCharacters = sentence.length;
console.log(`Your sentence word count is ${noOfWords.length}`);
console.log(`Your sentence character count is ${noOfCharacters}`);

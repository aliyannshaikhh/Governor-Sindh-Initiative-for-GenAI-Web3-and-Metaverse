import inquirer from "inquirer";
let currencies = {
    USD: 1, //Base Currency
    PKR: 278.12,
    INR: 83.08,
    OMR: 0.38,
    EUR: 0.92,
    JPY: 157.32,
    GBP: 0.79,
    SGD: 1.35,
    CNY: 7.24,
    PLN: 3.94
};
let user_input = await inquirer.prompt([
    {
        name: "from",
        message: "From:",
        type: "list",
        choices: ["USD", "PKR", "INR", "OMR", "EUR", "JPY", "GBP", "SGD", "CNY", "PLN"]
    },
    {
        name: "to",
        message: "To:",
        type: "list",
        choices: ["USD", "PKR", "INR", "OMR", "EUR", "JPY", "GBP", "SGD", "CNY", "PLN"]
    },
    {
        name: "amount",
        message: "Enter a Value: ",
        type: "number"
    }
]);
let fromValue = user_input.from;
let toValue = user_input.to;
let value = user_input.amount;
let finalValue = (value / currencies[fromValue] * currencies[toValue]);
console.log("The converted value is " + finalValue + ".");

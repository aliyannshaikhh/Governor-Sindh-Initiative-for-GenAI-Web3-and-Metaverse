import inquirer from "inquirer";
let inputs = await inquirer.prompt([
    {
        name: "input1",
        type: "number",
        message: "Enter First Number: "
    },
    {
        name: "input2",
        type: "number",
        message: "Enter Second Number: "
    },
    {
        name: "operations",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        message: "Select One of Operations: "
    }
]);
let user_input_1 = inputs.input1;
let user_input_2 = inputs.input2;
let user_operation = inputs.operations;
if (user_operation === "Addition") {
    console.log("The Sum is: " + (user_input_1 + user_input_2));
}
else if (user_operation === "Subtraction") {
    console.log("The Sub is: " + (user_input_1 - user_input_2));
}
else if (user_operation === "Multiplication") {
    console.log("The Multiplication is: " + (user_input_1 * user_input_2));
}
else if (user_operation === "Division") {
    console.log("The Division is: " + (user_input_1 / user_input_2));
}
else {
    console.log("Select Valid Operation from Given Choices.");
}

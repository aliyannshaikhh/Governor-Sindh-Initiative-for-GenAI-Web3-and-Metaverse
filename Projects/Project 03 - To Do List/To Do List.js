"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var todos = [];
var condition = true;
while (condition) {
    var addTask = await inquirer_1.default.prompt([
        {
            name: "todo",
            type: "input",
            message: "What Task You Want to Add?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more tasks?",
            default: "false",
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}

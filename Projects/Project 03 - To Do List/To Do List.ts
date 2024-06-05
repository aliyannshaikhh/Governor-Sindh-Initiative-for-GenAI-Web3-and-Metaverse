import inquirer from "inquirer";

let todos:string[] = [];
let condition = true;

while(condition){

    let addTask = await inquirer.prompt([
    {
        name:"todo",
        type:"input",
        message:"What Task You Want to Add?"
    },
    {
        name:"addMore",
        type:"confirm",
        message:"Do you want to add more tasks?",
        default:"false",
    }
]);

todos.push(addTask.todo);
condition = addTask.addMore;
console.log(todos);
}
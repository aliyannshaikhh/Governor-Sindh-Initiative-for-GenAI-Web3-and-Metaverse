import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 7865;
let pinAns = await inquirer.prompt([
    {
        name:"pin",
        message:"Enter Your PIN:",
        type:"number",
    }
]);

if(pinAns.pin === myPin){
    let operationAns = await inquirer.prompt([
        {
            name:"operation",
            message:"Please Select One of the Options!",
            type:"list",
            choices:["Withdraw", "Check Balance"],
        }
    ]);
    if(operationAns.operation === "Withdraw"){
        let amountAns = await inquirer.prompt([
            {
                name:"amount",
                message:"Enter Your Amount:",
                type:"number",
            }
        ]);
        if(amountAns.amount > myBalance){
            console.log("Insufficient Balance!");
        }
        else{
        myBalance -= amountAns.amount;
        console.log("Remainig Balance is: " + myBalance);
    }
    }
    else if(operationAns.operation === "Check Balance"){
        console.log(`Your Balance is ${myBalance}`);
    }
}
else if(pinAns.pin != myPin){
    console.log("Incorrect Pin!");
}
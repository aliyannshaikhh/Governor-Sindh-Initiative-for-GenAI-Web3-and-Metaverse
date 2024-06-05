import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const start = await inquirer.prompt({
    name: "user",
    type: "number",
    message: "Please enter the amount in seconds:",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter valid a number:";
        }
        else if (input > 60) {
            return "Please enter less than 60 seconds:";
        }
        else {
            return true;
        }
    }
});
let ans = start.user;
function time(val) {
    let inTime = new Date().setSeconds(new Date().getSeconds() + val);
    const interTime = new Date(inTime);
    setInterval(() => {
        const currTime = new Date();
        let timeDiff = differenceInSeconds(interTime, currTime);
        if (timeDiff <= 0) {
            console.log("Time is up!");
            process.exit();
        }
        const mint = Math.floor((timeDiff % (3600 * 24)) / 3600);
        let sec = Math.floor(timeDiff % 60);
        console.log(`${mint.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }, 1000);
    console.log("");
}
time(ans);

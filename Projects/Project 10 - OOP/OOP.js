import inquirer from "inquirer";
class Student {
    name;
    constructor(names) {
        this.name = names;
    }
}
class Person {
    students = [];
    addName(ans) {
        this.students.push(ans);
    }
}
let person = new Person();
const optionStart = async (person) => {
    do {
        let add = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "\nWhom would you like to interact with:\n",
            choices: [
                "Staff",
                "Student",
                "Exit",
            ]
        });
        if (add.select === "Staff") {
            console.log("\nYou approach the staff room. Please feel free to ask any question.\n");
        }
        else if (add.select === "Student") {
            const ans = await inquirer.prompt({
                name: "school",
                type: "input",
                message: "\nEnter the student name you wish to engage with:\n",
            });
            let student = person.students.find(val => val.name === ans.school);
            if (!student) {
                const name = new Student(ans.school);
                person.addName(name);
                console.log(`\nHello, I am ${name.name}. Nice to meet you!\n`);
                console.log("\nNew Student added\n");
                console.log("\nCurrent Student List:\n");
                console.log(person.students);
            }
            else {
                console.log(`\nHello, I am ${student.name}. Nice to see you again!\n`);
                console.log("\nExisting Student List\n");
                console.log(person.students);
            }
        }
        else if (add.select === "Exit") {
            console.log("\nExited!\n");
            break;
        }
    } while (true);
};
optionStart(person);

import inquirer from 'inquirer';
class Student {
    name;
    studentID;
    courses;
    balance;
    constructor(name) {
        this.name = name;
        this.studentID = this.generateStudentID();
        this.courses = [];
        this.balance = 10000; // Initializing balance to $10,000
    }
    generateStudentID() {
        // Generate a random 5-digit number
        return Math.floor(10000 + Math.random() * 90000);
    }
    enroll(course) {
        this.courses.push(course);
    }
    viewBalance() {
        console.log(`Balance for ${this.name}: $${this.balance}`);
    }
    payTuition(amount) {
        this.balance -= amount;
        console.log(`Payment of $${amount} received from ${this.name}`);
        this.viewBalance();
    }
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        this.viewBalance();
    }
}
async function main() {
    const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter student name:'
    });
    const student = new Student(name);
    while (true) {
        const { choice } = await inquirer.prompt({
            type: 'list',
            name: 'choice',
            message: 'Choose an option:',
            choices: [
                'Enroll in a course',
                'View balance',
                'Pay tuition fees',
                'Show status',
                'Exit'
            ]
        });
        switch (choice) {
            case 'Enroll in a course':
                const { course } = await inquirer.prompt({
                    type: 'input',
                    name: 'course',
                    message: 'Enter course name to enroll:'
                });
                student.enroll(course);
                break;
            case 'View balance':
                student.viewBalance();
                break;
            case 'Pay tuition fees':
                const { amount } = await inquirer.prompt({
                    type: 'number',
                    name: 'amount',
                    message: 'Enter amount to pay:'
                });
                student.payTuition(amount);
                break;
            case 'Show status':
                student.showStatus();
                break;
            case 'Exit':
                console.log('Exiting...');
                return;
            default:
                console.log('Invalid choice. Please choose again.');
        }
    }
}
main();

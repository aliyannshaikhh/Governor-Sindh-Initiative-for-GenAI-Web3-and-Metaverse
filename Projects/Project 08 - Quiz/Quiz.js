import inquirer from "inquirer";
let quiz = [
    {
        Task: "\n(1). What is the chemical symbol for water?\n",
        choices: [
            "(a) H2O",
            "(b) CO2",
            "(c) NaCl",
        ],
        correct: "(a) H2O"
    },
    {
        Task: "\n(2). What is the boiling point of water in Celsius?\n",
        choices: [
            "(a) 0°C",
            "(b) 100°C",
            "(c) -100°C",
        ],
        correct: "(b) 100°C"
    },
    {
        Task: "\n(3). Which gas do plants use in photosynthesis?\n",
        choices: [
            "(a) Oxygen",
            "(b) Carbon dioxide",
            "(c) Nitrogen",
        ],
        correct: "(b) Carbon dioxide"
    },
    {
        Task: "\n(4). What is the chemical symbol for gold?\n",
        choices: [
            "(a) Au",
            "(b) Ag",
            "(c) Fe",
        ],
        correct: "(a) Au"
    },
    {
        Task: "\n(5). What is the nearest planet to the Sun?\n",
        choices: [
            "(a) Earth",
            "(b) Venus",
            "(c) Mercury",
        ],
        correct: "(c) Mercury"
    }
];
async function startQuiz() {
    let score = 0;
    for (let query of quiz) {
        let { answer } = await inquirer.prompt({
            name: "answer",
            type: "list",
            message: `\n ${query.Task}\n`,
            choices: query.choices
        });
        if (answer === query.correct) {
            score++;
            console.log("\n\tCorrect!\n");
        }
        else {
            console.log(`\n\tIncorrect! The correct answer is: ${query.correct}\n`);
        }
    }
    console.log(`\tYour score is: ${score}/${quiz.length}\n`);
}
startQuiz();

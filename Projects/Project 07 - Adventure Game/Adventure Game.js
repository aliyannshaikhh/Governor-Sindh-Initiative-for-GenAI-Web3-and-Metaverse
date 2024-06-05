import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Please Enter Your Name?"
});
let opponent = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "Please Enter Your Select?",
    choices: [
        "Skeleton",
        "Assassin",
        "Zombie",
    ]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == "Skeleton") {
        let ans = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "Please Enter Your Select?",
            choices: [
                "Attack",
                "Drink Portion",
                "Run For Your Life",
            ],
        });
        if (ans.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose The Game");
                    break;
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    break;
                }
            }
        }
        if (ans.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health portion your fuel is ${p1.fuel}`);
        }
        if (ans.opt == "Run For Your Life") {
            console.log("You Loose Batter Luck Next Time");
            break;
        }
    }
    if (opponent.select == "Assassin") {
        let ans = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "Please Enter Your Select?",
            choices: [
                "Attack",
                "Drink Portion",
                "Run For Your Life",
            ],
        });
        if (ans.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose The Game");
                    break;
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    break;
                }
            }
        }
        if (ans.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health portion your fuel is ${p1.fuel}`);
        }
        if (ans.opt == "Run For Your Life") {
            console.log("You Loose Batter Luck Next Time");
            break;
        }
    }
    if (opponent.select == "Zombie") {
        let ans = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "Please Enter Your Select?",
            choices: [
                "Attack",
                "Drink Portion",
                "Run For Your Life",
            ],
        });
        if (ans.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose The Game");
                    break;
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    break;
                }
            }
        }
        if (ans.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health portion your fuel is ${p1.fuel}`);
        }
        if (ans.opt == "Run For Your Life") {
            console.log("You Loose Batter Luck Next Time");
            break;
        }
    }
} while (true);

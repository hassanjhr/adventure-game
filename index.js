#! /usr/bin/env node 
// This is a project of Adventure Game made by Muhammad Hassan Jawaid
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
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter Your Name",
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select Your Opponent",
        choices: ["Batman", "Superman", "Aquaman", "Wonderwomen", "Catwoman", "Supergirl"]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    // Batman
    if (opponent.select == "Batman") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run for your life"],
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time!");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win!");
                    process.exit();
                }
            }
            if (ask.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(`You Drink Health Portion Your Fuel is ${p1.fuel} `);
            }
            if (ask.opt == "Run for your life") {
                console.log("You Loose, Better Luck Next Time!");
                process.exit();
            }
        }
    }
    // Superman
    if (opponent.select == "Superman") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run for your life"],
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time!");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win!");
                    process.exit();
                }
            }
            if (ask.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(`You Drink Health Portion Your Fuel is ${p1.fuel} `);
            }
            if (ask.opt == "Run for your life") {
                console.log("You Loose, Better Luck Next Time!");
                process.exit();
            }
        }
    }
    //Aquaman
    if (opponent.select == "Aquaman") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run for your life"],
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time!");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win!");
                    process.exit();
                }
            }
            if (ask.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(`You Drink Health Portion Your Fuel is ${p1.fuel} `);
            }
            if (ask.opt == "Run for your life") {
                console.log("You Loose, Better Luck Next Time!");
                process.exit();
            }
        }
    }
    // Wonderwoman
    if (opponent.select == "Wonderwomen") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run for your life"],
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time!");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win!");
                    process.exit();
                }
            }
            if (ask.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(`You Drink Health Portion Your Fuel is ${p1.fuel} `);
            }
            if (ask.opt == "Run for your life") {
                console.log("You Loose, Better Luck Next Time!");
                process.exit();
            }
        }
    }
    // Catwoman
    if (opponent.select == "Catwoman") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run for your life"],
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time!");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win!");
                    process.exit();
                }
            }
            if (ask.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(`You Drink Health Portion Your Fuel is ${p1.fuel} `);
            }
            if (ask.opt == "Run for your life") {
                console.log("You Loose, Better Luck Next Time!");
                process.exit();
            }
        }
    }
    // Supergirl
    if (opponent.select == "Supergirl") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run for your life"],
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time!");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win!");
                    process.exit();
                }
            }
            if (ask.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(`You Drink Health Portion Your Fuel is ${p1.fuel} `);
            }
            if (ask.opt == "Run for your life") {
                console.log("You Loose, Better Luck Next Time!");
                process.exit();
            }
        }
    }
} while (true);

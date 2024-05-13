//Task No. 29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// Make a array of your three favorite fruits and call it favorite_fruits.

// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string[] = ["Dates", "Banana", "Oranges", "Papaya", "Cherry"];

if (favorite_fruits.includes("Banana")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("Apple")) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes("Oranges")) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes("Pineapple")) {
    console.log("You really like pineapples!");
}

if (favorite_fruits.includes("Grapes")) {
    console.log("You really like grapes!");
}
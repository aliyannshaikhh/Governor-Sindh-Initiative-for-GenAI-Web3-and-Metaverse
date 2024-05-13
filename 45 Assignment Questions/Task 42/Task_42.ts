//Task No. 42: Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians: string[] = ["Charlie", "Shawn", "Dan", "Adele", "Taylor", "Katy"];

function show_magicians(names: string[]){
    for (let name of names) {
        console.log(name);
    }
}

function make_great(names: string[]){
    for (let i = 0; i < names.length; i++) {
        names[i] = "the Great " + names[i];
    }
}

make_great(magicians);

show_magicians(magicians);

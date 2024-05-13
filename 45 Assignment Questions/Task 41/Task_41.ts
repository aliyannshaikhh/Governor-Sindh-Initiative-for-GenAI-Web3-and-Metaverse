//Task No. 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Define an array of magician's names

let magicians: string[] = ["Charlie", "Shawn", "Dan", "Adele", "Taylor", "Katy"];

function show_magicians(names: string[]){
    for (let name of names) {
        console.log(name);
    }
}

show_magicians(magicians);
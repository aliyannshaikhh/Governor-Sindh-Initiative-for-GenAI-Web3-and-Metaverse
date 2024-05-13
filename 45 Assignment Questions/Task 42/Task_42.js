//Task No. 42: Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ["Charlie", "Shawn", "Dan", "Adele", "Taylor", "Katy"];
function show_magicians(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
}
function make_great(names) {
    for (var i = 0; i < names.length; i++) {
        names[i] = "the Great " + names[i];
    }
}
make_great(magicians);
show_magicians(magicians);

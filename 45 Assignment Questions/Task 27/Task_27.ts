//Task No. 27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

//If the alien is green, print a message that the player earned 5 points.

//If the alien is yellow, print a message that the player earned 10 points.

//If the alien is red, print a message that the player earned 15 points.

//Write three versions of this program, making sure each message is printed for the appropriate color alien.

//First Version

var alien_color:string = "green";

if(alien_color === "green"){
    console.log("Player just earned 5 points.");
}
else if(alien_color === "yellow"){
    console.log("Player just earned 10 points.");
}
else{
    console.log("Player just earned 20 points");
}

//Second Version

var alien_color:string = "yellow";

if(alien_color === "green"){
    console.log("Player just earned 5 points.");
}
else if(alien_color === "yellow"){
    console.log("Player just earned 10 points.");
}
else{
    console.log("Player just earned 20 points");
}

//Third Version

var alien_color:string = "red";

if(alien_color === "green"){
    console.log("Player just earned 5 points.");
}
else if(alien_color === "yellow"){
    console.log("Player just earned 10 points.");
}
else{
    console.log("Player just earned 20 points");
}
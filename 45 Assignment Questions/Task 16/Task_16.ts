//Task No. 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//Add one new guest to the beginning of your array.

//Add one new guest to the middle of your array.

//Use append() to add one new guest to the end of your list.

//Print a new set of invitation messages, one for each person in your list.

let guest_list:string[] = ["Abdul Ahad", "Rahim Raaz", "Talha Laghari"];

for (let i=0; i<guest_list.length; i++){
    console.log("Hey " + guest_list[i] + ", I'd like to invite you for the dinner tonight.");
}

console.log("\n" + guest_list[2] + " can't make it to the dinner tonight.");

guest_list[2] = "Farman Solangi";

console.log("\n---New Invitations---\n");

for (let j=0; j<guest_list.length; j++){
    console.log("Hey " + guest_list[j] + ", I'd like to invite you for the dinner tonight.");
}

console.log("\nWoah! We found a bigger table for dinner. More guests incoming.");

guest_list.unshift("Usman Ali");
guest_list.splice(2, 0, "Sarjeel Qazi");
guest_list.push("Sheeraz Ali");

console.log("\n---Updated Invitations---\n");

for(let k=0; k<guest_list.length; k++){
    console.log("Howdy " + guest_list[k] + "! I am inviting you to the dinner party tonight.");
}
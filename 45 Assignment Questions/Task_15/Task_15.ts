//Task No. 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//Print a second set of invitation messages, one for each person who is still in your list.

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
//Task No. 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// Print a message to each of the two people still on your list, letting them know they’re still invited.
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guest_list = ["Abdul Ahad", "Rahim Raaz", "Talha Laghari"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Hey " + guest_list[i] + ", I'd like to invite you for the dinner tonight.");
}
console.log("\n" + guest_list[2] + " can't make it to the dinner tonight.");
guest_list[2] = "Farman Solangi";
console.log("\n---New Invitations---\n");
for (var j = 0; j < guest_list.length; j++) {
    console.log("Hey " + guest_list[j] + ", I'd like to invite you for the dinner tonight.");
}
console.log("\nWoah! We found a bigger table for dinner. More guests incoming.");
guest_list.unshift("Usman Ali");
guest_list.splice(2, 0, "Sarjeel Qazi");
guest_list.push("Sheeraz Ali");
console.log("\n---Updated Invitations---\n");
for (var k = 0; k < guest_list.length; k++) {
    console.log("Howdy " + guest_list[k] + "! I am inviting you to the dinner party tonight.");
}
console.log("\n Sadly! I ran out of tables. I can only invite two people for the dinner.\n");
for (var l = guest_list.length; l > 2; l--) {
    var removedElement = guest_list.pop();
    console.log("Sorry ".concat(removedElement, "! You can't come to the party tonight."));
}
console.log("\n---Final Invitations---\n");
for (var m = 0; m < guest_list.length; m++) {
    console.log(guest_list[m] + ", You are still invited.");
}

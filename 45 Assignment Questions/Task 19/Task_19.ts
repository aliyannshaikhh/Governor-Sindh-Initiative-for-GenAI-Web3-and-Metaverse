//Task No. 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guest_list:string[] = ["Abdul Ahad", "Rahim Raaz", "Hamza"];

for (let i=0; i<guest_list.length; i++){
    console.log("Hey " + guest_list[i] + ", I'd like to invite you for the dinner tonight.");
}

console.log("\nThe total number of people who have been invited to the party are: " + guest_list.length);
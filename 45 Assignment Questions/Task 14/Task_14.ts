//Task No. 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest_list:string[] = ["Abdul Ahad", "Rahim Raaz", "Hamza"];

for (let i=0; i<guest_list.length; i++){
    console.log("Hey " + guest_list[i] + ", I'd like to invite you for the dinner tonight.");
}
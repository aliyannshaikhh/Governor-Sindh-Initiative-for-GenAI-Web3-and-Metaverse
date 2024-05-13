//Task No. 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let my_name:string = "Aliyan Shaikh";

console.log("Lower Case: " + my_name.toLowerCase());

console.log("Upper Case: " + my_name.toUpperCase());

console.log("Title Case: " + my_name.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));
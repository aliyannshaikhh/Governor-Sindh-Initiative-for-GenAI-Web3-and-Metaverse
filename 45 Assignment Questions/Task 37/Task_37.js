//Task No. 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript."; }
    return console.log("The size of shirt is " + size + " and the message to be printed is " + message);
}
make_shirt();
make_shirt("Medium");

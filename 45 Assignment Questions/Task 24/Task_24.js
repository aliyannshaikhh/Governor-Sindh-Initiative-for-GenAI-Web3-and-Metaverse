//Task No. 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//Tests for equality and inequality with strings
//Tests using the lower case function
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//Tests using "and" and "or" operators
//Test whether an item is in a array
//Test whether an item is not in a array
var string1 = "hello";
var string2 = "world";
var number1 = 5;
var number2 = 10;
var array = [1, 2, 3, 4, 5];
console.log(string1 === 'hello'); // True
console.log(string1 !== string2); // True
console.log(string1.toLowerCase() === 'hello'); // True
console.log(string1.toLowerCase() === string2.toUpperCase()); // True
console.log(number1 === 5); // True
console.log(number1 !== number2); // True
console.log(number1 > number2); // False
console.log(number2 >= number1); // True
console.log(number1 > 3 && number2 < 15); // True
console.log(number1 < 3 || number2 > 15); // False
console.log(3 in array); // True
console.log(6 in array); // False
console.log(!(6 in array)); // True
console.log(3 in array); // True

//Task No. 38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(name, country) {
    if (name === void 0) { name = "Hyderabad"; }
    if (country === void 0) { country = "Pakistan"; }
    return console.log(name + " is a city in " + country + ".");
}
describe_city("Madrid", "Spain");
describe_city("Mumbai", "India");
describe_city("Masqat", "Oman");

//Task No. 21: Then think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let countries: {[country: string]: {capital: string, languages: string}} = {
    "USA": {capital: "Washington, D.C.", languages: "English"},
    "China": {capital: "Beijing", languages: "Mandarin"},
    "India": {capital: "New Delhi", languages: "Hindi and English"},
    "Brazil": {capital: "Brasília", languages: "Portuguese"},
    "Pakistan": {capital: "Islamabad", languages: "Urdu"}
};

console.log(countries);

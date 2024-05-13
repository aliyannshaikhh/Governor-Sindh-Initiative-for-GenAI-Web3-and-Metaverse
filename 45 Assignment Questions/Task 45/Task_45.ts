//Task No. 45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function car(modelName:string, manufacturerName:string, modelYear:number, color:string){
    let car_info:{modelName:string, manufacturerName:string, modelYear:number, color:string} = {
        modelName:modelName,
        manufacturerName:manufacturerName,
        modelYear:modelYear,
        color:color
    }
    return car_info;
}

let car1 = car("NAM78", "BMW",2018, "Silver");
let car2 = car("UI908", "Toyota",2019, "Black");
let car3 = car("78HUI", "Honda",2018, "Cherry");

console.log(car1);
console.log(car2);
console.log(car3);
// Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var laptops = [
    { make: "Lenovo", model: "thinkpad", year: 2015, price: 500 },
    { make: "Dell", model: "hps15", year: 2021, price: 1000 },
    { make: "HP", model: "Spectre 360", year: 2021, price: 900 },
];
console.log(laptops); //printing entire laptops array.
var laptop1 = laptops[0], laptop2 = laptops[1]; // destructuring the array objects and assigning them to variables to access related items
console.log("Laptop1 :", laptop1);
console.log("Laptop2 :", laptop2);
var laptop3 = laptops[0];
console.log("Laptop3 : ", laptop3);
var allLaptops = __assign(__assign({}, laptop1), { laptop2: laptop2, laptop3: laptop3 });
console.log(allLaptops);

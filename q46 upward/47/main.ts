// Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

let laptops = [
    {make:"Lenovo",model:"thinkpad",year:2015,price:500},
    {make:"Dell",model:"hps15",year:2021,price:1000},
    {make:"HP",model:"Spectre 360",year:2021,price:900},
    
]

console.log(laptops);  //printing entire laptops array.
// destructuring the array objects and assigning them to variables to access related items

let [laptop1,laptop2] = laptops; 

//printing the individual destructured objects
console.log(`Laptop1 :`,laptop1);
console.log(`Laptop2 :`,laptop2);



// working beyond the question 
// destructuring remaining object from array
let[laptop3] = laptops;
console.log(`Laptop3 : `,laptop3);

//combining all obects in a single object allLaptops using spread operator
let allLaptops = {...laptop1,laptop2,laptop3};
console.log(allLaptops)
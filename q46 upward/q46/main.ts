// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

let laptop = {      //        initializing an object named laptop
    make:"Lenovo",
    model: "ThinkPad",
    year:2015,
    describe:function (){ // describing method of function to iterate the info from object within the object
        console.log(`This Laptop ${this.make} is ${this.model} and made in ${this.year}`)
    }
}
laptop.describe();
                        // priniting the info by accessing obect then keys
console.log(`This Laptop ${laptop.make} is ${laptop.model} and made in ${laptop.year}`);

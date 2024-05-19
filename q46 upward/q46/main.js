// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
var laptop = {
    make: "Lenovo",
    model: "ThinkPad",
    year: 2015,
    describe: function () {
        console.log("This Laptop ".concat(this.make, " is ").concat(this.model, " and made in ").concat(this.year));
    }
};
laptop.describe();
// priniting the info by accessing obect then keys
console.log("This Laptop ".concat(laptop.make, " is ").concat(laptop.model, " and made in ").concat(laptop.year));

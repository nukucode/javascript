//! 1. Javascript Tip:

//* you can wrap your console.log() arguments with curly brackets to see the variable names.

const num = 12345678;

console.log(num);
console.log({ num });

//! Javascript Tip

// you can remove duplicate elements from an array

const cars = ["TATA", "TATA", "AUDI", "BMW", "AUDI"];

console.log(...new Set(cars)); // TATA, BMW, AUDI

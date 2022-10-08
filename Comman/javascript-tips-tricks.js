//! 1. Javascript Tip:

//* you can wrap your console.log() arguments with curly brackets to see the variable names.

const num = 12345678;

console.log(num);
console.log({ num });

//! 2. Javascript Tip

// you can remove duplicate elements from an array

const cars = ["TATA", "TATA", "AUDI", "BMW", "AUDI"];

console.log(...new Set(cars)); // TATA, BMW, AUDI

//! 3. Javascript tip to write less js code

//* Arrow Fuction

// Longhand
function myFun() {
  console.log("I Love Js");
}

// shortHand
const myfun = () => {
  console.log("I Love Javascript");
};

//* Condition True

// LongHand
if (value === true) {
}

// shortHand
if (value) {
}

//* Templet Literals

// LongHand
const name = "Rogers";
const age = 18;

console.log("Hello I " + name + "My Age Is" + age);

// shortHand

console.log(`Hello I ${name} My Age Is ${age}`);

//* Power Of Any Number

// LongHand
console.log(Math.pow(2, 5));

// ShortHand
console.log(2 ** 5);

//* Assignment Operator

// LongHand
const x = 7;
const y = 5;

x = x + y;
y = x - y;

// ShortHand

x += y;
y -= x;

//* Declaring variables

// LongHand
const a = "a";
const b = "a";
const c = "a";

//ShortHand

const a,b,c = 'a';



//* Ternary Operator
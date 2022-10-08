//* The Mordern Javascript

// -> Template Literals

let first = "Ankit";
let last = "Yadav";

let FullName1 = first + " " + last; //! ES5
let FullName2 = `${first} ${last}`; //! ES6

console.log(FullName1); // Ankit Yadav
console.log(FullName2); // Ankit Yadav

// Embed expressions in strings with a cleaner syntax!

// -> Destructuring

const list = [1, 2, 3];

//! ES5
const one = list[0];
const two = list[1];

//! ES6
const [one1, two1, ...rest] = list;
console.log(one1, two1, rest); // 1 2 [3]

// Unpack values from arrays or properties from object into distinct variables! Heavily used in React

// -> New Array Iteration

const num = [1, 2, 3, 4, 5, 6];

//! ES5
for (let i = 0; i <= num.length; i++) {
  console.log(num[i]);
}

//! ES6
for (i of num) {
  console.log(i);
}

// A Simpler and more declarative way to iterate over arrays

//! ES7 (2016)

// -> Array.prototype.includes()

const fruits = ["Mango", "Banana", "Orange"];

fruits.includes("Mango"); // true
first.includes("Tomato"); // false

// A new, easy way to check if an array includes a certain value

// -> The Exponentiation Operator

Math.pow(2, 10); // 1024

2 ** 10; // 1024

// A new math operator which return the result of the first operand raised to the power of the second operand

//! ES8 (2017)

// -> Object.values() & Object.entries()

const obj = {
  name: "Rogers",
  age: 18,
};

console.log(Object.values(obj)); // ["Rogers", 18]
console.log(Object.entries(obj)); //   [ [ 'name', 'Rogers' ], [ 'age', 18 ] ]

//? String.padStart() & padEnd() methods
//? Asynchronous Function (Async/Await)

//! ES9 (2018)

//? Asynchronous Generators & Iterators
//? Object Rest & Speread Operators
//? Promise.prototype.finialy()
//? RegEp Features (Named Capture Groups, dotAll)

const obj1 = {
  namee: "Ankit",
  agee: 17,
};

const obj2 = {
  name: "Manish",
  age: 18,
};

const comObj = { ...obj1, ...obj2 };
const cloneObj = { ...obj1 };
console.log(comObj); // { namee: 'Ankit', agee: 17, name: 'Manish', age: 18 }
console.log(cloneObj); // { name: 'Ankit', age: 17 }

// An easier way to clone, combine and work with objects in general!

// ES10 (2019)

//? Array.flat() & Array.flatMap()
//? Object.fromEntries()
//? String.trimStart() & trimEnd() methods
//? Optinal Catch Binding (Catch Block Error Param)

const data = [
  ["fileName", "user.txt"],
  ["date", new Date().toLocaleString()],
];

const file = Object.fromEntries(data);

console.log(file); // { fileName: 'user.txt', date: '9/30/2022, 5:55:13 PM' }

//! ES11 (2020)

//? Private Class Variables

class Person {
  #birthyear = 2000;
  age() {
    console.log(2022 - this.#birthyear);
  }
}

const rogers = new Person();
console.log(rogers.age()); // 22
// console.log(rogers.#birthyear) // Error

// Private class variables are declared using a hash in front of the variable or function name. Accessing them outside the classwill throw an error

//? Promise.allSettled() method
//? String.prototype.matchAll()
//? Optinal Chaining Operator

let Car = { color: "red" };
let carColor = Car?.carColor;
console.log(carColor); // undefined
// prevent errors in your code by using optinal chaining!

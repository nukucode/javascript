//* String Properties

//? String Consructor

// the String constructor is used to create a new string object. When called instead as a fucntion, it performs type conversion to a primitive string, which is usally more usefull

//! syntax

// new String(text)
// String(text)

//! Note -: string() can be called with or whthout new, but with different effects.

const a = new String("text");
const b = String("text");

console.log(a instanceof String); // true
console.log(b instanceof String); // false

console.log(typeof a); // object
console.log(typeof b); // string

//? string Prototype

// the protoype is a property available with all javascript objects.

// the prototype property allows you to add new properties and methods to string.

//* syntax

// Object.prototype.name = value;

function Movie(name, revenue) {
  (this.name = name), (this.revenue = revenue);
}

const newMovie = new Movie("Endgame", "1.9B");

Movie.prototype.company = "Marvel";

console.log(newMovie.company); // Marvel

//? string Length

// A Function object's length property indicates the number of parameters expected by the function.

function func1() {}

function func2(a, b) {}

console.log(func1.length);
// expected output: 0

console.log(func2.length);
// expected output: 2

//

console.log(Function.length); // 1

console.log((() => {}).length); // 0
console.log(((a) => {}).length); // 1
console.log(((a, b) => {}).length); // 2 etc.

console.log(((...args) => {}).length);
// 0, rest parameter is not counted

console.log(((a, b = 1, c) => {}).length);
// 1, only parameters before the first one with
// a default value are counted

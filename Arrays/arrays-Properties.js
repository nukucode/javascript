//* 1. array.prototype

// prototype allow you to add new properties and methods to arrays().
// prototype is a property available with all javascript object.

//! syntax
// Array.prototype.name = value;

Array.prototype.myUcase = function () {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
  }
};

const names = ["Rogers", "Manish", "Kalki", "KaliPurush"];

names.myUcase();
// Rogers
// Manish
// Kalki
// KaliPurush

//! you should not change prototype of built in js datatypes like:
// Numbers
// Strings
// Arrays
// Dates
// Booleans
// Function
// Objects

//! Only Changes the prototype of your own objects


//* 2.length


// A Function object's length property indicates the numebr of parameter expected by the function

function func(name, lastname, age){
  // body of function
}

console.log(func.length) // 3


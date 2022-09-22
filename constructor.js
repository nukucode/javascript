//* Constructor In JAVASCRIPT

// A Constructor is a special function that creates and initializes an object instance of a class. In Javascript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any exiting object properties.

//? What Happens When a constructor function called?

// When a constructor function gets invoked/call in javascript,
// the following sequence of operations take place:

// 1. A new empty object gets created.
// 2. the this keyword begins to refer to the new object and it becomes the current instance object.
// 3. The new object is than returned as the return value of the construtor.

//! construtor
// when the this keyword is used in a constructor, it refer to the newly created object
function user(name, age) {
  (this.name = name), (this.age = age);
}

//! create multiple objects

const newUser1 = new user("Rogers", 18);
const newUser2 = new user("Manish", 17);

console.log(newUser1); // user { name: 'Rogers', age: 18 }
console.log(newUser2); // user { name: 'Manish', age: 17 }

//? Constructor VS Object literal

// Object literal
const me = {
  name: "therogersak",
};

// Constructor
function Name() {
  this.name = "Krishna";
}
const name1 = new Name();
const name2 = new Name();

// An object literal is typically used to create a single object whereas a constructor is usefull for creating multiples objects.

// each object created using a constructor is unique. properties can be added or removed from an object without affecting another one created using the same constructor. However, if an object is built using an object literal, any changes made to the variable that is assigned the object values will changes the original object

//? object prototype

// properties and methods can be added to a constructor using a prototype

// In the below example, two car objects are created using the constructor . A new property price is later added to the constructor using a prototype , which is shared across all instances of the car object.

function Car() {
  this.name = "Lamborgini";
}

Car.prototype.price = "5 Million Dollers";

const car1 = new Car();
const car2 = new Car();

console.log(car1.price); // 5 Million Dollers
console.log(car2.price); // 5 Million Dollers

//! Built-In Constructors

var a = new Object();

var b = new String();
var c = new String("India");

var d = new Number();
var e = new Number(3);

var f = new Boolean();
var g = new Boolean(true);

// Although these constructors exist, it is recommended to use primitive data types where possible, such as

// Strings,numbers and booleans should not be declared as objects since they hinder performance.

//* One More Example

function Person(name, age, color) {
  (this.name = name), (this.age = age), (this.color = color);
}

const Person1 = new Person("Rogers", 18, "Black");
const Person2 = new Person("Krishna", 65, "All");

Person.prototype.avatar = "Lord Vishnu Ji";

console.log(Person1); // { name: 'Rogers', age: 18, color: 'Black' }
console.log(Person2); // { name: 'Krishna', age: 65, color: 'All' }

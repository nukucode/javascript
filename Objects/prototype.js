//: Prototype In Javascript

/* Javascript is a prototype bassed language, so whenever
we create a function usign Javascript, Javascript engine adds
a prototype property inside a fuction, Prototype property is basically an object
(also known as Prototype object), where we can attach methods and properties in a prototype object.
 which enables all the other objects to inherit these methods and properties */

//# In Javascript, every function and object has a property named prototype by default.

function Person() {
  this.name = "Rogers";
  this.age = 18;
}

const person = new Person();

// checking the prototype value
console.log(Person.prototype); // {}

//# Prototype inheritance

/* In Javascript, a prototype can be used to add
   properties and methods to a constructor function. And
   objects inherit properties and methods from a prototype.
*/

function Record() {
  this.name = "Rogers";
  this.number = 10;
}

const user1 = new Record();
const user2 = new Record();

// adding property to constuctor function
Record.prototype.gender = "male";

// prototype value of Record
console.log(Record.prototype);

// inheriting the property from prototype
console.log(user1.gender);
console.log(user2.gender);

//# Add Methods to a constuctor Fuction usign Prototype

Record.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

user1.greet();
user2.greet();

//# Chaining Prototype

/* If a prototype value is changed, then all the 
objects will have the changed property value. All the
previously created objects will have the previous value. */

function Car() {
  this.name = "Tata";
}

// add a property
Car.prototype.from = "In";

// creating an object
const car1 = new Car();

// chaining the property value of prototype
Car.prototype = { from: "Hindustan" };

// creating an object
const car2 = new Car();

console.log(car1.from); // In
console.log(car2.from); // Hindustan

//# The Benifits of usign a prototype in Javascript

/* 1.Prototype make it simple to define methods for all
   instances of an object
   
   2.The method is applied to the prototype, thus it is
   only saved in momery once, but it is accessible to
   every instance of the object.
   */

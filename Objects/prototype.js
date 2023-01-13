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

//* Problem with the prototype

/* Problem with the prototype: Modifying a propertry using one object reflact the other object also */

// Create a empty constructor function
function User() {}

//Add property name, age to the prototype property of the User constructor function
User.prototype.name = "Ankit";
User.prototype.age = 18;
User.prototype.friends = ["Rohit", "Shubham", "Abhishek"];
User.prototype.sayHi = function () {
  return `${this.name}`;
};

// Create objects using the User constructor function
var one = new User();
var two = new User();

// Add a new element to the friends array
one.friends.push("Rahul");

console.log(one.friends); // "Rohit", "Shubham", 'Abhishek', "Rahul"

console.log(two.friends); // "Rohit", "Shubham", 'Abhishek', "Rahul"

//* Combine constructor/Prototype

/* 1.Problem with the constructor function: Every object has its own instance of the function.

2.Problem with the prototype: Modifying a property using one object reflects the other object also.

=> To solve both problems, we can define all the object-specific properties inside the constructor and all shared properties and methods inside the prototype as shown below:*/

//Define the object specific properties inside the constructor

function Human(name, age) {
  this.name = name;
  this.age = age;
  this.friends = ["God", "Ram"];
}

//Define the shared properties and methods using the prototype
Human.prototype.sayHi = function () {
  return `${this.name}`;
};

//Create two objects using the Human constructor function
var human1 = new Human("Ankit", 18);
var human2 = new Human("Krishan", 10);

// Let's check if human1 and human2 have point to the same instance of the SayHi function
console.log(human1.sayHi === human2.sayHi); // true

//Let's modify friends property and check
human1.friends.push("Narayan");

console.log(human1.friends); // "God", "Ram", "Narayan"
console.log(human2.friends); // "God", "Ram"

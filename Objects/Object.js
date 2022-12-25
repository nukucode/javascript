//: Object

/* In contrast, object are used to store keyed collection of various data and more complex entities. */

let user = new Object(); // => Object Constructor
let obj = {}; // => Object literal

// Literals and properties
let Person = {
  name: "John",
  age: 30,
};

// Property access
obj.name; // => "John"

// TO REMOVE A PROPERTY, WE CAN USE THE DELETE OPERATOR
delete Person.age;

// we can also use multiword property names, but then they must be quoted

let Car = {
  make: "Volvo",
  model: "Tesla",
  "Best Award": true, // => multiword property name must be quoted
};

// The last property in the list may end with a comma:

let Car2 = {
  make: "Volvo",
  model: "Tesla",
};

/* That is called a "trailing" or "hanging" comma. Makes it easier to add/remove/move around properties, because all lines become alike */

// Square Brackets
// => For multiword properties, the dot access doesn't work

//! this would give a syntax error
// Car.Best Award = true

// Square brackets notation - that works with any string

Car2["Best Award"] = true; // => true
Car2["Best Award"]; // => true
delete Car2["Best Award"];

// Computed Properties

let fruit = prompt("Which fruit you buy", "apple");

let bag = {
  [fruit]: 5,
};

bag.apple;

// we can use more complex expression inside sqaure brackets:

let mobile = "oppo";
let store = {
  [mobile + "store"]: 10,
};

store.mobileStore; // => 10

// Property value shorthand

function makePerson(name, age) {
  return {
    name: name,
    age: age,
  };
}

let a = new makePerson("Ankit", 18);
a.name; // => "Ankit"

//? Other types are automatically converted to strings.

// Property exitence test, "in" operator

let name = {
  first: "John",
  last: "Doe",
};

"first" in name; // => true

// The "for...in" loop

for (let key in name) {
  //keys
  console.log(key);
  //values
  console.log(name[key]);
}

// Ordered like an object
/* 
?"Ordered in a special fashion": Integer properties are sorted, 
*/

let codes = {
  91: "India",
  41: "Switzerland",
  42: "France",
  45: "Spain",
  43: "Germany",
  44: "Italy",
  1: "America",
};

for (let code in codes) {
  console.log(code); // => 1, 41, 42, 43, 44, 45, 91
}

//? ...On the other hand, if the keys are non-integer, they are listed in  the creation order

//* CHALLENGES

// Check for emptiness

let schedule = {};

isEmpty(schedule); // => true

schedule["4:30"] = "get up";

isEmpty(schedule); // => false

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// Sum object properties

let salaries = {
  Jhon: 100,
  Mary: 200,
  John: 300,
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum); // => 600

// Multiply numeric property value by 2

let menu = {
  width: 200,
  height: 400,
  title: "Menu is A Navigation",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

console.log(multiplyNumeric(menu));
console.log(menu);


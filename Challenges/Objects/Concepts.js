//: Show the different ways of creating an object

const object1 = Object.create({ name: "therogersak" });

const object2 = {
  name: "value",
};

function GetObject(name) {
  this.name = name;
}

const object3 = new GetObject("Rohit");

class Obj {
  constructor(key, value) {
    this[key] = value;
  }
}

const object = new Obj("key", "value");

//: Display all the keys of an object

const keys = Object.keys(object);
console.log(keys);

for (let key in obj) {
  if (obj.hasQwnProperty(key)) {
    console.log(key);
  }
}

for (let key of Object.keys(obj)) {
  if (obj.hasQwnProperty(key)) {
    console.log(key);
  }
}

Object.keys(obj).forEach((key) => {
  console.log(key);
});

//: Display all the values of an object

console.log(Object.values(obj));

for (let value of Object.values(obj)) {
  console.log(value);
}

Object.values(obj).forEach((value) => console.log(value));

for (let key of Object.values(obj)) {
  if (obj.hasQwnProperty(key)) {
    console.log(obj[key]);
  }
}

//: Write a function which can check if a given object is empty or not

function isObjectEmpty(obj) {
  if (obj !== null && typeof obj !== "undefined" && typeof obj === "object") {
    return Object.keys(obj).length === 0 && JSON.stringify(obj) === "{}";
  } else {
    return false;
  }
}

//: Create an empty object which has no prototype attached to it

const emptyObject = Object.create(null);

//: Show the usage of Object.entries to create an object from key value pairs

const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj = Object.fromEntries(arr);

const obj2 = Object.fromEntries(map);

//: Connect 2 object so that one object is prototypically connected to the other

const obj4 = { a: 1 };
const obj5 = { b: 2 };

obj5.setPrototypeOf(obj4);

// 2

obj4.__proto__ = obj5;

const obj = {};

Object.defineProperty(obj, "data", {
  _data: 0, // closure variable to hold the data
  get() {
    return this._data;
  },
  set(value) {
    this._data = value;
  },
});

//: Show the different types of accessor properties available for object property and write a code defining them

var obj = {};

Object.defineProperty(obj, "prop", {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});

//: Shoe the difference options available to prevent the modification to the object

/* => preventExtensions is an Object method which prevents addition of any new property to an object.

=> seal is an Object method which prevents addition and deletion of any property in an object.

=> freeze is an Object method which prevents addition, deletion and update of any property of an object.

T=> here are also methods isExtensible, isSealed and isFrozen on Object to check */

Object.preventExtensions(obj);
Object.isExtensible(obj);

Object.seal(obj);
Object.isSealed(obj);

Object.freeze(obj);
Object.isFrozen(obj);

//: Show the creation of Regular Expression in JavaScript

// literal from
/ab+c/g;

// constructor from
new RegExp("ab+c", "g");

//: Write a code show optional chaining for objects and functions

// object property access
obj.val?.prop;

// object property access through bracket notation
obj.val?.[expr]

// array index access
obj.arr?.[index]

// object property access for function call
obj.func?.(args)
//: Show the difference ways of creating an array

// literal from
const arr = [];

// constructor from
const newArr = new Array();

// pre defined number of slots
const slots = new Array(10);

// both with value
const newArray = [1, 2, 3, 4];
const constructorArr = new Array(1, 2, 3, 4);

//: Write a program to iterate over an array and print all the value of it

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 2nd
for (let index in arr) {
  console.log(arr[index]);
}

// 3rd
for (let value of arr) {
  console.log(value);
}

// 4rt
arr.forEach((value) => console.log(value));

//: Write a program to append and prepend, single or multiple values in to an array

const numArr = [2, 3];
numArr.push(4, 5);
numArr.unshift(1);
console.log(numArr); // [1,2,3,4,5]

const otherNumArr = [1, 2, 3];
const otherArr = [4, 5, 6];
otherNumArr.push(...otherArr);
otherArr.unshift(...otherNumArr);

//: Show inseration and removal of elements can happen in the array for given index

const dupArr = [1, 2, 3, 3, 4];
const position = 2;
const count = 1;
dupArr.splice(position, count);
console.log(dupArr); // => [(1, 2, 3, 4)];

// insert and remove both
const spliceArr = [1, 2, 3, 4, 4, 6];
spliceArr.splice(4, 1, 5);
console.log(spliceArr);

//: Show the difference ways of emptying an array which has values

arr = [];

// 2nd
arr = new Array();

// 3rd
arr.length = 0;

// 4rt
while (arr.length > 0) {
  arr.pop();
}

// 5th
while (arr.length > 0) {
  arr.shift();
}

// 6th
arr.splice(0, arr.length);

//: Check if given input is an array or not

Array.isArray(arr);

// 2nd
Object.prototype.toString.call(arr) === "[object Array]";

//! "typeof" operator cannot be used to check if a value is an array or not because array is an object and typeof arr return "object"

//: Show how an array in javascript can act like a stack and queue

// To add the value to the stack
arr.push(value);

// To remove the value from the stack
arr.pop();

// => 2nd

// To add the value to the queue
arr.push(value);

// To remove the value from the queue
arr.shift();

//: Create an array by removing all the holes of the array

const uniqueArr = arr.filter((value) => true);

// 2nd

const uniqueArray = arr.filter(Boolean);

//: Optimize the given statement having lot of logical checks to use a compact and cleaner logic

// => Example1
// Example1
browser === "chrome" ||
  browser === "firefox" ||
  browser === "IE" ||
  browser === "safari";

// Example2
browser !== "chrome" &&
  browser !== "firefox" &&
  browser !== "IE" &&
  browser !== "safari";

// => RIGHT
// Example1
// browser === "chrome" || browser === "firefox" || browser === "IE" || browser === "safari"

const browserList = ["chrome", "firefox", "IE", "safari"];
browserList.includes(browser);

// Example2
// Example2
// browser !== "chrome" && browser !== "firefox" && browser !== "IE" && browser !== "safari"

const browserList2 = ["chrome", "firefox", "IE", "safari"];
!browserList2.includes(browser);

//: Write a program to iterate over a 2 dimensional array and print all the values of it

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

// 2nd
for (let rowArr of arr) {
  for (let value of rowArr) {
    console.log(value);
  }
}

// 3rd
arr.forEach((rowArr) => rowArr.forEach((val) => console.log(val)));

//: Write a program to store values in to a set

const set = new Set();
set.add(1);
set.add(2);
set.add(true);

console.log(set); // 1, 2, true

// or
const set2 = new Set([1, 2, 3, 4]);
console.log(set2); // 1 ,2 ,3 , 4

//: Write a program to store value in to a map

const map = new Map();
map.set(1, 1000);
map.set(true, false);
map.set("text", "Hello");

console.log(map); // [1,1000] [true,false] ["text", "Hello"]

// => or
const map2 = new Map([
  [1, "One"],
  [2, "two"],
  [3, "three"],
]);
console.log(map2); // [1, "One"] [2, "two"] [3, "three"]

//: Write a code to iterate over a set

for (let val of set) {
  console.log(val);
}

// and
set2.forEach((val) => console.log(val));

//: Write a code to iterate over a map

for (let ket of map) {
  console.log(val[0], val[1]);
}

// AND
for (let key of map.keys()) {
  console.log(key, map.get[key]);
}

// AND
map.forEach((key, value) => console.log(key, value));

//: Show how map is different from object to store key value pairs with coding example

map.set(1, "Mapped to a number"); // primitive number as key
map.set("1", "Mapped to a string"); // string value as key
map.set({}, "Mapped to a object"); // object as key
map.set([], "Mapped to an array"); // array as key
map.set(() => {}, "Mapped to a function"); // function as key

//: Write a program to polyfill filter functionality of the Array

if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback) {
    if (typeof callback !== "function") {
      throw new Error("Argument passed has to be a function");
    }

    let newArray = [];

    for (let index in this) {
      if (callback(this[index], index, this)) {
        newArray.push(this[index]);
      }
    }
    return newArray;
  };
}


//: Write a program to polyfill map functionality of the array

if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    if (typeof callback !== "function")
      throw new Error("Argument passed has to be a function");

    let newArray = [];

    for (let index in this) {
      newArray.push(callback(this[index], index, this));
    }
    return newArray;
  };
}

//: Write a program to polyfill reduce functionality of the array

if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, init) {
    let startPosition = 0;
    let accumulator = init ?? this[startPosition++];

    for (let index = startPosition; index < this.length; index++) {
      accumulator = callback(accumulator, this[index], index, this);
    }
    return accumulator;
  };
}
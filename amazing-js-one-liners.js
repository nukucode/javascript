//? check if tab active

const isTabActive = () => !document.hidden;
console.log(isTabActive());

//? Append an array to another way

/// if your arrays are not huge, you can use the push() method of the array to which you want to add values

/// the push() method can take multiple parameters so you can use the apply() method to pass the array to be pushed as a collection of function parameters.

let arr1 = [12, 3, 4, 5, "Hello", "Ankit", "45", "47"];
let arr2 = [234, 45, 5, 665, 76, 678, "Hello", "Manish", 48];

Array.prototype.push.apply(arr1, arr2);

console.log(arr1); // arr1 will be equal to
console.log(arr2);

//? Verify that a given arguments is a number

function numChecker(n) {
  return !isNaN(parseFloat(n) && isFinite(n));
}
console.log(numChecker(5));

//* 40+ Killer Javascript One Liners

//? => Get a random boolean
const randomBoolean = () => Math.random() >= 0.5;

//? Check if the provided date is a weekday or weekend
const isWeekend = (data) => [0, 6].indexOf(data.getDay()) !== -1;

//? Check if a number is even or odd
const isEven = (num) => num % 2 === 0;

//? Remove all duplicate values in an array
const arr = (arr) => [...new Set(arr)];

//? Check if a variable is an array
const isArray = (arr) => Array.isArray(arr);

//? Generate a random number between two numbers
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

//? Generate a random string (unique id?)
const randomString = () => Math.random().toString(36).slice(2);

//? Swapping Two Variables || Destructuring
let b = "a";
let a = "b";

[b, a] = [a, b];

//? Calculate number of days between two dates
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);

//? Different ways of merging multiple arrays
const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [8, 9, 10, 12, 3, 4, 5, 6];

const merge = (a, b) => array1.concat(array2);
//or
const merge2 = (a, b) => [...a, ...b];
// or and remove the duplication
const merge3 = [...new Set(a.concat(b))];
// or
const merge4 = [...new Set([...a], ...b)];

//? Get the actual type of Js primitives
const trueType = (obj) =>
  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

//? Truncate

//! String at the end
const truncate1 = (str, num) => {
  return str.length < num ? str : str.slice(0, num - 3) + "...";
};

//! string from the middle
const truncateStringMiddle = (str, num, start, end) => {
  return `${str.slice(0, start)}...${str.slice(str.length - end)}`;
};

//! a number to a fixed decimal point
const toFixed = (n, fixed) =>
  ~((Math.pow(10, fixed) * n) / Math.pow(10, fixed));

//? Capitalizing a string
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalize("rogers"));

//? Chech if the current tab is in view/focus
const isTabView = () => document.hidden;
//or
document.hidden ? "hidden" : "visible";

//? Revers a string

const reverse = (str) => str.split("").reverse().join("");
// or
const reverse2 = (str) => [...str].reverse().join``;



//: Swap 2 itergers parseInt in variables num1 and num2 without using temporary variables

/* => The swapping of 2 variables is possible with simple Destructuring assignement using array

=> Traditional approach of swapping by using the given variables is also achievable */

let num1 = 10,
  num2 = 20;

[num1, num2] = [num2, num1];

//

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

//! 2nd solutaion can fail due to overflow of number range if the number are ver y big.

//: Q. Write a function which returns true if given value of number is an integer without using any inbuilt functions

function isInt(value) {
  return value % 1 === 0;
}

// Example
isInt(4.0); // true
isInt(12.2); // false
isInt(0.3); // false

//:  Create a function which returns a random number in the given range of values both inclusive.

function randomNumberGeneratorInRange(val1, val2) {
  return Math.floor(Math.random() * (val2 - val1)) + val1;
}

//: Write a program to reverse a string

/* 
> String can also be reversed by converting it to array, then joining it after reversing */

let str = "Javascript is awesome";
str.split("").reverse().join(""); // "emosewa si tpircSavaJ"

//: Write a program to reverse a string by words. Also show the reverse of each words in place

let str2 = "JavaScript is awesome";
console.log(str2.split(" ").reverse().join(" "));

str2
  .split(" ")
  .map((val) => val.split("").reverse().join(""))
  .join(" ");

//: Write a program to reverse a given interger number

let num = 3849;

let numStr = String(num);
+numStr.split("").reverse().join(""); // 9483

//: Write a code to replace all the spaces of the string with underscores

let str3 = "Hello World";

console.log(str3.replaceAll(" ", "_"));
console.log(str3.split(" ").join("_"));

//: Q. Write a function which can convert the time input given in 12 hours format to 24 hours format

function convertTo24HrsFormat(timetext) {
  const lowerTimeText = timetext.toLowerCase();
  let [hours, mins] = lowerTimeText.split(":");

  // 12 o clock is the special case to be handle both for Am AND PM
  if (lowerTimeText.endsWith("am")) {
    hours = hours == 12 ? "0" : hours;
  }
  if (lowerTimeText.endsWith("pm")) {
    hours = hours == 12 ? hours : String(+hours + 12);
  }

  return `${hours.padStart(2, 0)}:${mins.slice(0, -2).padStart(2, 0)}`;
}

console.log(convertTo24HrsFormat("10:02PM"));

//: Write a function to truncate a string to a certain number of latter

function truncateString(str, length) {
  if (str.length > length) {
    return str.substr(0, length - 3) + "...";
  } else {
    return str;
  }
}

//: Write a code to truncate a string to a certain numebr of words

const str4 = "Hello I am Ankit Yadav Wow";
const wordLimit = 5;

console.log(str4.split(" ").slice(0, 5).join(" "));

//: Create a regular expression to validate if the given input is valid Indian mobile number or not

function checkNumbers(num) {
  const regex = /^(\+91|0)\s?\d{10}$/;
  return regex.test(num);
}

console.log(checkNumbers("+91 6375532898"));

//: Write a function which returns a list of elements which contains at least one character as digit

function numInStr(array) {
  return array.filter((val) => {
    return /[0-9]/.test(val);
  });
}

console.log(numInStr(["ab", "bc1", "2ab", "ab"]));

//: Q. Write a function to chop a string into chunks of a given length and return it as array

function stringChop(str, size = str.length) {
  const arr = [];
  let i = 0;
  while (i < str.length) {
    arr.push(str.slice(i, i + size));
    i = i + size;
  }
  return arr;
}

//

function stringChop(str, size = str.length) {
  return str.match(new RegExp(".{1," + size + "}", "g"));
}

//: Write a code to remove all the vowels from a given string

const str5 = "I love JavaScript";
console.log(str.replace(/[aeiou]/gi, ""));

//: Create a function which return random hex color code

const randomHexcode = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, 0)}`;

console.log(randomHexcode());

// Write a code difference between two dates

const MILLISECOND_IN_A_DAY = 1000 * 24 * 60 * 60;

const differenceBetweenDates = (date1, date2) => {
  const date = new Date(date1);
  const datee = new Date(date2);
  const differenceTime = Math.abs(date - datee);
  const time = Math.ceil(differenceTime / MILLISECOND_IN_A_DAY);
  return time;
};

console.log(differenceBetweenDates("1/1/2022", "12/17/2022"));

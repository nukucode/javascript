//: Show the usage of typeOf operator on different types of values

//? The typeof operator return the type of operand as a string;

typeof 50; //   "number"
typeof "text"; //   "string"
typeof true; //   "boolean"
typeof undefined; //   "undefined"
typeof function () {}; //   "function"
typeof 10n; //   "bigint"
typeof Symbol(); //   "symbol"
typeof [1, 2]; //   "object"
typeof {}; //   "object"

typeof NaN; //   "number"        (NaN is Not a Number)
typeof undeclaredVar; //   "undefined"     (undeclaredVariable is never declared)
typeof Infinity; //   "number"        (Infinity, -Infinity, -0 are all valid numbers in JavaScript)
typeof null; //   "object"        (This stands since the beginning of JavaScript)
typeof /regex/; //   "object"        (regular expressions start and end with '/' in literal form)

//! Arrays and functions are sub type of objects

//: Show the difference ways of concatenating number and strings

// numbers and strings
1 + "2"; // 12
1 + 2 + "3"; // 33
1 + 2 + "3" + "4"; // 334
1 + "One"; // 1One

// strings and numbers
"1" + 2; // 12
"1" + "2" + 3; // 123
"1" + "2" + 3 + 4; // 1234
"1" + "2" + (3 + 4); // 127
"One" + 1; // One1

// mix of string and numbers
1 + 2 + "3" + "4" + 5 + 6; // 33456
1 + 2 + "3" + "4" + (5 + 6); // 33411
"1" + "2" + (3 + 4) + 5 + "6"; // 12756

//: Show the conversion from number to string and vice versa

// number to string conversion

const num = 12;

const str = String(num); // "12"
const str2 = num.toString(); // "12"
const str3 = num + ""; // 12

// string to number conversion
const numStr = "12";

Number(numStr); // 12
+numStr; // 12
parseInt(numStr); // 12

//: Show the usage of ||, &&, ?? and !! with code examples

const num1 = 10,
  num2 = 20;

true || false; // true
false || false; // false
false || num1; // 10
0 || num2; // 20
"text" || true; // "text"
num1 > 0 || num2 < 0; // true

true && true; // true
true && false; // false
true && num1; // 10
num1 && num2; // 20
"text" && num1 + num2; // 30
num1 > 0 && num2 < 0; // false

undefined ?? 10; // 10
null ?? 20; // 20
false ?? num1; // false
0 ?? num2; // 0

!!10; // true
!!{}; // true
!!""; // false
!!0; // false

//: Show the frequently and commonly used methods available on Number object with coding examples

Number.isInteger(1.5); // false
Number.isInteger(-15); // true

Number.parseInt("5.8"); // 5
Number.parseInt("123x"); // 123

Number.parseFloat("5.86"); // 5.86
Number.parseFloat("-12.69x"); // -12.69

Number.isNaN(NaN); // true
Number.isNaN("text" - 10); // true
Number.isNaN("text"); // false

(56.369).toFixed(2); // 56.37
(59).toFixed(3); // 59.000

(32.458).toPrecision("3"); // 32.5
(98.1).toPrecision(1); // 1e+2

//: Write the polyfill for Number.isNaN

/* A polfill is a piece of code used to provide modern functionality on older brwsers that do not natively support it.

=> NaN is the only value which is not equal to itself and hence comparsion operator cannot be used directly to check if a value is NaN.*/

Number.isNaN =
  Number.isNaN ||
  function isNaN(v) {
    return typeof v === "number" && v !== v;
  };

//: Show the frequently and commonly used methods available on Math object with coding examples

Math.abs(-5));                      // 5
Math.floor(1.6));                   // 1
Math.ceil(2.4));                    // 3
Math.round(3.8));                   // 4
Math.max(-4, 5, 6));                // 6
Math.min(-7, -2, 3));               // -7
Math.sqrt(64));                     // 8
Math.pow(5, 3));                    // 125
Math.trunc(-6.3));                  // -6


//: How can we solve the problem of comparison of 0.1 + 0.2 with where === operator fails

//? Number.EPSILON is 2 power 52, which can be used to verify if this decimal value are matching.

0.1 + 0.2 - 0.3 < Number.EPSILON   // true


//: Write a code to iterate over a string

let strr = "Hello I am therogersak";

for (let i = 0; i < strr.length; i++) {
  console.log(strr.charAt(i));
}

for (let i in strr) {
  console.log(strr[i]);
}

for (let i of strr) {
  console.log(i);
}

[...strr].forEach((element) => {
  console.log(element);
});


//: Show the usage of template literals with expression interpolation and tagged templates

const a = 10, b = 20;
console.log(`The Sum of ${a} and ${b} is ${a + b}`)


// Tagged templates

// Tagged templates
let person = 'John';
let membership = [1, 3];

function myTag(strings, person, membership) {
    let communities = ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
    
    let str0 = strings[0]; // "Note:"
    let str1 = strings[1]; // "is a member of following communities:"

    let personCommunities = membership.map(index => communities[index])
    return `${str0}${person}${str1}${personCommunities}`;
}

myTag`Note: ${person} is a member of following communities: ${membership}`;     // Note: John is a member of following communities: JavaScript,HTML


//: Write a code the working of try...catch...finally

try {
    // Below statement will throw an Error
    callAPI();
} catch (error) {
    // Create a new error and throw
    throw new Error(error); 			// ReferenceError: callAPI is not defined
} finally {
    console.log('I will execute no matter what happened in try or catch');
}


//: Show the creation and usage of symbol with code

// new symbol
let symId = Symbol("id");

// global symbol
let symUsername = Symbol.for("username");

// get name by symbol
Symbol.keyFor(symUsername);                 // username
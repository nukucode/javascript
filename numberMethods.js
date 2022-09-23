//* Number Methods

//? Here Is a list of built-in number methods in Javascript

//! 1.Number

// the Number() method converts a string into  a number

const num = "10";

let number = Number(num);

console.log(number); // 10
console.log(typeof number); // number

// exam -2

const num2 = "12";

const number1 = Number(num2);

console.log(number1 * 2); // 24

//! 2.parseInt()

// .parseInt() very similar to he number method, parseInt() formats a string into an integer.

const num3 = "123";

const number3 = parseInt(num3);

console.log(number3, typeof number3); // 123 number

//! 3.parseFloat()

// the parseFloat() method parses a string value and returns the number with its decimal value.

const num4 = "10.99";

const number4 = parseFloat(num4);

console.log(number4, typeof number4); //123 number

//! toString()

// the String() method converts a numeric value into a string

const num5 = "11.005";

console.log(num5.toString(), typeof num5); // 11.005 string

//! toExponential()

// as the name suggests, .toExponential() converts a number into a string and returns it in an exponentail format

let x = 343.433;

let y = x.toExponential();

console.log(y); // 3.43433e+2

const a = 1245.23;

const b = a.toExponential(2);

// the parameter with 2 digits, returns the value with two decimal digits

console.log(b, typeof b); // 1.25e+3 string

//! toFixed()

// method rounds up a number to the nearest highest or lowest fixed-point notation. It takes in a parameter which signifies the number of digit should be displayed after the decimal point.

const c = 34.33;

console.log(c.toFixed()); // 34

const d = 34.9;

console.log(c.toFixed(2)); // 34.33

//! toPrecision()

// .toPrecision() returns the numeric value with a specific length. It takes an arguments that signifies the length. If given without a specific length, the method return the number as it isFinite.

const p = 2324.343;

console.log(p.toPrecision()); // 2324.343
console.log(p.toPrecision(2)); // 2.3e+3

//! valueOf()

// the valueOf() method is used to return the primitive value of the number object you're calling it on. Primitive type in js are number, string, symbol, undefined, null, boolean

const o = 23;

let value = o.valueOf();

console.log(value); // 23

//! toLocaleString()

// the toLocalString() method uses a local language format to convert a number and return it as a string. It take two arguments, locales and options, which defines the language of which conversion you want to use, and the behavior of the function

let someNum = 323423433.343;

console.log(someNum.toLocaleString("en-US")); // 323,423,433.343

// Indian (India)
console.log(someNum.toLocaleString("hi-IN")); // 32,34,23,433.343

//! isInteger()

// .isInteger() checks whether the given value is an integer and returns a boolean value.\

const checkNum = 3;

console.log(Number.isInteger(checkNum)); // true

const checkNum2 = "3";
console.log(Number.isInteger(checkNum2)); // false

//! .isFinite()

// .isFinite() check whether the given value is finite and return a boolean value

const checkFinite = 23; // true

console.log(Number.isFinite(checkFinite));

const checkFinite2 = "23";
console.log(Number.isFinite(checkFinite2)); // false

//! isSafeInteger()

// .isSafeInteger() check whether the given value is a safe integer and returns a boolean value. An integer is considered as safe integer when all integer are exactly between (2^53-1) to -(2^53-1)

console.log(Number.isSafeInteger(110)); // true
console.log(Number.isSafeInteger(-110)); // true
console.log(Number.isSafeInteger(23.3)); // false
console.log(Number.isSafeInteger(34234234324242232342)); // false

// quik summery

//*isNaN()	determines whether the passed value is NaN
//? isFinite()	determines whether the passed value is a finite number
//* isInteger()	determines whether the passed value is an integer
//? isSafeInteger()	determines whether the passed value is a safe integer
//* parseFloat(string)	converts the numeric floating string to floating-point number
//? parseInt(string, [radix])	converts the numeric string to integer
//* toExponential(fractionDigits)	returns a string value for a number in exponential notation
//? toFixed(digits)	returns a string value for a number in fixed-point notation
//* toPrecision()	returns a string value for a number to a specified precision
//? toString([radix])	returns a string value in a specified radix(base)
//* valueof()	returns the numbers value
//? toLocaleString()	returns a string with a language sensitive representation of a n

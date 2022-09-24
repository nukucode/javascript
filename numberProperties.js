//* Number Properties

//! 1. EPSILON

// the Number.EPSILON property represents the difference bettween 1 and the smallest floating point number greater than 1.

var result = Math.abs(0.2 - 0.3 + 0.1);
console.log(result); // 2.7755575615628914e-17
console.log(result < Number.EPSILON); // true

//! 2. MAX_SAFE_INTEGER

// the Number.MAX_SAFE_INTEGER retrun the maximum safe integer.

const a = Number.MAX_SAFE_INTEGER + 1;
const b = Number.MAX_SAFE_INTEGER + 2;
console.log(a); // 9007199254740992
console.log(b); // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
const num = Math.pow(2, 53) - 1;
console.log(num);
console.log(num === Number.MAX_SAFE_INTEGER); // true

//! 3. MAX_VALUE

// return the largest possible value

const number = Number.MAX_VALUE;
console.log(number); // 1.7976931348623157e+308
//! 4. NaN

// In Javascript, NaN is short for "Not-a-Number";
// IN Js, NaN is A Number that is not a legal number.
// the Global NaN property is the same as the Number.NaN property

let x = Number.NaN;
console.log(x); // NaN

//! 5. NEGATIVE_INFINITY

// Number.NEGATIVE_INFINITY returns negative infinity

// Number.NEGATIVE_INFINITY is "a number lower than any other number".

const c = Number.NEGATIVE_INFINITY;
console.log(c); // -Infinity

let n = -Number.MAX_VALUE * 2;

console.log(n); // -Infinity
//! 6. POSITIVE_INFINITY

// POSITIVE_INFINITY returns positive infinity.

// POSITIVE_INFINITY is "something higher than any other number".

const pI = Number.POSITIVE_INFINITY;

console.log(pI); // Infinity

const n2 = Number.MAX_VALUE * 2;

console.log(n2); // Infinity

//! 7. prototype

// prototype allow you to add new properties and methods to number

// prototype is a property available with all JavaScript objects.

//? syntax

// Number.prototype.name = value;

Number.prototype.multi = function () {
  return this.valueOf() * 2;
};

const nu = 5;
console.log(nu.multi()); // 10

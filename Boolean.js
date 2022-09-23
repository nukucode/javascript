//? Boolean Values

//* falsy values: false,0, -0, null, undifiened, NaN, and the empty string ""

console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("")); // false

//* truthy values: true, 1, -1, 1n, -1n, Infinity, -Infinity, " ", {}, []

console.log(Boolean(true)); // ture
console.log(Boolean(1)); // ture
console.log(Boolean(-1)); // true
console.log(Boolean(1n)); // true
console.log(Boolean(-1n)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true
console.log(Boolean(" ")); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(typeof Boolean([])); // boolean

//! Boolean Constructor

// the constuctor property return the function that creared the boolean prototype

// for javascript booleans the constuctor property returns

//* function Boolean() {native code}

//? syntax

// boolean.constructor

const bool = true;
const text = bool.constructor;

console.log(text);

//! Boolean prototype

// prototype allows you to add new properties and methods to boolean.

// prototype is a property available with all javacript objects.

//? syntax

// Boolean.prototype.name = value;

Boolean.prototype.color = function () {
  if (this.valueOf() == true) {
    console.log("red");
  } else {
    console.log("green");
  }
};

const a = true;

a.color();

//! Boolean toString();

// the toString() method returns a boolean as a string;

//? syntax

const boolean = true;

console.log(boolean.toString());

//! Boolean valueOf()

// valueOf returns the primitive value of a boolean.

// valueOf() is usually called by javascript behind the scenes, and note explicitly in code

// ES1 feature

//? syntax

// boolean.valueOf()

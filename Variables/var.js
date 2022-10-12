//: Var In Javascript

//# Scope of var ==>

// Scope essentially means where these variables are available for use. var declarations are globally scoped or function/locally scoped.

var greeter = "Ram Ram";

function newFunction() {
  var hello = "Ram Ram";
}

/* Here, geeter is globally scoped because it exits outside a function while hello is function scoped.
So we cannot access the variable hello outside of a function. So if we do this: */

var tester = "Ram Ram";

function myFunction() {
  var hello = "hello";
}

console.log(hello); // ReferenceError: hello is not defined

//# var variables can be re-declared and updated

var greeter = "hey";
var greeter = "Say Ram Ram Ji";

// and also this

greeter = "Hello";

//# Hoisting of var

// Hoisting is a Javascript mechanism where variables and function declarations are moved to the top of their scope before code execution.

console.log(msg); // undefined
var msg = "Say Hello";

// it is interpreted as this:

var msg2;
console.log(msg2);
msg2 = "Say Ram";

// So var variables are hoisted to the top of their scope and initialized with a value of undefined.

//# Problem with var

// there'a weakness that comes with var.

var topic = "The Art Of Hacking";
var times = 5;

if (times > 4) {
  var topic = "Develop, Preview, Ship";
}

console.log(topic); // Develop, Preview, Ship

/* While this is not a problem if you knowingly want greeter to be redefined, it becomes a problem when you do not realize that a variable greeter has already been defined before.

If you have used greeter in other parts of your code, you might be surprised at the output you might get. This will likely cause a lot of bugs in your code. This is why let and const are necessary. */

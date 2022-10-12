//: Let In Javascript

//# Let is Block scoped ==>

/* A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.

So a variable declared in a block with let is only available for use within that block. Let me explain this with an example
*/

let greeting = "Say Hello";
let times = 5;

if (times > 4) {
  let hello = "Ram Ram";
  console.log(hello);
}

console.log(hello); // ReferenceError: hello is not defined

/*
We see that using hello outside its block (the curly braces where it was defined) returns an error. This is because let variables are block scoped . 
*/

//# Let can be updated but not re-declared.

/*
a variable declared with let can be updated within its scope. a let variable cannot be re-declared within its scope. so white this will work
 */

let num = 10;
num = 20;

//! it will return error

let name = 'therogersk';
let name = "Ankit"; // SyntaxError: Identifier 'name' has already been declared

/* Why is there no error?. This is because both instances are treated as different variables since they have diffrent scopes.
 */

//# Hoisting of let

/*
Just like var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declartion, you'll get a Referende Error. 
*/

// variables declared with let seem to have some problems with hoisting.

console.log(power);
let power = "Super"

gender = "Male";
console.log(gender);
let gender;

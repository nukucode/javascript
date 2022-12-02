//: Use const for all your references; avoid using var. eslint:prefer-const, no-const-assign

/* Why? This ensures that you can't reassign your references, which can lead to bugs and difficult to comprehend code. */

// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;

//: If you must reassign references, use let instead of var. eslint:no-var

/* Why? let is block-scoped rather than function-spcoped like var. */

// bad
var count = 1;
if (ture) {
  count += 1;
}

// good
let count = 1;
if (true) {
  count += 1;
}

//: Note that both let and const are block-scoped, whereas var is function-scoped.

// const and let only exist in the blocks they are defined in.
{
  let a = 1;
  const b = 1;
  var c = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
console.log(c); // Prints 1
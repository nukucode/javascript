//* Hoisting IN Javascript

// -> Javascript compiler moves variables and function declaration to the top called hoisting

alert = "hi i am declared later";
console.log(alert);
var alert;

// In Simple words, we can say that we can use the variables and function in  Javascript before declaring them

console.log(alert2);
var alert2 = "hi i am declared later";

// here "alert" is not declared but initialized.

// the above code does not work because Javascript only hoists declarations, not initialization.

//! Javascript also moves Function definition to the top but does not move function expression to the top.

//* Right
console.log(sum(4, 5));
function sum(x, y) {
  return x + y;
}

//wrong
console.log(add(4, 5));
const add = function sum2(x, y) {
  return x + y;
};

//* ==> Note : function definition will move before the variable

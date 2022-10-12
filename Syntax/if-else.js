//: Javascript if, else, and else if

//* Conditional Statements

// if to specify a block of code to be execute, if a specified condition i true;

// else to specify a block of code to be execute, if the same condition is false

// else if to specify a new condition to test, if the first condition is false

// switch to specify many alternative blocks of code to be executed

//! syntax

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}

var name = "Rogers";

if (name === "Rogers") {
  console.log("True");
} else {
  console.log("False");
}

//# Example 2

if (name === "Ankit") {
  console.log("True");
} else if (name == "rogers") {
  console.log("hi");
} else {
  console.log("False");
}

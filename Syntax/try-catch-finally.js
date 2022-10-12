//: try-catch-finally Statement In Javascript

/*
//* The try-catch statement allow you to catch exception and handle them gracefull.

//* Sometimes, you want to execute a block whether exceptions occur or not

//* In this case, you can use the try-catch-finally statement with the following syntax
 */

try {
  // try to run this code
} catch (error) {
  // code to handle exceptions
} finally {
  // Always run this code block regardless of error or not
  //* this block is optional
}

const numerator = 100,
  denominator = "a";

try {
  console.log(nummerator / denominator); // NaN
  console.log(a);
} catch (error) {
  console.log("An error caught");
  console.log("Error message" + error);
} finally {
  console.log("Finally will execute every time");
}

/*
An error caught
Error messageReferenceError: nummerator is not defined
Finally will execute every time
*/

/*
=> Use the finally clause in the try-catch-finally statement to execute a block whether exceptions occur or not.

==> The try-catch-finally statement ignores the return statement in the try and catch blocks because the finally block always executes.
 */

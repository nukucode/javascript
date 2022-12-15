//: Grammar

/* => Always use // for comments, even multi-line ones to avoid having to escape /* characters.


* Numbers
=> There is a single, 64-bit floating point number type.
=> NaN (Not-a-Number) is not equal to any value (including itself) and is essentially an illegal number value, but typeOf(NaN) === number is true
=> Use isNaN(number) to check for NaNs


//* Strings
=> 16-bit character set and don't have character types.
=> Backslashes (\) are used for escaping characters that could cause problems in strings.
=> Strings are immutable

Single quotes are often used to define a String in JavaScript, but if a person's name has an apostrophe (and the developer does not know the difference between an apostrophe and single quote) it is useful to "escape" the apostrophe character:

*/

var name = "Patrick O'Brian"; // using a backslash in front of the apostrophe
console.log("name:", name); // name: Patrick O'Brian

/* 

* Statements
=> Inside a function, the var statement creates variables local to that function.

=> switch, while, for and do statements can have an optional label which can be used with break and continue to provide more precise control over exactly which statement to break or continue. Format: labelname: statement and then continue labelname;

=> ES2015 presents two new keywords for declaring variables, let and const. Whereas the var keyword is function scoped (the variables are local to the function), let and const are both block scoped, which means they are local to any statement with {}.

=> falsy value - false, null, undefined, Empty String, The Number 0, The number NaN.

=> All other values are truthy including all objects & the string "false"

=> If no matches are found in case statements, the optional default statement is executed, otherwise the matching case statement is carried out

=> When using a for in loop, usually a good idea to use hasOwnProperty(variable) to make sure the property belongs to the object you want and is not instead an inherited property from the prototype chain:
*/

for (myvariable in object) {
  if (object.hasOwnProperty(myvariable)) {
    //statements to be executed
  }
}

/* 

=> A do while statement is always executed at least once as the while condition is only checked after the first iteration of the loop.

=> catch clause in a try statement must create a new variable that will catch the exception object.

=> Scope of throw statement is the try block it's in, or the try of the function it's in.

=> If there is no return statement, return===undefined.

=> break exits the statement and continue forces a new iteration of the loop, both with the optional label mentioned above


//* Expressions

=> For expression ? expression2 : expression3, if expression is truthy, execute expresion2; if it's falsy, execute expression3

=> Invocation is (expression1, expression2, etc)

=> refinement is either .name or [expression] as used in an array


//* Literal
=> Names or strings used for specifying new object or array 
=> Properties of the object are expression and must be known at compile time.


//* Function
=> A function literal define a function value
*/

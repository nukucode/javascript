//: Functions

//* Function Objects
/* => Functions are objects linked to function.prototype (which is linked to Object.prototype).

=> As well as usual object behaviour, they can be invoked.
*/

//* Function Literal

/* A function literal has 4 parts
=> The (reserved) word function itself.

=> An optional name (un-namedfunction are considered anonymouse functions)

=> Comma-seperated parameters of the function, in parentheses - (parameters).

=> Set of statements in curly brackets to be carried out when the function is invoked - {statements} */

//Format of a function
function name(parameterA, parameterB) {
  statements;
}

//* Arguments

/* => Another default parameter of functions is the arguments array which contains all the arguments that were supplied when the function was invoked

=> This means you don't have to know the exact number of arguments when you build a function because you can loop through all the arguments provided at invocation with the use of the default arguments array 
*/

//inside the function
for (i = 0; i < arguments.length; i++) {
	dosomething;  //e.g. sum +=arguments[i]
}

//* Return

/* 

=> When a function gets to a return statement, it returns immediately without carrying out the remaining statements in the function.

=> A function always returns a value or if unspecified, it returns undefined

=> "If the function was invoked with the new prefix (used when creating a new object so it must return an object) and the return value is not an object, then this (the new object) is returned instead."

*/


//* Execptions

/* => A throw statement interrupts the execution of the code is used to handle expected exceptions like an incorrect type of argument (e.g. a string where a number is expected) 

=> Each throw statement should have an exception object with a name holding the type of exception and a message with an explanation of it + any other properties you like
*/

//Thinking through what exceptions could happen in an add function, the main function contains the throw statement with the exception object


var add = function (a,b) {
	if (typeof a !== 'number' || typeof b !== 'number'){
		throw {
			name: 'TypeError';
			message: 'The add function requires numbers';
		}
	}
	return a + b;
}


//**  */ Memoization
/* => Storing the results of previous operations in objects (such as arrays) allows them to be reused without having to keep recalculating the value - this optimization is called memoization

=> Adding an object to store the results memoizes the function

=> Particularly useful when a function is recursive and uses the results of its previous iteration in the current iteration

=> A memoizer function can be created to help memoize future functions: */

var memoizer = function (memo, fundamental) {
  var shell = function (n) {
    var result = memo[n];
    if (typeof result !== "number") {
      result = fundamental(shell, n);
      memo[n] = result;
    }
    return result;
  };
  return shell;
};

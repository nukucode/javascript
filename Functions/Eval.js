//: Eval: run a code string

/* Thr built-in "eval" function allows to execute a string of code */

//? let result = eval(code);

let code = 'console.log("Hello")';
eval(code); // => Hello

/* A string of code may be long, contain line breaks, function declarations, variables and so on */

let value = eval("10+20");
console.log(value); // 30

//? The eval'ed code is executed in the current lexical environment, so it can see outer variables

let a = 1;

function f() {
  let a = 2;

  eval("console.log(a)");
}

f(); // => 2

// It can change outer variables as well

let x = 5;
eval(" x= 10");
console.log(x); // 10, value modified

// In strict mode, eval has its own lexical environment. So functions and variables, declared inside eval, are not visible outside:

//? reminder: "use strict" is enabled in runnable examples by default

eval("let x = 5; function f() {}");

console.log(typeof x); // undefined (no such variable)
// function f is also not visible

// Without use strict, eval doesn't have its own lexical environment, so we would see x and f outside

//* Using "eval"

/* In modern programming "eval" is used very sparingly. It;s ofter said that "eval is evil"


=> The reason is simple: long, long time ago Javascript was a much weaker language, many things could only be done with eval. But that time passed a decade ago.

=> Right now, there's almost no reason to use "eval". If someone is using it, there's a good chance they can replace it with a modern language construct or a Javascript module.*/

//? If eval'ed code doesn't use outer variables, please call eval as window.eval(...)

let z = 5;

{
  let z = 10;
  window.eval("console.log(z)"); // 5 (global variable)
}

//? If eval'ed code needs local variables, change eval to new function and pass them as arguments

let f = new Function("a", "alert(a)");

f(5); // 5

//* Eval Calculator

let expr = prompt("Type an arithmetic expression?", "2*3+2-1");

console.log(eval(expr));

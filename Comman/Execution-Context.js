//: JavaScript Execution Context

/* All javascript code needs to be hosted and run in some kind of environment. In most case, that environment would be a web browser. */

//* Parser

/* A parser or syntax parser is a program that reads your code line-by-line. It understand how the code fits the syntax defined by the programing Language and what if (the code) is expected to do. */

//* JavaScript Engine

/* A javascript engine is simply a computer program that recives javascript source code and compiles it to the binary instruction (machine code) that a cpu can understand. Javascript engines are typically developed by web browser vendors, and each major browser has one. */

//* Function Declarations

/* These are function that are assigned a name */

//* Function Expressions

/* These are anonymouse functions, that is function without a function name like "js function () {}". They are usually used in statement, like assigning a function to a variable */

let someValue = function () {
  // statements
};

//* How Javascript Code Gets Executed

/* For does who don't know, the browser doesn't natively understand the high-level Javascript code that we write in our applications. It needs to be converted into a formate that the browser and our computers can understand - machine code.

While reading through HTML, if the browser encounters Javascript code to run via a <script> tag or an attribute that contain Javascript code like onClick, it sends it to its Javascript engine.

The browser's JavaScript engine then creates a special environment to handle the transformation and executioin of this Javascript code. This environment is known as the Execution Context.

During the Execution Context run-time, the specific code gets parsed by a parser, the variable and functiion are stored in memory, executable byte-code gets generated, and the code gets executed.


=> There are two kind of Execution Context In Javascript:

1.Global Execution Context (GEC)
2.Function Execution Context (FEC)
*/

//* Global Execution Context (GEC)

/* Whenever the JavaScript engine recives a script file, it first creates a defalt Execution Context Known as the Global Execution Context (GEC)


=> The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.

? For Every JavaScript file, there can only be one GEC
*/

//* Function Execution Context (FEC)

/* Whenever a function is called, the Javascript engine create a different type of Execution Context Known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function

? Since every function call gets it own FEC, there can be more than one FEC in the run-time of a script
*/

//* How are Execution Context Created?

/* The Creation of an Execution Context (GEC or FEC) happens in two phases:

=> Creation Phase
=> Execution Phase*/

//* Creation Phase

/* In creation phase, the Execution Context is first associated with an Execution Context Object (ECO). The Execution Context Object stores a lot of Important data which the code in the Execution Context uses during its run-time.

The creation phase occurs in 3 stages, during whihc the properties of the Execution Context Object are defined and Set. 

=> Creation of the Variable Object (VO)
=> Creation of the Scope Chain
=> Setting the value of the this keyword */

//* Creation Phase: Creation of The Variable Object (VO)

/* The variable Object (Vo) is an object-like container created within an Execution Context. It stores the variable and function declaration defined within that Execution Context.


In the GEC, for each variable declared with the var keyword, aa property is added to VO that points to that variable and is set to "undefined"

ALSO, for every function declaration, a property is added to the Vo, pointing to that function, and that property is stored in memory.This means that all the function decalarations will be stored and made accessible inside the VO, even before the code starts running.


The FEC, on the other hand, does not construct a VO. Rather, it generates an array-like object called the "argument" object, which includes all of the argument supplied to the function.

=> This process of storing variables and function declaration in memory prior to the execution of the code is known as Hoisting.*/

//* Hoisting In Javascript

/* Function and variable declaration are hoisted in JavaScript. This means that they are stored in memory of the current Execution Context's VO and made available within the Execution Context even before the execution of the code begins.  */

//* Function Hoisting

/* In most scenarios when building an application, developers can choose to define functions at the top of script, and only later call them down the code */

function getAge(yearOfBirth) {
  console.log(new Date().getFullYear() - yearOfBirth);
}

getAge(2004);
// 18

/* However, due to hoisting, the opposite will still work. Where we can call function first then define them later down the script  */

getName();

function getName() {
  return "Ankit";
}

//* Variable Hoisting

/* Variable initialized with the var keyword are stored in the memory of the current Execution Context's VO as a property, and initialized with value "Undefined". This means, unlike functions, trying to access the value of the variable before it is defined will result in undefined. */

console.log(greeting);

var greeting = "Hi, I'm Ankit";
// undefined

//* Ground Rules of Hoisting

/* Hoisting only works for function declarations, not expressions. */

getPerson();
var getPerson = function () {
  return "Ankit";
};

/* This code execution breaks, because with function expression getPerson will be hoisted as a variable not as a function, And with variable hoisting, its value will be set to undefined. That's why we get the error.


=> Also, variable hoisting does not work for variables initialized with the let or const keyword. Trying to access a variable ahead of decalaration and use the let and const keywords to declare it later will result in a ReferenceError. */

//* Creation Phase:Creation of the Scope Chain

/* Scope In JavaScript is a mechanism that determines how accessible a piece of code is to other parts of the codebase.

Each function Execution Context creates its scope:the space/enviroment where the variable and functions it defined can be accessed via a process called Scoping.

=> When a function is defined in another function, the inner function has access to the code define in that of the outer function, and that of its parents. This behavior is called lexical scoping.

This concept of scope brings up an associate phenomenon in JavaScript called closures. These are when inner functions that always get access to the code associated with the outer functions, even after the execution of the outer functions is complete.

=> This idea of the JavaScript engine traversing up the scopes of the execution contexts that a function is define in in order to resolve variables and function invoked in them is called the scope chain.

!Only when the JS engine can't resolve a variable within the scope chain does it stop executing and throw an error

However, this doesn't work backward, That is, the golbal scope will never have access to the inner function's variable unless they are returned from the function

The Scope chain works as a one-way glass. You can see the outside, but people from the outside cannont see you
*/

//* Creation Phase: Setting The Value of The "this" keyword

/* The next and final stage after scoping in the creation phase of an Execution Context is setting the value of "this" keyword.

=> The JavaScript "this" keyword refers to the scope where an Execution Context belongs.

=> Once the scope chain is created, the value of "this" is intialized by the JS engine 
*/

//* "this" in The Global Context

/* IN the GEC (outside of any function and object), this refers to the global object - which is the window object.

=> Thus, function declarations and variables initialized with the var keyword get assigned as properties and methods to the global object - window object
*/

var occupation = "Developer";
function addOne(x) {
  console.log(x + 1);
}

//? IS EXACTLY THE SAME AS:

window.occupation = "Developer";
window.addOne = (x) => {
  console.log(x + 1);
};

/* Functions and Variables in the GEC get attached as methods and properties to the window object. That's why the snippet below will return true. */

var lastName = "Yadav";
console.log(lastName === this.lastName); // true

//* "this" in Functions

/* In this case of the FEC, it doesn't create the this object. Rather, it get's access to that of the enviroment it is defined in.

=> Here that'll be the window object, as the function is defined in the GEC*/

var msg = "I will rule the world";

function printMessage() {
  console.log(this.msg);
}

printMessage(); // logs "I will rule the world" to the console

/* IN objects, ths this keyword doesn't point to the GEC, but to the object itself. Referencing this within an object will be the same as: */

var name = "Ankit";
const user = {
  name: "Ram",
  printName() {
    console.log(this.name);
  },
};

user.printName(); // Ram

//* The Execution Phase

/* This is the stage where the actual code execution begins

=> Up until this point, the VO contained variables with the values of undefined. If the code is run at this point it is bound to return errors, as we can't work with undefined values.

At this stage, the JavaScript engine reads the code in the current Execution Context once more, then updates the VO with the actual values of these variables. Then the code is parsed by a parser, gets transpired to executalble byte code, and finally gets executed. */

//* JavaScript Execution Stack

/* The Execution Stack, also known as the Call Stack, keeps track of all the execution contexts created during the life cycle of a script.

=> JavaScript is single-threaded language, which means that it is capable of only executing a single task at a time. Thus, when other actions, functions, and events occur, an Execution Context is created for each of these events. Due to the single-threaded nature of JavaScript, a stack of piled-up execution contexts to be executd is created, known as the Execution Stack.

When script load in the browser, the Global context is created as the default context where the JS engine starts executing code and is placed at the bottom of the execution stack.

The Execution Context at the top of the Execution stack becomes the active Execution Context, and will always get executed first by the JS engine.

=> As soon as the execution of all the code within the active Execution Context is done, the JS engine pops out that particular function's Execution Context of the exectuion stack, moves towards the next below it, and so on.*/

var name = "Ankit";

function first() {
  var a = "Hi";
  Second();
  console.log(`${a} ${name}`);
}

function Second() {
  var b = "Hey!";
  Third();
  console.log(`${b} ${name}`);
}

function Third() {
  var c = "Hello!";
  console.log(`${c} ${name}`);
}

/* First, the script is loaded into the JS engine.

=> After it, the JS engine creates the GEC and place it at the base of the execution stack.

The name variable is defined outside of any function, so it is in the GEC and stored in it's VO.

=> The Same process occurs for the First, Second, and Third functions.

-> When the JS engine encounters the first function call, a new FEC is created for it. This new context is placed on top of the current context forming the so-called Execution Stack.


=> LEARN CALL STACK as the SAME

And lastly, when the execution of the entrie code gets completed, the JS engine removes the GEC from the current stack.*/

//* Global Execution Context vs Function Execution Context IN JAVASCRIPT

/* 

? Global Execution Context

=> Create a Global Variable object that stores function and variable declarations.

=> Create the "this" object stores all the variables and function in the Global scope as methods and properties

=> Can't access the code of the function context defined in it

=> Sets up memory space for variables and functions defined globally


? Function Execution Context

=> Doesn't create a Global Variable object. Rather, it creates an argument object that stores all the arguments passed to the function

=> Doesn't create the "this" object, but has access to that of the environment in which it is defined. Usually the `Window` object

=> Due to scoping, has access to the code (variables and functions) in the context it is defined and that of its parents

=> Sets up memory space only for variables and functions defined within the function.

*/

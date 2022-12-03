//: 7.1 => Use named function expression instead of function declarations. eslint: func-style

/* Why? Function declarations are hoisted, which means that it’s easy - too easy - to reference the function before it is defined in the file. This harms readability and maintainability. If you find that a function’s definition is large or complex enough that it is interfering with understanding the rest of the file, then perhaps it’s time to extract it to its own module! Don’t forget to explicitly name the expression, regardless of whether or not the name is inferred from the containing variable (which is often the case in modern browsers or when using compilers such as Babel). This eliminates any assumptions made about the Error’s call stack. */

// bad
function foo() {
  //...
}

// bad
const foo = function () {
  //...
};

// good
const short = function longUniqueMoreDesriptiveLexicalFoo() {
  //...
};

//: 7.2 => Wrap immediately invoked function expression in parentheses. eslint: wrap-iife

/* Why? An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in  parens, cleanly expression this. Note that in a world with modules everywhere, you almost never need an IIFE. */

// immediately-invoked function expression (IIFE)
(function () {
  console.log("Welcome to the Internet. Please follow me.");
})();

//: 7.3 => /* Never declare a function is a not-function block (if, while, etc). Assign the function to a variable instead. Browsers will allow you to do it, But they all interpret it differently, which is bad news bears. eslint: no-loop-func */

//: 7.4 Note: ECMA-262 defines a block as a list of statements. A function declaration is not a statement.

// bad
if (user) {
  function test() {
    console.log("Nope.");
  }
}

// good
let test;
if (user) {
  test = () => {
    console.log("Yup.");
  };
}

//: 7.5 => Never name a parameter arguments. This will take precedence over the arguments object that is given to every function scope.

// bad
function foo(name, options, arguments) {
  //....
}

// good
function foo(name, options, args) {
  //...
}

//: 7.6 => Never use arguments, opt to use rest syntax ... instead. eslint: perfer-rest-params

/* Why? ... explicit about which arguments you want pulled. Plus, rest arguements are a real array, and not merely Array-like like arguments */

// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join("");
}

// good
function concatenateAll2(...args) {
  return args.join("");
}

//: 7.7 => Use default parameter syntax rather than mutating function arguments.

// really bad
function handleThings(opts) {
  opts = opts || {};
  //...
}

// bad
function handleThings2(opts) {
  if (opts === void 0) {
    opts = {};
  }

  //...
}

// good
function handleThings3(opts = {}) {
  //...
}

//: 7.8 => Avoid side effects with default parameters.

let a = 1;
// bad
function count(b = a++) {
  console.log(b);
}

count(); // 1
count(); // 2
count(); // 3
count(3); // 3

//: 7.9 => Always put default parameters last. eslint: default-param-last

// bad
function name(opts = {}, name) {
  //...
}

// good
function name2(name, opts = {}) {
  //...
}

//: 7.10 => Never use the function constructor to create a new function. eslint: no-new-func

/* Why? Creating a function in this way evaluates a string similarly to eval(), Which opens vulnerabilities. */

// bad
const add = new Function("a", "b", "return a + b");

// still bad
const subtract = Function("a", "b", "return a - b");

//: 7.11 => Spacing in a function signature. eslint: space-before-function=paren, space-before-blocks

/* Why? Consistency is good, and you shouldn't have to add or remove a space when adding or removing a name */

// bad
const f = function () {};
const g = function () {};
const h = function () {};

// good
const x = function () {};
const y = function a() {};

//: 7.12 => Never mutate parameters. eslint: no-params-reassign

/* Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller. */

// BAD
function f1(obj) {
  obj.key = 1;
}

// GOOD
function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, "key") ? obj.key : 1;
}

//: 7.13 => Never reassign parameters. eslint: no-para,-reassign

/* Why? Reassigning parameters can lead to unexpected behavior, especially when accessing the arguments object. It can also cause optimization issues, especially in v8 */

// bad
function f1(a) {
  a = 1;
  //...
}

function f2(a) {
  if (!a) {
    a = 1;
  }
  // ...
}

// good
function f3(a) {
  const b = a || 1;
  //...
}

function f4(a = 5) {
  //...
}

//: 7.14 => Prefer the use of the spread syntax ... to call variadic functions. eslint: prefer-spread

/* Why? It's cleaner, you don't need to supply a context, and you can not easily compose new with apply. */

// bad
const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// good
const z = [1, 2, 3, 4, 5];
console.log(...z);

// bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]))();

// good
new Date(...[2016, 8, 5]);

//: 7.15 => /* Functions with multiline signatures, or invocations, should be indented just like every other multiline list in the guide: with each item on a line by itself, with a trailing comma on last item. eslint: function-paren-newline */

// bad
function foo(bar, baz, quux) {
  // ...
}

// good
function foo(bar, baz, quux) {
  // ...
}

// bad
console.log(foo, bar, baz);

// good
console.log(foo, bar, baz);

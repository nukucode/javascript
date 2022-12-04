//: 15.1 => Use === and !== and == and !=. eslint: "eqeqeq"

//: 15.2 => Conditional Statement such as the if statement evaluate their expression using coercion with the "ToBoolean" abstract method and always follow these simple rules

/* => Object evaluate to true
   => Undefined evaluate to false
   => Null evaluate to false
   => Booleans evaluate to the value of the boolean
   => Numbers evaluate to false if +0, -0, or NaN, otherwise true
   => Strings evaluate to false if an empty string "", otherwise true */

if ([0] && []) {
  // true
  // an array (even an empty one) is an object, objects will evaluate to true
}

//: 15.3 => Use shorthand for booleans, but explicit comparisons for strings and numbers.

// bad
if (isValid === true) {
  //...
}

// good
if (isValid) {
  // ...
}

// bad
if (name) {
  //...
}

// good
if (name !== "") {
  //...
}

// bad
if (collection.length) {
  //...
}

// good
if (collection.length > 0) {
  //...
}

//: 15.4 => Use braces to create blocks in "case" and default clauses that contain lexical declarations (e.g. let, const, function, and class). eslint: "no-case-declarations"

/* Why? Lexical declarations are visible in the entire "switch" block but only get initialized when assigned, which only happens when its "case" is reached. This causes problems when multiple "case" clauses attempt to define the same thing. */

// bad
switch (foo) {
  case 1:
    let x = 1;
    break;
  case 2:
    const y = 2;
    break;
  case 3:
    function f() {
      // ...
    }
    break;
  default:
    class C {}
}

// good
switch (foo) {
  case 1: {
    let x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  case 3: {
    function f() {
      // ...
    }
    break;
  }
  case 4:
    bar();
    break;
  default: {
    class C {}
  }
}

//: 15.5 => Ternaries should not be nested and generally be single line expression.

// bad
const foo = maybe1 > maybe2 ? "bar" : value1 > value2 ? "baz" : null;

// split into 2 separated ternary expressions
const maybeNull = value1 > value2 ? "baz" : null;

// better
const foo2 = maybe1 > maybe2 ? "bar" : maybeNull;

// best
const foo3 = maybe1 > maybe2 ? "bar" : maybeNull;

//: 15.6 => Avoid unneeded ternary statement.

// bad
const foo4 = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;
const quux = a != null ? a : b;

// good
const foo5 = a || b;
const bar2 = !!c;
const baz2 = !c;
const quux2 = a ?? b;

//: 15.7 => /* When mixing operators, enclose them in parentheses. The only exception is the standard arithmetic operators: +, -, and ** since their precedence is broadly understood. We recommend enclosing / and * in parentheses becuase their precedence can be ambiguous when they are mixied. eslint: "no-mixed-operators" */

/* Why? This improves readability and clarifies the developer's intention */

// bad
const fooo = a && b < 0 || c > 0 || d + 1 === 0;

// bad
const ba = a ** b - 5 % d;

// bad
// one may be confused into thinking (a || b) && c
if (a || b && c) {
  return d;
}

// bad
const barr = a + b / c * d;

// good
const fooo2 = (a && b < 0) || c > 0 || (d + 1 === 0);

// good
const ba2 = a ** b - (5 % d);

// good
if (a || (b && c)) {
  return d;
}

// good
const barr2 = a + (b / c) * d;

//: Function object, NFE

//* The "name" property

/* Function objects contain some useable properties. For Instance, a function's name is accessible as the "name" property: */

function SayHi() {
  console.log("Hi!");
}

console.log(SayHi.name); // SayHi

// the name-assigning logic is smart.

let Hi = function () {
  console.log("Hi!");
};

console.log(Hi.name); // Hi

// It also works if the assignment is done via a default values:

function Func(fun = function () {}) {
  console.log(fun.name); // fun
}

Func();

/* In the specification, this feature is called a "contextual name". If the function does not provide one, then in an assignment it is figured out from the context. */

let user = {
  SayHi() {
    // do something
  },

  SayBye() {
    // do something
  },
};

console.log(user.SayHi.name); // SayHi
console.log(user.SayBye.name); // SayBye

// There are cases when there's no way to figure out the right name. In that case, the name property is empty

// ? function created inside array
let arr = [function () {}];

console.log(arr[0].name); // "empty string"
// the engine has no way to set up the right name, so there is none

//* The "length" property

/* There is another-built-in property "length" that returns the number of function parameters */

function f1(a) {}
function f2(a, b) {}
function f3(a, b, c) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(f3.length); // 3

//! Here we can see that rest parameters are not counted.

//? The "length" property is sometime used for introspection in function that operate on other functions.

function ask(question, ...handlers) {
  let isYes = confirm(question);

  for (let handler of handlers) {
    if (handler.length == 0) {
      if (isYest) handler();
    } else {
      handler(isYest);
    }
  }
}

ask(
  "Question?",
  () => console.log("You said Yes"),
  (result) => console.log(result)
);

//* Custom Properties

function name() {
  console.log("Hi");

  // let's count how many times we run
  name.counter++;
}
name.counter = 0; // intial value
name();
name();

console.log(`Called ${name.counter} times`); // called 2 times

//? A property is not a variable

/* A property assigned to a function like name.counter = 0 does not define a local variable couter inside it. In other words, a proerty counter and a variable let counter are two unrelated things. */

// Function properties can replace closures sometimes.

function makeCounter() {
  // instead of:
  // let count = 0;

  function counter() {
    return counter.count++;
  }
  counter.count = 0;
  return counter;
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

/* The main difference is that if the value of count lives in an outer variable, then external code is unable to access it. Only nested function may modify it. And if it's bound to a function, then such a thing is possible */

function makeCounter2() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  return counter;
}

let counter2 = makeCounter2();
counter.count = 10;
console.log(counter()); // => 10

//* Named Function Expression (NFE)
/* Named function expression or NFE is a term for function expressions that a name */

// For instance, let's take an ordinary function expression:

let Hello = function (who) {
  console.log(`Hello ${wow}`);
};

// and add a name to it  //? => because still create as a part of an assignment expression

let Greeting = function Hello(who) {
  console.log(`Hello ${who}`);
};

// -> It allow the function to reference itself iternally.
// -> It is not visible outside of the function

let name = function func(name) {
  if (name) {
    console.log("Hello ${name}");
  } else {
    func("Ankit");
  }
};

name(); // Hello Ankit

// BUT THIS WON'T WORK
func(); //  ERROR, func is not defined (not visiable outside of the function)

// Examples ==> ?

//? Set and decrease for counter

function makeCounterr() {
  let count = 0;

  function counter() {
    return count++;
  }
  counter.set = (value) => (count = value);
  counter.decrease = () => count--;

  return counter;
}


//? Sum with an arbitrary amount of brackets

function sum(a) {
    let currentSum = 0;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    }

    return f;
}
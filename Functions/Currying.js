//: Currying

/* Currying is an advanced technique of working with function. It's used not only in Javascript, but in other language as well 

=> Currying is a transformation of function that translates a function from callable as f(a,b,c) into callable as f(a)(b)(c).

-> Currying doesn't call a function. It just transforms it.*/

function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

const curryFunc = curry((a, b) => {
  return a + b;
});

console.log(curryFunc(10)(20));

/* More advanced implementations of currying. Such as _curry from lodash library, return a wrapper that allow a function to be called both normally and partially */

function sum(a, b) {
  return a + b;
}

let curriedSum = _.curry(sum); // using _.curry lodash library

console.log(curriedSum(10, 20)); // 3, still callable normally
console.log(curriedSum(10)(20)); // 30, called partially

//* Currying? What for?

function log(date, importance, message) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
  );
}

//? Let's curry it!

log = _.curry(log);

// After that log works normally
log(new Date(), "info", "This is a log message");

//... But also works in the curried form:

log(new Date())("DEBUG")("some message");

//* Advanced curry implementation

/* In case you'd like in to the details, here's the "advanced" curry implementation for multiple-argument function that we could use above. */

function curry2(func) {
  return function (...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}


function sum(a, b, c) {
  return a + b + c;
}

let curriedSum2 = curry2(sum);

alert( curriedSum2(1, 2, 3) ); // 6, still callable normally
alert( curriedSum2(1)(2,3) ); // 6, currying of 1st arg
alert( curriedSum2(1)(2)(3) ); // 6, full currying
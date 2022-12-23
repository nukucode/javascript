//: Desing a Calculator interface for 2 number inputs which can perform sum, difference, product and dividend whenever invoked on the same interface

function calculator(num1 = 10, num2 = 20) {
  function sum() {
    return num1 + num2;
  }

  function difference() {
    return num1 - num2;
  }

  function product() {
    return num1 * num2;
  }

  function dividend() {
    return Math.floor(num1 / num2);
  }

  return { sum, difference, product, dividend };
}

const cal = calculator(12, 5);
console.log(cal.sum()); // => 17
console.log(cal.difference()); // => 7
console.log(cal.product()); // => 60
console.log(cal.dividend()); // => 2

//: Desing a private counter function which exposes increment and retrive functionalities

function privateCounter() {
  let counter = 0;

  return {
    increment: (val = 1) => {
      counter += val;
    },

    retrieve: () => {
      return counter;
    },
  };
}

const counter = privateCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.retrieve()); // => 3
console.log(counter.increment(5));
console.log(counter.increment());
console.log(counter.retrieve()); // => 9

//: Write a polyfill for bind function

if (!Function.prototype.bind) {
  Function.prototype.bind = function (context) {
    var fn = this;
    var fnArgs = Array.prototype.slice.call(arguments, 1);

    return function () {
      var allArgs = fnArgs.concat(Array.prototype.slice.call(arguments));
      fn.apply(context, allArgs);
    };
  };
}

//: Write a function which helps to achive multiple(A)(b) and return product of a and b

//? or Currying function

function product(a) {
  return function (b) {
    return a * b;
  };
}

console.log("Currying =>", product(2)(3));

//: Create a function which takes another function as an arguments and makes it eligibal for currying or partial application

function curryFunc(fn) {
  return function curry(...args) {
    if (fn.lenght <= args.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curry.apply(this, args2.concat(args2));
      };
    }
  };
}

let sum = curryFunc(function (a, b, c, d) {
  return a + b + c + d;
});

console.log(sum(1)(2)(3)(4));
console.log(sum(1, 2)(3, 4));

//: Design a function which helps to do debouncing
//? The "debounc" function forces a function to wait a certain amount of time before running the again

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    let context = this;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

//: Desgin a function which helps to do throttling

//? The "throttling" function forces a function to  run once in an amount of time for one or multiple calls.

function throttling(fn, delay) {
  let timer;
  let lastArgs;

  return function (...args) {
    let lastArgs = args;
    let context = this;

    if (timer) return;

    timer = setTimeout(() => {
      fn.apply(context, args);
      clearTimeout(timer);
    }, delay);
  };
}

//: Design an interface which limits the number of function calls by executing the function once for a given count of calls

function sampler(fn, count) {
  let counter = 0;

  return function (...args) {
    let context = this,
      lastArgs = args;

    if (counter++ !== count) return;

    fn.apply(context, lastArgs);
    counter = 0;
  };
}

//: Write a singleTon function to create an object only once

/* => Singleton is a design pattern which restricts the creation of only one object from a given interface.

=> When requested multiple times, same object returned*/

var Singleton = function () {
  var instance;

  function createInstance() {
    var object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    },
  };
};

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

//: Design a function with toggle functionality for given list of input where toogle accepts list of value to be toggled upon

function toggle(...values) {
  let state = -1;
  const length = values.length;
  return function () {
    state = (state + 1) % length;
    return values[state];
  };
}

const onOff = toggle("on", "off");
console.log(onOff());


//? Toggle functionality can be obtained by returning the next value cyclically on each call to the function
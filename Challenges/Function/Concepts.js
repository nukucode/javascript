//: Write a function which return another function and execute it after calling

/* A higher order function is a function that accept a function as an argument or return a function as a value or both. */
function higherOrderFunction() {
  function displayHello() {
    console.log("Hello");
  }

  return displayHello;
}

var func = higherOrderFunction();
func(); // Hello

//: Write a function which executes another function received as an argument

function callbackExecutor(callback) {
  if (typeof callback === "function") {
    callback();
  }
}

function callbackFunc() {
  console.log("I am Callback Function");
}

callbackExecutor(callbackFunc); // I am Callback Function

//: Create a function having no parameter declared and print all the arguments passed to it

function func() {
  console.log("arguments", arguments);
}

func("==>", 1, "Hello", true);

function func2() {
  for (let value of arguments) {
    console.log(value);
  }
}

func2("===>", 1, "Hello", true);

//: Write a function which executes only if the number of arguments match the number of parameters the function expeting.

function func3(a, b, c) {
  if (func.length === arguments.length) {
    console.log("Number of arguments passed match the expected arguments");
  } else {
    throw new Error(
      "Number of arguments passed do not match the expected arguments"
    );
  }
}

func3(1, 2, 3);

//: Desing a function which can recive a variable number of arguments in parameters and print them

function varArgsFunc(...params) {
  params.forEach((v, i) => {
    console.log(`${i} : ${value}`);
  });
}

varArgsFunc("Hello", "I", "A", "Super", "Hero");

//: Show the most common ways of creating functions in Javascript

// regular function as a function statement
function name() {
  // do something
}

// regular function with function expression
const funExp = function (param) {
  // do something
};

// Arrow function as a function expression
const arrowFunctionName = () => {
  // do something
};

//: Code the different forms of arrow functions for varying number of parameters

const noArgsFunc = () => {
  return "No args passed";
};

const singleArgFunc = (arg1) => "Argument is " + arg1;

const singleArgFuncc = (arg1) => {
  console.log("Argument is " + arg1);
  return arg1;
};

const twoArgsFunc = (arg1, arg2) => {
  return arg1 + arg2;
};

const threeArgsFunc = (arg1, arg2, arg3) => {
  console.log("Sum is " + (arg1 + arg2 + arg3));
  return true;
};

//: Write a program where hoisting can be visualized

num1 = 10;
printHello();

var num1;

function printHello() {
  console.log("Hello");
}

function noHoistedFun() {
  console.log("Hello");
}

//: Code an immediately invoked function expression (IIFE) and show the different ways of executing it.

(function IIFE() {
  console.log("I an Immediately invked function");
})();

+(function IFFE() {
  console.log("I Am an Immediately invked function");
})();

//: Create an IIFE receives arguments and executes

(function IFFE(param1, param2) {
  console.log("I am an Immediately Invoked Function");
  console.log("Parameter 1:" + param1);
  console.log("Parameter 2:" + typeof param2);
  console.log("Parameter 2 Output:" + param2());
})("Hello", function () {
  console.log("Hello I am a function");
});

//: Show the usage of IIFE to set a value of a variable

let randomNumber = (function () {
  return Math.floor(Math.random() * 100);
})();

//: Write a function which can return multiple values from a function

function multipleValueReturnFunc() {
  const a = 5,
    b = 10;
  return [a, b];
}

const [x, y] = multipleValueReturnFunc;

// => 2
function multipleValueReturnFunc2() {
  const a = "Java",
    b = "Script";
  return {
    a,
    b,
  };
}

const { a: c, b: d } = multipleValueReturnFunc2();
const { e, f } = multipleValueReturnFunc2();

// => 3

function* multipleValueReturnFunc3() {
  const a = 5,
    b = 10;
  yield a;
  yield b;
}

const iterator = multipleValueReturnFunc3();

const u = iterator.next().value;
const v = iterator.next().value;

//: Write a function which can set default values to the parameters of function when an argument is not passed. Also show how to use exiting parameters to set the value of another parameter.

function defaultValueFunc(
  num = 10,
  num2 = 20,
  bool = false,
  sum = num + num2,
  string = "Hello"
) {
  console.log(num, string, bool, sum);
}

// driver code
defaultValueFunc(); //  10, 'Hello', false, 30
defaultValueFunc(4, 8); //  4, 'Hello', false, 12
defaultValueFunc(10, 4, true); //  10, 'Hello', true, 14
defaultValueFunc(5, 6, false, 11); //  5, 'Hello', false, 11
defaultValueFunc(undefined, undefined, false); //  10, 'Hello', false, 30

//: Show the usage of Call, apply, bind with practical example

function callExample(param1, param2) {
  console.log(this.value, param1, param2);
}

const obj = {
  name: "Ankit",
  age: 17,
};

callExample.call(obj, "Hello", "World");

// => 2

function applyExample(...params) {
  console.log(this.value, params);
}

const arr = [1, 2, 3, 4, 5];

applyExample.apply(obj, arr);

// => 3

function bindExample(param1, param2) {
  console.log(this.value, param1, param2);

  const newFunReturn = bindExample.bind(obj, "Hello", "World");
}

//: Show the usage of a function which can be used as a constructor

function Person(id) {
  this.id = id;
}

Person.prototype.setName = function (name) {
  this.name = name;
};

Person.prototype.getName = function () {
  return this.name;
};

const person = new Person(1e10);
person.setName("Ankit");
console.log(person.id, person.getName());

//: Show the procedure of creating an object using a factory function

//? Any function which is not a class or constructor that returns an object without a new keyword is known as a factory function

function factoryFunc(username, password, isActive = false, isAdmin = false) {
  if (typeof username !== "string" && typeof password !== "string")
    throw new Error("Invalid username or password");

  return {
    username,
    password,
    isActive,
    isAdmin,
    created: new Date(),
  };
}

const user = factoryFunc("admin", "password");

//: Achive prototypal inheritance using function to create objects in Javascript

function parent(name) {
  this.name = name;
}

parent.prototype.getName = function () {
  return this.name;
};

function child(name) {
  parent.call(this, name);
}

child.prototype = Object.create(parent.prototype);
child.prototype.getMyName = function () {
  return this.name;
};

// driver code
var fk = new child("FK");
console.log(fk.getName());
console.log(fk.getMyName());

var pk = new parent("PK");
console.log(pk.getName());

//: Write a code to show the differences between the techniques, currying and partial application

//? A function returning another function that might return another function, but every returned function must take only one parameter at a time is currying.

function mutiply(num1) {
  return function (num2) {
    return function (num3) {
      return function (num4) {
        return function (num5) {
          return function (num6) {
            return function (num7) {
              return function (num8) {
                return function (num9) {
                  return num1 * num2, num3, num4, num5, num6, num7, num8, num9;
                };
              };
            };
          };
        };
      };
    };
  };
}

//? A function returning another function that might return another function, but each returned function can take serveral parameters is partial application.

function mutiply2(num1) {
  return function (num2, num3) {
    return function (num4, num5) {
      return function (num6) {
        return function (num7, num8, num9) {
          return num1 * num2, num3, num4, num5, num6, num7, num8, num9;
        };
      };
    };
  };
}

//: Write a function to copy functions of an object to another object (mixin)

function mixin(sourceObj, targetObj) {
  // copy properties of soucre to target object
  return Object.assign(targetObj, sourceObj);
}

const obj1 = {
  task1() {
    console.log("Task1");
  },
};

const obj2 = {
  task2() {
    console.log("Task2");
  },
};

let mixinObj = mixin(obj1, {});
mixinObj = mixin(obj2, mixinObj);
mixinObj.task1();
mixinObj.task2();

// => 2

// mixin using property copy through loops (pre ES6)

function mixin2(sourceObj, targetObj) {
  for (var key in sourceObj) {
    // only copy if not already present
    if (!(key in targetObj)) {
      targetObj[key] = sourceObj[key];
    }
  }
  return targetObj;
}

// driver code
var objj1 = {
  task1() {
    console.log("Task1");
  },
};

var objj2 = {
  task2() {
    console.log("Task2");
  },
};

var mixinObj2 = mixin2(obj1, {});
mixinObj = mixin(obj2, mixinObj);
mixinObj2.task1(); // Task1
mixinObj2.task2(); // Task2

//: Show the uages Proxy for Function

/* 
? Note: Proxy object enables create a proxy for a function, which can intercept the function calls.

Proxy takes 1 st argument as an function and 2nd argument as a object with differenct function traps:
*/


const proxy = new Proxy(
  function () {
    console.log(arguments);
  },
  {
    apply(target, context, args) {
      console.log(
        "Proxy apply is invoked on target with context: " +
          context +
          ", arguments: " +
          args
      );
      return target.apply(context, args);
    },
  }
);

// driver code
proxy(1, 2, 3); // Proxy apply is invoked on target with context: undefined, arguments: 1,2,3
proxy.call({}, 1, 2); // Proxy apply is invoked on target with context: [object Object], arguments: 1,2,3
proxy.apply({}, [5, 10]); // Proxy apply is invoked on target with context: [object Object], arguments: 5,10

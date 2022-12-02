//# 65+ JAVASCRIPT CODE SNIPPETS WITH EXPLANATIONS

//: Avoid the "delete" keyword

const person = {
  name: "therogersak",
  age: "18",
};

delete person.age;
console.log(person); // { name: 'therogersak' }

// do this

const person2 = {
  name: "Chris",
  age: 40,
};

const { age, ...newPerson2 } = person2;
console.log(newPerson2); // { name: 'Chris' }

/* Don't use delete to remove a property from an object.
This mutates the original object and can lead to unpredictable behavior which becomes difficult to debug.

Instead, use the rest operator to create a new copy without given property*/

//: Using a Falsy Bouncer

const evenNumbersSquared = [1, 2, 3, 4, 5, 6]
  .map((n) => {
    if (n % 2 !== 0) {
      return null;
    }

    return n * n;
  })
  .filter(Boolean);

console.log(evenNumbersSquared); // [ 4, 16, 36 ]

/* When passing the "Boolean" constructor directly to Array.filter as the first argument, it serves as a falsy bouncer.

This will filer all values that qualifies as falsy;
That is false, null, undefined, 0, NaN, and ""(empty string)
*/

//: Object Destructuring on arrays

const lords = ["Shiva", "Vishnu", "Hanuman", "Ganesh"];

const { 0: s, 1: v, 2: h, 3: g } = lords;

console.log(s, v, h, g); // Shiva Vishnu Hanuman Ganesh

/* You can destructure elements from an array using the same syntax as when destructuring for objects.

The property name corresponds to the index of the element in the array.

It's a convenient way to pull out specific elements from  an array in  a single clean line of code.
*/

//: Skip elements with Array Destructuring

const number = [1, 2, 3, 4, 5];

const [, , ...newNum] = number;
console.log(newNum); // [3,4,5]

/* You can use an Empty 'placeholder' comma to skip elements when destructuring arrays.

If you want to access the second or third from a list, or want to skip the first or second element (etc), this is a great and clean way to do it.
 */

//: Replacer function with JSON.stringFY

const foo = {
  bar: 40,
  baz: "qux",
};

const replacer = (key, value) => (key === "bar" ? value * 2 : value);

const fooStr = JSON.stringify(foo, replacer);
console.log(fooStr); // {"bar":80,"baz":"qux"}

/* The replacer function is the second argument to JSON.stringfy.
I alters the behavior of the stringfication process.

The argument can also be an array or type String or Number.
This becomes an "allowlist" that filters the properties of the object with the name included in the list
*/

//: Console.Trace

console.log("Simple log statement...");
// Simple log statement...

const someFunction = () => {
  console.trace("Log with stack trace");
};
// Log with stack trace
// SomeFunction   @ index.html:12
// (anonymouse)   @ index.html:15

/* 
If you use console.trace instead of console.log, it will show you the complete call stack when debugging.

This is very convenient when you're working with larger setups with multiple files and modules.
*/

//: Console.Time

console.time("timer-1");

// time consuming operation

const items = [];

for (let i = 0; i < 1000000; i++) {
  items.push({
    i,
  });
}

console.timeEnd("timer-1");

/* You can set timers using console.time.
This can be useful when debugging slow loop or function calls. */

//: Console.group

console.group("User");

console.log(user.name);
console.log(access[user.name]);

console.groupEnd();

/* 
console.group let's you use nested groups to help organize your output by visually associating related messages.

Addotionally, you can use the console.groupCollapsed method to create a new block that is collapsed and requires clicking a disclosure button to read it.
*/

//: Console.assert

if (!user.id) {
  console.log("User Id Missing");
}

// Using consoel.assert
console.assert(user.id, "User id missing");

/* 
Use console.assert to make conditional log statements.

The console.assert method writes an error message to the console if the assertion is false

If the assertion is true, nothing happens.
*/

//: Pass Arguments As An Object

const createUser = (username, date, isAdmin, isMod) => {
  // create user
};

createUser("therogersak", "01-01-2004", false, true);

// Like this

const createUser2 = ({ username, data, isAdmin, isMod }) => {
  // create user
};

createUser2({
  username: "therogersak",
  date: "01-01-2004",
  isAdmin: false,
  isMod: true,
});

/* 
If more than 1 parameter is added to a function, it's very difficult to figure what these arguments mean, when the function is called.

Passing the argument contained is an object (a so-called DTO) makes it pretty clear from the names of the properties.

And also - the order doesn't matter anymore.
*/

//: Readable Numbers

const largeNumber = 1000000000000;

const largeNumber2 = 1000_000_000_000;

// Use like this
const largeNumber3 = 1e12;

/* 
The Numeric Separators give us the ability to separete large numbers with an underscore (_) in numeric literals.

This greatly improves readability, and it will have no effect on how the Javascript engine enteprets the number.
*/

//: Pass Messages Between Tabs and Windows

const bc = new BroadcastChannel("test_channel");

bc.postMessage("Hello Word");

bc.onmessage = function (ev) {
  console.log(ev);
};

/* The Broadcast Channel Api Allows basic communication between browsing contexts (windows, tabs, frames or iframes).

Using the BroadcastChannel constructor, you can recive any message that are posted to it without having to maintain a refences to frames or workers.*/

//: Remove Duplicates From Array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const uniqueNumber = [new Set(numbers)];
[1, 2, 3, 4, 5, 6, 7, 8, 9];

/* 
The simplest way to remove duplicates from an array, is to use the set constructor to create a new set object containibg unique values (of any kind).

In other words, set will automatically remove duplicates for use, and by spreading it into a new array, we can create a new array without duplicates.
*/

//: Use Modules instead of Classes

class SomeClass {
  methodOne() {}
  methodTwo() {}
}

// Usage

const someClass = new SomeClass();
someClass.methodOne();

//* Use this

export const functionOne = () => {};
export const functionTwo = () => {};

// usage

import * as someFunctions from "./someFunction";
someFunctions.functionOne();

/* 
In Javascript, there are no classes.

It's syntactical sugar added to please developers from other languages such as Java or C#.

Most of the time, they don't serve a good purpose, and are not really useful. Instead, use modules.
*/

//: Javascript Debugger

// The browser will stop here, when executing.

if (someThingTrue) {
  debugger;
}

/* 

Place a debugger; Line in your code, and the browser will stop executing. This makes it easier to start investigating.

As an alternative, Vscode also ships with a greay inbuilt bebugger which works both with browsers and NodeJs.
*/

//: Do not extend the built-ins (create your own utilities instead)

//* Custom average function

Array.prototype.average = function () {
  return this.reduce((acc, elem) => acc + elem / this.length);
};

const list = [1, 2, 3, 4];
const avg = list.average();

//* Use this

class ArrayUtils {
  // custom average function
  static average(list) {
    return list.reduce((acc, elem) => acc + elem / list.length);
  }
}
const avg2 = ArrayUtils.average(list);

/* 
Extending the standard built-ins is considered bad practice.

Create your own utility class instead.
(And share it on NPM, if it's useful to others).
*/

//: Use Array.some (to check for occurrences in a list)

const hasActiveUsers = list.find((user) => user.isActive);
console.log(Boolean(hasActiveUsers));

// use like

const hasActiveUsers2 = list.some((user) => user.isActive);

console.log(hasActiveUser);

/* Instead of using Array.find, or manually searching a list for an occurrence, use the array method Array.some instead.

It's built for exactly that purpose*/

//: Using Optional Chaininig On Fnctions

// Using short-circuit
someFunction && someFunction();

// Using if-statement
if (someFunction) {
  someFunction();
}

//* But Now
someFunction?.();

/* The Optional Chaining operator (?.) enables you to access properties that are potentially null or undefined.

It works perfectly well on function calls as well.

A great example of usage is in React, where function passed as props may be optional (and therefor potentially undefined).*/

//: Enforce required arguments using default assignment

//* Create this reusable function

const isRequired = () => {
  throw Error("Argument is missing");
};

//* Example Usage

const setUsername = (username = isRequired()) => {
  // Do something with "username",
  // If username not provided.
  // these lines of code will naver be reached
};

/* The idea here is to make a default assignment to the return-value of a function which throws an error when getting invoked.

In this way, an error will be thrown when am argument in not passed.

Be aware, that null is considered a value, hence passing null will not result in a default assignment*/

//: Adding a leading Zero

const d = new Date();

const day = `0${d.getDate()}`.slice(-2);
// 04 or 15

/*  Use this one-liner to add leading zeros to numbers.
    (very useful for dates).
    
    Alternatively,you can use padStart(2,0)*/

//: Avoid DEFAULT EXPORTS

/* => Poor discoverability and autocompletion
   => Horrible when using CommonJS.
   => TypeScript struggles with auto-import
   => Re-exporting becomes tedious.
   
   Generally, i always recommend simple exports + destructured import.*/

//: Use The Spread Operator - To Shallow Copy Objects and Arrays.

const newObject = {};
Object.keys(oldObject).forEach((key) => {
  newObject[key] = oldObject[key];
});

const newArray = [];
oldArray.forEach((arr) => {
  newArray.push(arr);
});

//* Use like this =>

const newObject2 = { ...oldObject };
const newArray2 = [...oldArray];

/* Use the spread operator to create shallow copies of object and arrays. It's way cleaner than iterating and manually coping over.

The spread operator was a feature added as a part of ES6 and is supported by major browsers.*/

//: Destructure Into Existing Variables

const about = {
  username: "thergersak",
  email: "therogersak@gmail.com",
};

let username;
let email;

({ username, email } = about);

/* There's an easy way to destructure into existing variables.

Simply wrap the destructuring syntax in parentheses - this will result in the destructured variables being assinged as variables in current scope.

Combining this with the use of the let keyword can be very useful in certain cases.*/

//: Lock An Object Using Object Freeze

const aboutUser = {
  username: "therogersak",
};

Object.freeze(aboutUser);

aboutUser.username = "FakeUser";
// Throws an error in strict mode.

/* The Object.freeze method freezes an object. 
A frozen object can no longer be changed and will result in an error. This means, that no properties can be reassigned or delete from the object. */

//: Create a Custom Promise Using the Async Keyword

const promise = async () => {
  return "Jai Shree Ram";
};

promise().then((result) => {
  console.log(result); // "Jai Shree Ram"
});

/* You probably already knew that you have to put ‘async’ in front of the function signature in order to use ‘await’ inside of it. But did you also know that ‘async’ turns the function into a promise? When adding ‘async’ in from on the function signature, the return value automatically becomes ‘awaitable’ or ‘thenable’. */

//: Creating A Reusable Pipe Using JavaScript

const pipe =
  (...fns) =>
  (arg) =>
    fns.reduce((value, fn) => fn(value), arg);

const calculaterProfit = pipe(
  // DEDUCT VAT (8%)
  (value) => value * (1 - 0.08),

  // DEDUCT tax (15%)
  (value) => value * 1.015,

  // Add External contrubution
  (value) => value + 2500,

  // Split with co-founders (3 c-founders)
  (value) => value / 3
);

const revenue = 5e4;

const profit = calculaterProfit(revenue);

/* This is an Example of how you can create a reusable and composable pipe using JavaScript.

The data of the pipe flows left to right, calling each function with the output of the last one.

It's great and clean way to simplify a flow of processing a alue through multiple steps. */

//: STOP USING IIFEs (Immediately Invoked Function Expression)

(async function doSomeThingAsync() {
  const foo = await bar();
  const baz = foo.qux;

  return baz;
})();

//* Use like this

async function doSomeThingAsync2() {
  const foo = await bar();
  const baz = foo.qux;

  return baz;
}

doSomeThingAsync2();

/* IIFEs died when modules were born.

You don't need them (at least in 99% in the cases, you don't).

In a case like this, just execute the function on a new line instead
   */

//: UNDERSTANDING CLOSURES

// We can define a nested inner function which gets returned by an outer function.

const outer = () => {
  let n = 42;

  const inner = () => {
    // inner can access "n"
    console.log(n);
  };

  return inner;
};

//? The inner function still has access to n, even through it's called from another context.

const inner = outer();
inner();

/* Closures is one of the fundemental building-blocks in JavaScript.

A closures gives a function access to an outer function's scope, even if the inner function in invoked from a completely different context.

This pattern is often used in combination with currying.*/

//: Scroll To A Specific Element (with a smooth scrolling animation)

const element = document.getElementById("element");

element.scrollIntoView({
  behavior: "smooth",
});

/* Calling Element.scrollIntoView causes the elements parent container to scroll, such that the element becomes visible to the user.

It's really easy way to invoked a smooth scrolling behavior.*/

//: Avoid unnecessary asyn-await

const fetchUser = async () => {
  return await fetch("https://endpoint.com");
};

//* Right

const fetchUser2 = () => {
  return fetch("https://endpoint.com");
};

// The Result is the same!

const user = await fetchUser();
const userObj = await user.json();

/* If the function returns a Promise directly, there's no need to await it. */

//: Use Proper Variables Names (Also in callbacks)

const profileWithImages = user.filter((u) => {
  return u.entities.find((e) => e.type === "profile_image");
});

//* Right

const profileWithImages2 = user.filter((user) => {
  return user.entities.find((entity) => entity.type === "profile_img");
});

/* Use proper variable names - also in callbacks.

Short, concise code is not necessarily an ideal.
Clarity and readablity is.

Playing with an extra line perfecly ok.*/

//: Use Object.entries (to access both ket and value)

Object.entries(someObj).forEach((key, value) => {
  console.log(key, value);
});

/* You can use Object.entries() to iterate through the properties of an object and access both key and value.

No need to do an object lookup for each iteration.*/

//: Using curly braces with switch-statements

switch (foobar) {
  case "foo": {
    console.log("foo");
    break;
  }

  case "qux": {
    console.log("QUX");
    break;
  }
}

/* Did yoy know that you can curly braces with swithc-statement?

Takeaways include:
1.More readable
2.Establishes their own block scope.
*/

//: Create Your Own Custom HTML Elements

class FooElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "This is custom element";
  }
}

customElements.define("foo-element", FooElement);

/* Did you know that you can create your own custom HTML elements using JavaScript - and then use them in your HTML file just like any other element?.

You can create some pretty powerful experiences using this technique.*/

//: Using The Nullish Coalescing Operator

let price_1 = 0;
let price_2;

// Assign a default if "price" is not set

const defaultPrice_1 = price_1 ?? 10;
const defaultPrice_2 = price_2 ?? 50;

console.log(defaultPrice_1); // 0
console.log(defaultPrice_2); // 50

/* The Nullish coalescing operator will return its right-hand operator when the left side in null or undefined. Not Just falsy

When working with numbers, this is typically very useful.*/

//: 3 Ways to fill an array

const arr = new Array(10).fill("foo");

//* 2st

const arr2 = new Array(10);
const filledArr = [...arr2].map(() => "foo");

//* 3st

const arr3 = Array.from({ length: 10 }, () => "foo");

/* These are 3 different ways to fill an array using JavaScript.
The most commonly used is version 1 - yet, version 2 can useful when filling
the array best on business logic.
Version 3 is mostly for fun - but it can actually be done this way as well. */

//: 3 Options You can pass to AddEventListener

element.addEventListener("click", callback, {
  capture: false,
  once: true,
  passive: false,
});

/* capture: Will use “capturing” instead of “bubbling”.
once: If true, the event will be removed after running once.
passive: If true, the function will never call preventDefault(), even if it’s included in the
callback function. */

//: How to hide all elements specified?

const hide = (...ele) => [...ele].forEach((el) => (el.style.dispaly = "none"));

hide(document.querySelectorAll("p"));
// Hides all <p> elements on the page

//: How to check if the element has the specified class?

const hasClass = (el, className) => el.classList.contain(className);

hasClass(document.querySelector("p.special"), "special");

//: How to toggle a class for an element?

const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector("p.special", "special"));

//: How to get the scroll position of the current page?

const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
});

getScrollPosition(); // {x:0 , y:300}

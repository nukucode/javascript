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

class someClass {
  methodOne() {}
  methodTwo() {}
}

// Usage

const someClass = new someClass();
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

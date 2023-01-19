//: 1.What's the output?

function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Ankit";
  let age = 18;
}

sayHi();

//: 2.What's the output?

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

//: 3.What's the output?

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },

  perimeter: () => 2 * Math.PI * this.radius,
};

//: 4.What's the output?

+true;
!"Ankit";

//: 5.What's the output?

const bird = {
  size: "small",
};

const mouse = {
  name: "Mickey",
  small: true,
};

console.log(mouse.bird.size);
console.log(mouse[bird.size]);
console.log(mouse[bird["size"]]);

//: 6.What's the output?

let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello!";
console.log(d.greeting);

//: 7.What's the output?

let a = 3;
let b = new Number(3);
let x = 3;

console.log(a == b);
console.log(a === b);
console.log(b === b);

//: 8.What's the output?

class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
console.log(freddie.colorChange("orange"));

//: 9.What's the output?

let greeting;
greetign = {};
console.log(greetign);

//: 10.What happens when we do this?

function bark() {
  console.log("Woof!");
}

bark.animal = "dog";

//: 11.What the output?

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Ankit", "Yadav");
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());

// 12.What's the output?

function Person2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const ankit = new Person2("Ankit", "Yadav");
const ram = Person2("Ram", "Yadav");

console.log(ankit);
console.log(ram);

//: 13.What are the three phase of event propagation?

// => Target > Capturing > Bubbling
// => Bubbling > Taget > Capturing
// => Taget > Bubbling > Capturing
// => Capturing > Target > Bubbling

//: 14.All object have prototypes

// => True
// => False

//: 14.What's the output?

function sum(a, b) {
  return a + b;
}

sum(1, "2");

//: 16.What's the output?

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

//: 17.What's the output?

function getPerson(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const user = "Ankit";
const age = 18;

getPerson`${user} is ${age} years old`;

//: What's the output?

function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  }
  if (data == { age: 18 }) {
    console.log("You can still be adult!");
  } else {
    console.log("Hmm... You don't have an age I guess");
  }
}

checkAge({ age: 18 });

//: 19.What's the output

function getAge(...args) {
  console.log(typeof args);
}

getAge(21);

//: 20 What's the output?

function getName() {
  "use strict";
  name = "Ankit";
  console.log(name);
}

getName();

//: 21.What's the value of sum?

const sum = eval("10*10+5");

//: 22.How long is cool_secret accessible?

sessionStorage.setItem("cool_secret", 123);

//: 23.What's the output?
var num = 8;
var num = 10;

console.log(num);

//: 24.What the output?
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);

// 25.What's the output?
const objj = { a: one, b: two, a: three };
console.log(objj);

//: The JavaScript global execution context creates two things for you: the global object and the "this" keyword

//: 27.What's the output?

for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

//: 28.What's the output?

String.prototype.giveAnkitPizza = () => {
  return `Just give Ankit Pizza already!`;
};

const name = "Ankit";

console.log(name.giveAnkitPizza());

//: 29.What's the output?

const w = {};
const y = { key: "b" };
const z = { key: "c" };

w[y] = 123;
w[z] = 456;

console.log(w[y]);

//: 30.What's the output?

const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

//: 31.What is the event.target when clicking the button?

<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">Click!</button>
  </div>
</div>;

//: 32.When you click the paragraph, what's the logged output?

<div onclick="console.log('div')">
  <p onclick="console.log('p')">Click here!</p>
</div>;

//: 33:What's the output?

const person = { name: "Ankit" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));

//: 34.What's the output?

function sayHello() {
  return (() => 0)();
}

console.log(typeof sayHi());

//: 35.Which of these values are falsy?

0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;

//: 36.What's the output?

console.log(typeof typeof 1);

//: 37.What's the output?

const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

//: 38.What's the output?

(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();

//: 39.Everything in JavaScript is either a...

//: 40.What's the output?

[
  [0, 1],
  [2, 3],
].reduce(
  (acc, cur) => {
    acc.concat(cur);
  },
  [1, 2] // => initial value
);

//: 41:What's the output?

!!null;
!!"";
!!1;

//: 42.What does the setInterval method return in the browser?

setInterval(() => console.log("Hi", 1000));

//: 43.What does this return?

[..."Ankit"];

//: 44: What's the output?

function* generator(i) {
  yield 1;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);

//: 45.What does this return?

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));

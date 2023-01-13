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

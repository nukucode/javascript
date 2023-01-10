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


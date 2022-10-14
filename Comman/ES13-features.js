//: 11 Amazing New Javascript Features in ES13

// ECMASCRIPT 2022 (ES13)

//# Class Field Declarations

/* Before ES13, class fields could only be declared in the constuctor. */

class Car {
  constructor() {
    (this.color = "Red"), (this.type = "Car");
  }
}

const car = new Car();
console.log(car.color); // "Red"

/* ES13 removes this limitation. Now we can write code like this */

class Person {
  name = "therogersak";
  age = 18;
}

const rogers = new Person();
console.log(rogers.name); // "therogersak"

//# Private Methods and Fields

/* Previously, it was not possible to declare private members in a class. A member was traditionally prefixed with an underscore (_) to indicate that it was meant to be private, but it could still be accessed and modified from outside the class. */

class Developer {
  _firstName = "Ankit";
  _lastName = "Yadav";

  get name() {
    return `${this._firstName} ${this._lastName}`;
  }
}

const dev = new Developer();
console.log(dev.name); // Ankit Yadav

// Members intended to be private can still be accessed
// from outside the class
console.log(dev._firstName); // Ankit
console.log(dev._lastName); // Yadav

// They can also be modified
dev._firstName = "the";
dev._lastName = "rogersak";
console.log(dev.name); // the rogersak

/* With ES13, we can now add private fields and members to a class, by prefixing with a hashtag (#). Trying to access them from outside the class will cause an error: */

class Language {
  #first = "Javascript";
  #second = "Typescript";

  get combine() {
    return `${this.#first} ${this.#second}`;
  }
}

const lang = new Language();
console.log(lang.combine); // Javascript Typescript

// SyntaxError: private field '#first' must be declared in an encloing class
/* console.log(lang.#first)
console.log(lang.#second) */

//# await Operator at the top Level

/* In Javascrip, the await operator is used to pause execution until a Promise is settled (fulfilled or rejected) 

we could only use this operator in an async function - a function declared with the async keyword. we could not do so the global scope
*/

function setTimeOutAsync(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

//SyntaxError: await is only valid in async functions
// await setTimeOutAsync(3000);

// With ES13, now we can

function setTimeOutAsync2(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

// Waits for timeout - no error thrown
// await setTimeOutAsync2(3000);

//# Static Class Fields and Static Private Methods

/* We can now declare static fields and static private
methods for a class in ES13. Static methods can access other private/public static members in class using the this keyword, and instance methods can access them using this.constuctor */

class Numbers {
  static #count = 0;

  static getCount() {
    return this.#count;
  }

  constructor() {
    this.constructor.#incrementCount();
  }

  static #incrementCount() {
    this.#count++;
  }
}

const num = new Numbers();
const nums = new Numbers();
console.log(Numbers.getCount()) // 2
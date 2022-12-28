//: Class checking "instanceof"

/* The "instanceof" operator allows to check whether an object belongs to a certain class. It also takes inheritance into account. */

//? Syntax
// obj instanceof Class;

/* It return true if obj belong to the class or a class inheriting from it. */

class Rabbit {}
let rabbit = new Rabbit();

// is it an object of Rabbit class?
console.log(rabbit instanceof Rabbit); // true

// It also work with constructor function

function Rabbit2() {}

console.log(new Rabbit() instanceof Rabbit); // true

// ...And with built-in classes like Array:

let arr = [1, 2, 3, 4];
console.log(arr instanceof Array); //  true
console.log(arr instanceof Object); // true

/* Please not that arr also belongs to the Object class. That's becuase Array prototypically inherits from object. */

//? 1. =>

/* If there’s a static method Symbol.hasInstance, then just call it: Class[Symbol.hasInstance](obj). It should return either true or false, and we’re done. That’s how we can customize the behavior of instanceof. */

// setUp instanceOf check that assumes that
// antrhing with canEat property is an food
class Food {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}

let obj = { canEat: true };

console.log(obj instanceof Food); // true: Food[Symbol.hasInstance](obj) is called


//? 2. =>

/* Most classes do not have Symbol.hasInstance. In that case, the standard logic is used: obj instanceOf Class checks whether Class.prototype is equal to one of the prototypes in the obj prototype chain */

obj.__proto__ === Class.prototype?
obj.__proto__.__proto__ === Class.prototype?
obj.__proto__.__proto__.__proto__ === Class.prototype?

// if any answer is true, return true
// otherwise, if we reached the end of the chain, return false

/* In the example above rabbit.__proto__ === Rabbit.prototype, so that gives the answer immediately */
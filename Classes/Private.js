//: Private and protected propeties and methods
/* One of the most important principle of object oriented programming - delimiting iternal interface from the external one. */

//* Internal and external interface
/* In object-oriented programing, properties and methods are split into two groups:

=> Internal interface -> methods and properties, accessible also from other methods of the class, but not from the outside.

=> External interface -> methods and properties, accessible from outside the class.

? IN JAVASCRIPT, there are two types of object fields (properties and methods)

=> Public accessible from anywhere. They comprise the external interface. Until now we were only using public properties and methods.

=> Private accessible from inside the class. These are for the iteternal interface
*/

//* Protecting "waterAmount"

class CoffeeMachine {
  //? Protected properties are usually prefixed with an underscore _.
  _waterAmount = 0; // the amount of water inside

  constructor(power) {
    this.power = power;
    console.log(`Created a coffee-machine, power: ${power}`);
  }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = 200; // _waterAmount will become 0, not 200

/* This is not enforeced on the language level, but there's a well-known convention between programmers that such properties and methods should not be accessed from the outside. */

//* Read-only "power"

class CoffeeMachine {
  // ...

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

coffeeMachine.power = 25; // Error (no setter)

//* Private "#waterLimit"
/* There's finished Javascript proposal, almost in the standard, that provides langauges-level support for private properties and methods */

class Person {
  #name = "Ankit Yadav";

  #fixName(name) {
    if (name === "Ankit") return 0;
    if (name === this.#name) return this.#name;
  }

  setName(value) {
    this.#name = this.#fixName(value);
  }
}

let name = new Person();

// can't access privates from outside of the class
name.#fixName("Manish"); // Error
name.#name = "Manish Yadav"; // Error

/* On the langauge level # is a special sign that the field is private. We can't access it from outside or from inheriting classes. */

//? Private fields do not conflict with public ones. We can have both private #name and public name fields at the same time.

class User {
  #name = "Ankit Yadav";

  get name() {
    return this.#name;
  }

  set setName(value) {
    this.#name = value;
  }
}

let user = new User();

user.name = "Manish";
console.log(user.#name); // Error

//? But if we inherit from User, then we'll have no direct access to #name. We'll need to rely on name getter/setter.

//! Private fields are not available as this[name]
/* Private fields are special. As we know, usually we can access fields using this[name] */

class message {
  sayHi() {
    let fieldName = "name";
    console.log(`Hello ${this[fieldName]}`);
  }
}

/* With private fields that's impossible: this['name'] doesn't word. That's a syntax limitation to ensure privacy. */

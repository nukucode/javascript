//: Constructor Creational Design Pattern

/* Constructors are special function that can be used to instantiate new objects with methods and properties defined by that function. 

=> Constructor pattern is the most comonly used pattern in Javascript for creating new objects of similiar kind.*/

//* traditional Function-based syntax

function Hero(name, specialAbility) {
  // setting property values
  this.name = name;
  this.specialAbility = specialAbility;

  // declaring a method on the object
  this.getDetails = function () {
    return `${this.name}: ${this.specialAbility}`;
  };
}

//* ES6 Class syntax

class Hero {
  constructor(name, specialAbility) {
    this._name = name;
    this._specialAbility = specialAbility;

    // declaring a method on the object
    this.getDetails = function () {
      return `${this._name}${this._specialAbility}`;
    };
  }
}

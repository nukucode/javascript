//* ES6 Classes

//? ==> Object-Oriented Programing(OOPs)

// 3 Pillars of OOPs

//? Object, Class, Methods

// The class contains the Constructors and functions

// The Constuctors take responsibility for allocating memory for the objects of class.

// The function takes the responsibility of the action of the object. Combing these two Constructor and Function to make the Class

//* => class Declaration

// to declare a class, you use the class keyword with the name of the class

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

//* => Hoisting

// An Important difference between function declaration and class declaration is that while functions can be called in Code that appears before they are defined, classes must be defined before they can be constructed

//* => Class Expressions

// A class expression in another way to define a class.

//! unnamed expression
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

console.log(Rectangle.name); // Rectangle

//! named expression
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

console.log(Rectangle.name); // Rectangle2

//* class inheritance

// the es6 class supports the inheritance. Inheritance has the courage to create entities from exiting entities. There are two types of class in ES6;

// -> Parent class/super class

// The class extended to create new class are know as a parent class or super class.

// -> Chid/sub classes

// The class are newly created are know as child or sub class. Sub class inherit all the properties from parent class except constructor.

//* Class inheritance Example

class Student {
  constructor(a) {
    this.name = a;
  }
}

class User extends Student {
  show() {
    console.log(this.name);
  }
}

var obj = new User("Rogers");

obj.show(); // Rogers

//? ==> Type of inheritance

//* Single Level Inheritance
// Class A <== Class B

//*  Multi Level inheritance
// Class A <== Class B <== Class C

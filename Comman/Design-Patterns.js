//: JavaScript Design Patterns

/* A design pattern is a term used in software engineering for a general, reusable sloution to a commonly occuring problem in software design. */

//? Categories of Design Patterns
/* Design patterns are usually categorized into three major groups. */

//* => 1.Creational Design Patterns

/* As the name suggests, these patterns are for handling object creational mechanisms. A creational design pattern basically slove a problem by constrolling the creation process of an object.

=> Constructor Pattern, Factory Pattern, Prototype Pattern, and Singleton Pattern.*/

//* => 2.Structual Design Patterns

/* These patterns are concerned with classs and object composition. They help structure or restructure one or more parts without affecting the entire system. In other words, they help obtain new functionalities without tampering with exiting ones.

=> Adapter Pattern, Composite Pattern, Decorator Pattern, Facade Pattern, Flyweight Pattern and Proxy Pattern.*/

//* Behavioral Design Patterns

/* These patterns are concerned with improving communication between dissmilar objects.

=> Chain of Responsibility Pattern, Command Pattern, Iterator Pattern, Mediator Pattern, Observer Pattern, State Pattern, Strategy Pattern, and Template Pattern.*/

//? 1.Constructor Pattern

/* This is a class-based creational design pattern. Constructor are special functions that can be used to instantiate new object with methods and properties defined by that function. 

Constructor pattern is one of the most commonly used patterns in JavaScript for creating new object of a given kind*/

// traditional Function-based syntax
function Hero(name, specialAbility) {
  this.name = name;
  this.specialAbility = specialAbility;

  // method
  this.getDetails = function () {
    return `${this.name} can ${this.specialAbility}`;
  };
}

// ES6 Class syntax

class Hero2 {
  constructor(name, specialAbility) {
    this.name = name;
    this.specialAbility = specialAbility;
  }
  getDetails() {
    return `${this.name} can ${this.specialAbility}`;
  }
}

// creating new instances of Hero
const IronMan = new Hero("Iron Man", "fly");

console.log(IronMan.getDetails());

//? 2.Factory Pattern

/* Factory pattern is another class-based creational patterns. This pattern is frequently used when we need to manage or manipulate collection of objects that are different yet have many similar charcteristics. */

class BallFactory {
  constructor() {
    this.createBall = function (type) {
      let ball;
      if (type === "football" || type === "soccer") ball = new Football();
      else if (type === "basketball") ball = new Basketball();

      ball.roll = function () {
        return `The ${this._type} is rolling`;
      };

      return ball;
    };
  }
}

class Football {
  constructor() {
    this._type = "football";
    this.kick = function () {
      return `You kicked the football.`;
    };
  }
}

class Basketball {
  constructor() {
    this._type = "basketball";
    this.bounce = function () {
      return "You bounced the basketball.";
    };
  }
}

// creating objects

const Factory = new BallFactory();

const myFootball = Factory.createBall("football");
const myBasketball = Factory.createBall("basketball");

console.log(myFootball.roll());
console.log(myBasketball.roll());
console.log(myFootball.kick());
console.log(myBasketball.bounce());

//? 3.Prototype Pattern

/* This pattern is an object-based creational design pattern. In this, we use a sort of a "skeleton" of an exiting object to create or instanitiate new objects. 

This pattern is specifically important and beneficial to JavaScript because it utilizes prototypal inheritance instead of a classic object-oriented inheritance.*/

const car = {
  noOfWheels: 4,
  start() {
    return "strated";
  },
  stop() {
    return "stopped";
  },
};

// Object.create(proto[, propertiesObject])
const myCar = Object.create(car, { owner: { value: "Ankit" } });

console.log(myCar.__proto__ === car); // true

//? 4.Singleton Pattern

/* Singleton is a special creational design pattern in which only one instance of a class can exist. It works like this - if no instance of the singleton class exists then a new instance is create and returned, but if an instance already exits, then the reference to the existing instance is returned.*/

class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }

    this._data = data;
    Database.instance = this;
    Database.exists = true;
    return this;
  }

  getData() {
    return this._data;
  }

  setData(data) {
    this._data = data;
  }
}

const mongo = new Database("mongo");
console.log(mongo.getData()); // mongo

const mySql = new Database("mySql");
console.log(mySql.getData()); // mongo

//? 5.Adapter Pattern

/* This is a structural pattern where the interface of one class it translate into another. This pattern lets classes work together the could not oterwise becauses of incompatible interfaces.

This pattern if often used to create wappers for new refactored APIs so that other exiting old APIs can still work with them.*/

// old interface
class OldCalculator {
  constructor() {
    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case "add": {
          return term1 + term2;
        }
        case "sub": {
          return term1 - term2;
        }
        default: {
          return NaN;
        }
      }
    };
  }
}

// new interface
class NewCalculator {
  constructor() {
    this.add = function (term1, term2) {
      return term1 + term2;
    };

    this.sub = function (term1, term2) {
      return term1 - term2;
    };
  }
}

// Adapter class
class ClacAdapter {
  constructor() {
    const newCalc = new NewCalculator();

    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case "add": {
          return term1 + term2;
        }
        case "sub": {
          return term1 - term2;
        }
        default: {
          return NaN;
        }
      }
    };
  }
}

// usages
const oldClc = new OldCalculator();
console.log(oldClc.operations(10, 5, "add")); // 15

const newClc = new NewCalculator();
console.log(newClc.add(5, 10)); // 15

const adapterCalc = new ClacAdapter();
console.log(adapterCalc.operations(10, 5, "add")); //15

//? Composite Pattern

/* This is a strcutural design pattern that composes objects into tree-like strucutres to represent whole-part hierarchies. IN this pattern, each node in the tree like strucuture can be either an individual object or a composed collection of objects. Regardless, each node is treated uniformly. */

class Component {
  constructor(name) {
    this._name = name;
  }

  getNodeName() {
    return this._name;
  }

  // abstract methods that need to be overridden
  getType() {}

  addChild(component) {}

  removeChildByName(componentName) {}

  removeChildByIndex(index) {}

  getChildByName(componentName) {}

  getChildByIndex(index) {}

  noOfChildren() {}

  static logTreeStructure(root) {
    let treeStructure = "";
    function traverse(node, indent = 0) {
      treeStructure += `${"--".repeat(indent)}${node.getNodeName()}\n`;
      indent++;
      for (let i = 0, length = node.noOfChildren(); i < length; i++) {
        traverse(node.getChildByIndex(i), indent);
      }
    }

    traverse(root);
    return treeStructure;
  }
}

class Leaf extends Component {
  constructor(name) {
    super(name);
    this._type = "Leaf Node";
  }

  getType() {
    return this._type;
  }

  noOfChildren() {
    return 0;
  }
}

class Composite extends Component {
  constructor(name) {
    super(name);
    this._type = "Composite Node";
    this._children = [];
  }

  getType() {
    return this._type;
  }

  addChild(component) {
    this._children = [...this._children, component];
  }

  removeChildByName(componentName) {
    this._children = [...this._children].filter(
      (component) => component.getNodeName() !== componentName
    );
  }

  removeChildByIndex(index) {
    this._children = [
      ...this._children.slice(0, index),
      ...this._children.slice(index + 1),
    ];
  }

  getChildByName(componentName) {
    return this._children.find((component) => component.name === componentName);
  }

  getChildByIndex(index) {
    return this._children[index];
  }

  noOfChildren() {
    return this._children.length;
  }
}

// usage
const tree = new Composite("root");
tree.addChild(new Leaf("left"));
const right = new Composite("right");
tree.addChild(right);
right.addChild(new Leaf("right-left"));
const rightMid = new Composite("right-middle");
right.addChild(rightMid);
right.addChild(new Leaf("right-right"));
rightMid.addChild(new Leaf("left-end"));
rightMid.addChild(new Leaf("right-end"));

// log
console.log(Component.logTreeStructure(tree));
/*
root
--left
--right
----right-left
----right-middle
------left-end
------right-end
----right-right
*/

//? 6.Decorator Pattern

/* This is also a structural design pattern that focuses on the ability to add behaviour or functionalities to exiting classes dynamically. It is another viable alternative to sub-classing.

The decorator type behaviour is very easy to implement in JavaScript because JavaScript allows us to add methods and properties to object dynamically. The simplest approach would be to just add a property to an object, but it will not be efficiently reusable*/

class Book {
  constructor(title, author, price) {
    this._title = title;
    this._author = author;
    this_price = author;
  }

  getDetails() {
    return `${this._title} by ${this._author}`;
  }
}

// decorator 1
function giftWrap(book) {
  book.isGiftWrapped = true;
  book.unWrap = function () {
    return `Unwrapped ${book.getDetails()}`;
  };

  return book;
}

// decotator 2
function hardbinBook(book) {
  book.isHardbound = true;
  book.price += 5;
  return book;
}

// usage
const alchemist = giftWrap(new Book("The Alchemist", "Paulo Coelho", 10));

console.log(alchemist.isGiftWrapped); // true
console.log(alchemist.unwrap()); // 'Unwrapped The Alchemist by Paulo Coelho'

const inferno = hardbindBook(new Book("Inferno", "Dan Brown", 15));

console.log(inferno.isHardbound); // true
console.log(inferno.price); // 20

//: Static properties and methods
/* We can also assign a method to the class as a whole. Such methods are called static */

// In class declaration, they are prepended by static keyword

class User {
  static staticMethod() {
    console.log(this === User);
  }
}

User.staticMethod(); // true

//? That actuallu does the same as assigning it as a property directly

class User2 {}

User2.staticProperty = function () {
  console.log(this === User2);
};

User2.staticProperty(); // true

/* Usually, static methods are used to implement functions that belong to the class as a whole, but not to any particular object of it. */

// For instance, we have Article objects and need a function to compare them.

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// usage
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1)),
];

articles.sort(Article.compare);

alert(articles[0].title); // CSS

/* Satic method are also used in database-related classes to serch/save/remove entries from the database */

//! Static method aren't available for individual objects
/* Static methods are callable on clasees, not on individual objects */

//* Static propeties

class Person {
  static name = "Ankt Yadav";
}

console.log(Person.name); // Ankit Yadav

// That is the same as a direct assignment to Person
Person.name = "Ankit Yadav";

//* Inheritance of static properties and methods

class Animal {
  static planet = "Earth";

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}`);
  }

  static compare(a, b) {
    return a.speed - b.speed;
  }
}

// inherit from Animal

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbit = [new Rabbit("White Rabbit", 10), new Rabbit("White Rabbit", 5)];

rabbit.sort(Rabbit.compare);

rabbit[0].run(); // Black Rabbit runs with speed 5

console.log(Rabbit.planet); // Earth

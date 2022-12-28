//: Mixins

/* => A minin is a class containing methods that can be used by other classes without a need to inherit from it.

=> In other words, a mixin provides methods that implement a certain behavior, but we do not use it alone, we use it to add the behavior to other classes.*/

//* A mixin example

/* The simplest way to impelement a mixin in Javascript is to make an object with useful methods, so that we can easily merge them into a prototype of any class. */

// minxin
let SayHiMixin = {
  sayHi() {
    console.log("Hi");
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, SayHiMixin);

// now User can say Hi
new User("Ankit").sayHi();

//? Mixins can make use of inheritance inside themselves.

let sayMixin = {
  say(phrase) {
    console.log(phrase);
  },
};

let sayHiMixin = {
    __proto__: sayMixin, // (or we could use Object.serPrototypeOf to set the prototype)
    
    sayHi() {
        // call parent method
        super.say(`Hello ${this.name}`)
    },

    sayBye() {
        super.say(`Bye ${this.name}`)
        }
};


class User {
    constructor(name) {
        this.name = name;
    }
}


// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!
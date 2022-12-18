//: Symbols

/* Symbols are new primitive type introduced in ES6. Symbol are completely unique identifiers. Just like their primitive counterparts (Number, string, Boolean), they can be created using the factory function Symbol() which returns a symbol. */

const symbol = Symbol("description");

/* Every time you call the factory function, a new and unique symbol is create. The optional string-valued parameter is descriptive string that is shown when printing the symbol4 */

//? Every symbol returned by Symbol() is unique, so every symbol has its own identity

Symbol() === Symbol(); // false

//* Use Case: Symbol as keys of non-public properties

/* => Public: Properties are seen by clients of the code
   => private: Private properties are used internally within the pieces that make up inheritance hierarchy */

const _counter = Symbol("counter");
const _action = Symbol("action");

class Countdown {
  constructor(counter, action) {
    this[_counter] = counter;
    this[_action] = action;
  }

  des() {
    let counter = this[_counter];
    if (counter < 1) return;
    counter--;
    this[_counter] = counter;
    if (counter === 0) {
      this[_action]();
    }
  }
}

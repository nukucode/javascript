//: Adapter Structural Design Pattern

/* This is a structural pattern where the interface of one class is translated into another. This pattern lets classes work together that could not otherwise because of incompatible interfaces.


=> This pattern is often used to create wrappers for new refactored APIs so that other exiting old APIs can still work with them.*/

//? OLD INTERFACE =>
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
        default:
          return NaN;
      }
    };
  }
}

//? NEW INTERFACE =>
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

//? ADAPTER INTERFACE =>

class AdapterCalc {
  constructor() {
    const newCalc = new NewCalculator();

    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case "add": {
          return newCalc.add(term1, term2);
        }
        case "sub": {
          return newCalc.sub(term1, term2);
        }
      }
    };
  }
}

// usage =>
const oldCal = new OldCalculator();
console.log(oldCal.operations(10, 20, "add")); // 30

const newCalc = new NewCalculator();
console.log(newCalc.add(10, 20)); // 30

const adapterCalc = new AdapterCalc();
console.log(adapterCalc.operations(10, 20, "add")); // 30

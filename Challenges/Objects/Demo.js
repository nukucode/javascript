//* Two function one object

let obj = {};
function A(obj) {
  return obj;
}
function B(obj) {
  return obj;
}

let a = new A(obj);
let b = new B(obj);

console.log(a == b);

// * Create a calculator

function Calculator() {
  this.read = function () {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

//* Create new Accumulator

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("How much to add", 0);
  };
}

let accumulator = new Accumulator(0);
accumulator.read();
accumulator.read();
console.log(accumulator.value);

//* Chaining

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

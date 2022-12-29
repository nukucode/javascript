//: Factory Creational Design Pattern

/* Factory Pattern is another class-based creational pattern. In this, we privide a generic interface that delegates the responsibility of object instantiation to its subclasses.


=> This pattern is frequently used when need to manage or manipulate collection of objects that are different yet have many similar characteristics.*/

class BallFactory {
  constructor() {
    this.createBall = function (type) {
      let ball;
      if (type === "football" || type === "soccer") ball = new Football();
      else if (type === "basketball") ball = new Basketball();

      ball.roll = function () {
        return `${this._type} is rolling`;
      };

      return ball;
    };
  }
}

class Football {
  constructor() {
    this._type = "football";
    this.kick = function () {
      return `You kiced the football`;
    };
  }
}

class Basketball {
  constructor() {
    this._type = "basketball";
    this.bounce = function () {
      return `You bounced the basketball`;
    };
  }
}

const factory = new BallFactory();

const myFootball = factory.createBall("football");
const myBasketball = factory.createBall("basketball");

console.log(myFootball.roll());
console.log(myBasketball.roll());
console.log(myFootball.kick());
console.log(myBasketball.kick());

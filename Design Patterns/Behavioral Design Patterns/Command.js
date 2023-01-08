//: Command Pattern

/* This is a behavioural design pattern that aims to encapsulate actions or operations as objects. This pattern allows loose coupling of systems and classes by separating the objects that request an operation or invoke a method from the ones that execute or process the actual implementation. 

The clipboard interaction API somewhat resembles the command pattern. If you are a Redux user, you have already come across the command pattern. The actions that allow the awesome time-travel debugging feature are nothing but encapsulated operations that can be tracked to redo or undo operations. Hence, time-travelling made possible.*/

class SpecialMath {
  constructor(num) {
    this._num = num;
  }

  square() {
    return this._num ** 2;
  }

  cube() {
    return this._num ** 3;
  }

  squareRoot() {
    return Math.sqrt(this._num);
  }
}

class Command {
  constructor(subject) {
    this._subject = subject;
    this.commandExecuted = [];
  }

  execute(command) {
    this.commandExecuted.push(command);
    return this._subject[command]();
  }
}

const x = new Command(new SpecialMath(5));
x.execute("square");
x.execute("cube");

console.log(x.commandExecuted); // ["square", "cube]

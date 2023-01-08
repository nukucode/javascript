//: Template Behavioural Design Pattern

/* This is a behavioural design pattern on defining the skeleton of the algorithm or implementation of an operation, but deferring some step to subclasses. It lets subclasses redefine certain steps of an algorithm without changing the algorithm's outward strucutre. */


class Employee {
  constructor(name, salary) {
    this._name = name;
    this._salary = salary;
  }

  work() {
    return `${this._name} handles ${this.responsibilities() /* gap to be filled by subclass */}`;
  }

  getPaid() {
    return `${this._name} got paid ${this._salary}`;
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  // details handled by subclass
  responsibilities() {
    return 'application development';
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  // details handled by subclass
  responsibilities() {
    return 'testing';
  }
}

// usage
const dev = new Developer('Nathan', 100000);
console.log(dev.getPaid()); // 'Nathan got paid 100000'
console.log(dev.work()); // 'Nathan handles application development'

const tester = new Tester('Brian', 90000);
console.log(tester.getPaid()); // 'Brian got paid 90000'
console.log(tester.work()); // 'Brian handles testing'
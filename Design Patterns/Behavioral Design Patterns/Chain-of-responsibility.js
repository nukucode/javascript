//: Chain of Responsibility Behavioral Design Pattern

/* This is a behavioural design pattern that provides a chain of loosely coupled objects. Each of these objects can choose to act on or handle the request of the client.


=> A good example of the chain of responsibility pattern is the event bubbling in DOM in which an event propageates through a series of nested DOM elements, one of which may have an "event listener" attached to listen to and act on the event.*/

class CumulativeSum {
  constructor(initialValue = 0) {
    this.sum = initialValue;
  }

  add(value) {
    this.sum += value;
    return this;
  }
}

// usage
const sum1 = new CumulativeSum();
console.log(sum1.add(1).add(2).add(3).add(4).add(5));

const sum2 = new CumulativeSum(10);
console.log(sum2.add(10).add(20).add(5).sum); // 45
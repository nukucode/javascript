//: Observer Behavioural Design Pattern

/* It is a crucial behavioural design pattern that defines one-to-many dependencies between objects so that when one object (publisher) changes its state, all the other dependent objects (subscribers) are notified and update automatically. This is also called PubSub (publisher/subscriber) or event dispatcher/listeners pattern. The publisher is sometimes called the subject, and the subcribers are something called observers. */

class Subject {
  constructor() {
    this._observers = [];
  }
  subscribe(observer) {
    this._observers.push(observer);
  }
  unsubscribe(observer) {
    this._observers.filter((obs) => observer !== obs);
  }

  fire(change) {
    this._observers.forEach((observer) => {
      observer.update(change);
    });
  }
}

class Observer {
  constructor(state) {
    this.state = state;
    this.initialState = state;
  }

  update(change) {
    let state = this.state;
    switch (change) {
      case "INC": {
        this.state = ++state;
        break;
      }
      case "DEC": {
        this.state = --state;
        break;
      }
      default: {
        this.state = this.initialState;
      }
    }
  }
}

// usage
const sub = new Subject();

const obs1 = new Observer(1);
const obs2 = new Observer(2);

sub.subscribe(obs1);
sub.subscribe(obs2);

sub.fire("INC");

console.log(obs1.state); // 2
console.log(obs2.state); // 3

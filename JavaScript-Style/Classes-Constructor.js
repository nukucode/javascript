//: 9.1 => Always use class. Avoid manipulating prototype directly.

/* Why? Class syntax is more concise and easier to reason about. */

// bad
function Queue(contents = []) {
  this.queue = [...contents];
}
Queue.prototype.pop = function () {
  const value = this.queue[0];
  this.queue.splice(0, 1);
  return value;
};

// class
class Queue {
  constructor(contents = []) {
    this.queue = [...contents];
  }
  pop() {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
  }
}

//: 9.2 => Use extends for inheritance

/* Why? It is a built-in way to inherit prototype functionality without breaking instancof. */

// bad
const inherits = require("inherits");
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function () {
  return this.queue[0];
};

// good
class PeekableQueue extends Queue {
  peek() {
    return this.queue[0];
  }
}

//: 9.3 => Methods can return this to help with method chaining.

// bad
Jedi.prototype.jump = function () {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function (height) {
  this.height = height;
};

const luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// good
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke2 = new Jedi();

luke.jump().setHeight(20);

//: 9.4 => /* It's okay to write a custom toString() method, just make sure it works successfully and causes no side effects. */

class Jedi {
  constructor(options = {}) {
    this.name = options.name || "no name";
  }

  getName() {
    return this.name;
  }

  toString() {
    return `Jedi - ${this.getName()}`;
  }
}

//: 9.5 => /* Classes have a default constructor if one is not specified. An empty constructor function or one that just delegates to a parent class is unnecessary. eslint: no-useless-constructor */


// bad
class Jedi {
  constructor() {}

  getName() {
    return this.name;
  }
}

// bad
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
  }
}

// good
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
    this.name = 'Rey';
  }
}

//: Avoid duplicate class members. eslint: no-dupe-class-members

/* Why? Duplicate class member declarations will silently prefer the last one - having duplicates is almost certainly a bug. */

// bad
class Foo {
  bar() { return 1; }
  bar() { return 2; }
}

// good
class Foo {
  bar() { return 1; }
}

// good
class Foo {
  bar() { return 2; }
}

// bad
class Foo {
  bar() {
    console.log('bar');
  }
}

// good - this is used
class Foo {
  bar() {
    console.log(this.bar);
  }
}

// good - constructor is exempt
class Foo {
  constructor() {
    // ...
  }
}

// good - static methods aren't expected to use this
class Foo {
  static bar() {
    console.log('bar');
  }
}
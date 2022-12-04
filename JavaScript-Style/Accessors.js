//: 21.1 => Accessor functions for properties are not required

//: 21.2 => /* Do not use JavaScript getters/setters as they cause unexpected side effects and harder to test, maintainm and reason about. Instead, if you do make accessor functions, use getVal() and setVal("hello") * /

// bad
class Dragon {
  get age() {
    //...
  }

  set age(value) {
    //...
  }
}

// good
class Dragon {
  getAge() {
    // ...
  }

  setAge(value) {
    // ...
  }
}

//: 21.3 => If the property/method is a boolean, use isVal() or hasVal().

// bad
if (!dragon.age()) {
  return false;
}

// good
if (!dragon.hasAge()) {
  return false;
}

//: 21.4 => It's okay to create get() and set() function, but be consistent.


class Jedi {
  constructor(options = {}) {
    const lightsaber = options.lightsaber || "blue";
    this.set("lightsaber", lightsaber);
  }

  set(key, val) {
    this[key] = val;
  }

  get(key) {
    return this[key];
  }
}
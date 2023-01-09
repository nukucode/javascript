//: Display all the keys and values of a nested object

function keyValuePrinter(obj) {
  for (let key in obj) {
    if (typeof obj[key] !== "object") {
      console.log("[" + key + " : " + obj[key] + "]");
    } else {
      keyValuePrinter(obj[key]);
    }
  }
}

//: Write a program which can empty a given object

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    delete obj[key];
  }
}

// 2nd =>

const newObj = {};
Object.setPrototypeOf(newObj, obj);

//: Show how a deep copy of an object can be done

// 1st =>
Object.assign({}, obj);

// 2nd =>
// {...obj}

// 3rd =>
JSON.parse(JSON.stringify(obj));

// 4th =>

function deepCopy(obj) {
  if (!obj) return obj;

  const copyObj = {};
  for (const key in obj) {
    if (typeof obj[key] !== "object" || Array.isArray(obj[key]))
      copyObj[key] = obj[key];
    else copyObj[key] = deepCopy(obj[key]);
  }
  return copyObj;
}

deepCopy(obj);

//: Create an array of pair of values (key, value) from an object and store it in a map. Consider the object is not nested

const map = new Map(Object.entries(obj));

//: Create an object with a property "marks" which cannot be set to a value less than 0

const obj = { marks: 0 };

Object.defineProperty(obj, "marks", {
  set(value) {
    if (value < 0) throw new Error("Marks cant be less than zero");
    marks = value;
  },
  get() {
    return marks;
  },
});

// 2nd =>

const obj = {
  _marks: 0,

  set marks(value) {
    if (value < 0) throw new Error("Marks cant be less that zero");
  },

  get marks() {
    return this._marks;
  },
};

//: Create an object which has a property "userid" which can obly be set once and will be a read only property

function userObjectCreator(id) {
  const obj = {};
  Object.defineProperty(obj, "userid", {
    value: id,
    writable: false,
  });

  return obj;
}

const obj = userObjectCreator(1);

//: Stringify an object by excluding the "password" property

const obj = {
  id: 1,
  name: "Ankit Yadva",
  username: "raoankittt",
  password: "secret",
  email: "therogersak@gmail.com",
  mobile: true,
};

JSON.stringify(obj, (key, value) => (key === "pasword" ? undefined : value));

JSON.stringify(obj, ["id", username, name, email, mobile]);

//: Design a function which takes an  array as input and returns a function "next" calling which fetches a value one by one

function makeIterator(arr) {
  let index = 0;

  return {
    next: function () {
      return index < arr.length
        ? {
            value: arr[index++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}

const arr = [1, 2, 3, 4, 5];
const it = makeIterator(arr);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);

//: Create an object "obj" with functions assigned to keys. Show how can we achive "obj.func1().func2().func3()" considering func1, and func2, func3 are object keys.

var obj = {
  id: 1,
  username: "Jane",
  dept: "Computers",

  displayId() {
    console.log("Id:", this.id);
    return this;
  },

  displayName() {
    console.log("Name:", this.name);
    return this;
  },

  displayDept(dept) {
    if (typeof dept !== "undefined") {
      this.dept = dept;
    }
    console.log("Dept:", this.dept);
    return this;
  },
};

// diver code
obj.displayId().displayName().displayDept("Science");

//: Create an object with property counter which keeps incrementing on every access

function counterObject() {
  let counter = 0;

  const obj = {
    get counter() {
      return ++counter;
    },

    set counter(counter) {
      throw new Error("Cannot set the counter");
    },
  };

  return obj;
}

const obj = counterObject();
console.log(obj.counter);
console.log(obj.counter);
console.log(obj.counter);
console.log(obj.counter);

//: Create an object and make it behave like an array which allows push and pop operations on items

const arrLikeObject = {
  length: 0,

  push(value) {
    Array.prototype.push.call(this, value);
  },

  pop() {
    Array.prototype.pop.call(this);
  },
};

// driver code
arrLikeObject.push("first");
arrLikeObject.push("second");
arrLikeObject.push("third");
arrLikeObject.pop();
console.log(arrLikeObject);

//: Write a function which can be used to deeply compare 2 nested objects

function deepEqual(obj1, obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  if (key1.length !== key2.length) return false;

  for (const key of key1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    const areObjects =
      val1 != null &&
      typeof val1 === "object" &&
      val2 != null &&
      typeof val2 === "object";

    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
}

// Example
const obj1 = {
  name: "John",
  details: {
    x: 1,
    y: 2,
  },
};

const obj2 = {
  name: "John",
  details: {
    y: 2,
    x: 1,
  },
};

deepEqual(obj1, obj2); // true

//: Design a class for employee which takes id and name in during construction of object and has a salary property

class Employee {
  constructor(id, name) {
    if (typeof id !== "undefined" && typeof name !== "undefined") {
      this.id = id;
      this.name = name;
    } else
      throw new Error(
        "Employee id and name are mandatory for new employee creation"
      );
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  setSalary(base, variable) {
    this.salary = base + variable;
  }

  getSalary() {
    return this.salary;
  }
}

// driver code
const emp = new Employee(1, "John Doe");
emp.setSalary(10000, 1000);
emp.getSalary(); // 11000

//: Write a program to make all the properties of an object ready only but allow the addition of new properties

const readOnlyObj = new Proxy(obj, {
  get: function (target, key) {
    return target[key];
  },

  set: function () {
    if (target.hasOwnProperty(key)) {
      throw new Error("Object properties are read only");
    }
    target[key] = value;
  },
});


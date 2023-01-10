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

//: Deep object copy

const person = {
  name: "John",
  age: 18,
  skills: ["Java", "HTML"],
};

const copiedObj = JSON.parse(JSON.stringify(person));

console.log(person.skills === copiedObj.skills); // false

//: Write a program which can return a boolean if value is present in the range given start and end values in an object.

let range = {
  start: 10,
  end: 20,
};

const rangeFinder = new Proxy(range, {
  has(target, value) {
    return value >= target.start && value <= target.end;
  },
});

//: Write a function which accepts a topic and a list of related tags to store information. The same function should return all the topic when requested with a tagname

function TagManager() {
  const map = new Map();

  function addTags(topic, tagText) {
    const tagsArr = tagText.split(",").map((tag) => tag.trim());

    tagsArr.forEach((tag) => {
      if (map.has(tag)) {
        map.get(tag).push(topic);
      } else {
        map.set(tag, [topic]);
      }
    });
  }

  function getTopics(tag) {
    return map.get(tag);
  }

  return {
    addTags,
    getTopics,
  };
}

// Example
const tagManager = TagManager();
tagManager.addTags("React", "Redux, JSX, JavaScript, VDOM");
tagManager.addTags("Angular", "RxJS, TypeScript, JavaScript");
tagManager.addTags("Vue", "VDOM, JavaScript");

tagManager.getTopics.getTopics("VDOM"); // React, Vue
tagManager.getTopics.getTopics("JavaScript"); // React, Angular, Vue

//: Write a function which accepts a collection of values & an iteratee as arguments and returns a grouped object

function groupBy(values, iteratee) {
  const obj = {};
  for (let value of values) {
    const prop =
      typeof iteratee === "function" ? iteratee(value) : value[iteratee];

    prop in obj ? obj[prop].push(value) : (obj[prop] = [value]);
  }

  return obj;
}

console.log(groupBy([1.2, 1.3, 1.4, 1.5, 3, 3], Math.floor));

console.log(groupBy(["one", "two", "three"], "length"));

//: Design a uitility on an array of objects where the access can be made to the object using index (as usual) and also from primary key of the object.

// Example
const employees = [
  { name: "John", id: "1" },
  { name: "Jane", id: "2" },
  { name: "Pai", id: "0" },
];

const flexEmployees = new Proxy(employees, {
  get(target, handler) {
    if (handler in target) {
      return target[handler];
    }
    if (typeof handler === "string") {
      return target.find((obj) => obj.name === handler);
    } else {
      return undefined;
    }
  },
});

flexEmployees[0]; // { name: 'John', id: '1' }
flexEmployees["Pai"]; // { name: 'Pai', id: '0' }
flexEmployees["doe"]; // undefined

//: Write a function which recives an object and return a true if the object has circular reference

function doesObjectHaveCircularReference(obj) {
  try {
    JSON.stringify(circularReference);
    return true;
  } catch {
    return false;
  }
}

// Example
var circularReferenceObj = { data: 123 };
circularReferenceObj.myself = circularReferenceObj;

//: Write a code which can eliminate circular references in an object (cyclic reference in an object)

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

JSON.stringify(circularReferenceObj, getCircularReplacer());

// 2nd =>

function removeCircularRef(obj) {
  const set = new WeakSet([obj]);

  (function iterateObj(obj = circularReference) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object")
          if (set.has(obj[key])) delete obj[key];
          else {
            set.add(obj[key]);
            iterateObj(obj[key]);
          }
      }
    }
  })();
}

//: Provide an object on which a value can be set to nested property even if it does not exist.

function ProxyObject(obj) {
  return new Proxy(obj, {
    get: (target, property) => {
      if (!(property in target)) {
        target[property] = new ProxyObject({});
      }
      return target[property];
    },
  });
}

// driver code
const obj = new ProxyObject({});
obj.x.y.z = "nested value";

obj.x.y.z; // nested value
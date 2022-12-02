//: Use the literal syntax for object creation eslint:no-new-object

// bad
const item = new Object();

// good
const object = {};

//: Use computed property names when creating objects with dynamic property names.

/* Why? They allow you to define all the properties of an object in one place. */

function getKey(key) {
  return `a key named ${key}`;
}

// bad
const obj = {
  id: 1,
  name: "Ankit Yadav",
};
obj[getKey("enabled")] = true;

// good
const obj2 = {
  id: 2,
  name: "Manish Yadav",
  [getKey("enabled")]: true,
};

//: Use object method shorthand eslint:object-shorthand

// bad
const atom = {
  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};

// good
const atom2 = {
  value: 1,

  addValue(value) {
    return atom2.value + value;
  },
};

//: Use property value shorthand. eslint:object-shorthand

const name = "Ankit Yadav";

// bad
const person = {
  name: name,
};

// good
const person2 = {
  name,
};

//: Group your shorthand properties at the beginning of your object declaration.

/* Why? It's easier to tell which properties are using the shorthand. */

// bad
const about = {
  episodeOne: 1,
  episodeTwo: 2,
  name,
  age: 18,
};

// Good
const about2 = {
  name,
  episodeOne: 1,
  episodeTwo: 2,
  age: 18,
};

//: Only Quote properties that are invalid identifiers. eslint:quote-props

/* Why? In general we consider it subjectively easier to read. It improves syntax highlighting,  and is also more easily optimized by many Js Engines. */

// bad
const bad = {
  foo: 3,
  bar: 2,
  "data-blah": 5,
};

// good
const good = {
  foo: 1,
  bar: 5,
  "data-blah": 5,
};

//: Do not call Object.prototype methods directly, such as hasOwnProperty, propertyIsEnumerable, and isPrototypeOf. eslint:no-prototype-builtins

/* Why? These methods may be shadowed by properties on the object in question-consider {hasOwnProperty: false} - or, the object may be a null Object.create(null) */

// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// Best
const has = Object.prototype.hasOwnProperty;
console.log(has.call(object, key));
//? Or
import has from "has"; // https://www.npmjs.com/package/has
console.log(has(object, key));

//: 3.8 =>

/* Prefer the object spread syntax over Object.assign to shallow-copy objects. Use the object rest parameter syntax to get a new object with certain properties omitted. eslint:prefer-object-spread */

// very bad
const original = { a: 1, b: 2, c: 3 };
const copy = Object.assign(original, { d: 4 });
delete copy.a; // so does this

// bad
const copy2 = Object.assign({}, original, { d: 4 });

// good
const copy3 = { ...original, d: 4 };

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }

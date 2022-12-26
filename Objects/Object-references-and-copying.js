//: OBJECT REFERENCE AND COPYING

/* One of the fundamental difference of objects versus primitives is that objects are stored and copied "by reference", whereas primitive values: string, number, booleans, - are always copied "as a whole value" */

let user = { name: "Ankit" };

let admin = user; // -> copy the reference

// we can use either variable to access the object and modify its contents:

admin.name = "therogersak"; // -> Changed by the "admin" reference

user.name; // "Ankit", changes are seen from the "user" reference

// Comparison by reference

let a = {};
let b = a;

console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true

// And how independent objects are not equal, event though they look alike (both are empty)

let x = {};
let y = {}; // two independent objects

console.log(x == b); // false

// Cloning and merging, Object.assign

let Person = {
  name: "Ankit",
  age: 18,
};

let clone = {};

for (let key in Person) {
  clone[key] = Person[key];
}

// now clone is a fully independent object with the same content
clone.name = "therogers";

// We can also use the method Object.assign

Object.assign(dest, ...soucre);

// => The first dest argument is a target object
// => Futher argument is a list of source object

let Car = {
  name: "TATA XP",
};

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(Car, permissions1, permissions2);

Car.name; // true
Car.canView; // true
Car.canEdit; // true

// Nested cloning

let name = {
  firstName: "Ankit",
  lastName: "Yadav",
  sizes: {
    height: 182,
    width: 340,
  },
};

let clone2 = Object.assign({}, name);

console.log(name === clone2); // true, same object

// => structuredClone

// The call structuredClone(object) clones the object with 
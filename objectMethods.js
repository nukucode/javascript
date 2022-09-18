// Object Methods

const aboutMe = {
  name: "Ankit Yadav",
  age: 18,
  occupation: "Engineer",
  level: 5,
};

// 1. Object.keys();

/// a simple way to iterate over an object and return all of the object's keys

console.log(Object.keys(aboutMe)); // ["name","age","occupation","level"]

// 2. Object.values();

/// iterates over the object and return the object's values!

console.log(Object.values(aboutMe)); // [ 'Ankit Yadav', 18, 'Engineer', 5 ]

// 3. Object.entries()

console.log(Object.entries(aboutMe));
// [
//     [ 'name', 'Ankit Yadav' ],
//     [ 'age', 18 ],
//     [ 'occupation', 'Engineer' ],
//     [ 'level', 5 ]
//   ]

// */ on more example of Object.entries

const drinks = {
  maple: "Out of stocks",
  orange: "3.5",
};

for (let [name, cost] of Object.entries(drinks)) {
  console.log(`${name}: ${cost}`);
}

// * maple: Out of stocks
// * orange: 3.5

// 4. Object.create()

/// * create a new object, using an exisitng object as the prototype of the newly created object.

let student = {
  name: "pushpa",

  display() {
    console.log("Name", this.name);
  },
};

let std1 = Object.create(student);

std1.name = "pushpa2";

std1.display();

// * "Name" "pushpa2"

// 5. Object.assign()

/// * Copies all enumerable and own properties from the soucre objects to the target object. it return the target object. it is also called shallow copy

const target = { a: 1, b: 2 };
const soucre = { b: 3, d: 4 };

const returnedTarget = Object.assign(target, soucre);
console.log(target);
console.log(soucre);
console.log(returnedTarget);

// 6. Object.seal()

// * Seals an object which prevent new properties from being added to it and marks all existing properties as non-configurable

const car = {
  price: 5000,
};

Object.seal(car);
car.price = 6000;
console.log(car.price);
// 6000

delete car.price; // * cannot delete when sealed
console.log(car.price);
// 6000

// 7. object.Freeze()

// * Freezes an object. A frozen object can no longer be changed; this means:

const client = {
  buget: 1000,
};

Object.freeze(client);
client.buget = 10000; // shows error in strict mode
console.log(client.buget); // unchanged value as output
// 1000;

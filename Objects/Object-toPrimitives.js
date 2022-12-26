//: OBJECT TO PRIMITIVES

//* Conversion Rules

/* => There's no conversion to boolean. All object are true in a boolean context, as simple as that,

=> The numeric conversion happens when we subtract or apply mathmatical function. For instance Data object can be subtracted, and the result of dat1- date2.

=> As for the string conversion - it usually happens when we output an object with alert(obj) and in similar contexts*/

//* Hints
/* There are three variants of type conversion, that happen in various situations. They're called "hints" */

// "string" =>

alert(obj);

// using object as a property key
anotherObj[obj] = 123;

// "number" =>

// explicit conversion
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;

// "Default"
/* Occurs in rare cases when the operators is "not sure" what type to expect */

// binary plus uses the "default" hint
let total = obj1 + obj2;

// obj == number uses the "default" hint
if (user == 1) {
}

//* Symbol.toPrimitive
/* There's a built-in symbol named Symbol.toPrimitive that should be used to name the conversion method, */

let user = {
  name: "Jhon",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}}` : this.money;
  },
};

console.log(user);
console.log(+user);
console.log(user + 500);

//* toString/valueOf

let person = { name: "Jhon" };

console.log(user); // [object Object]
console.log(person.valueOf() === user); // => true

let car = {
  name: "TATA XP",
  money: 100000,

  // for hint="string"
  toString() {
    return `name: ${this.name}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  },
};

console.log(car); // => {name: "TATA Xp"}
console.log(+car); // => 1000
console.log(car + 1000); // => 1500

//* Further conversions

let obj = {
  // toString handles all conversion in the absence of other methods
  toString() {
    return "10";
  },
};

console.log(obj * 10); // 100

let obj2 = {
  toString() {
    return "2";
  },
};

//? Binary plus operator concatenat a value

alert(obj2 + 2); // 22 ("2" + 2), conversion to primitive returned a string => concatenation

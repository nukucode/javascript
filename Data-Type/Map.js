//: Map IN Javascript

/* 
Arrays are used for storing ordered collections. 
   Object are Used for storing keyed collections.
*/

//# Map

/* => Map is a collection of keyed data items, just like an Object. But the main diffrence is that Map allows keys of any type */

// Methods and Properties are:

/* 
 1.new Map() - create the map.
 2.map.set(key,value) - stores the value by the key
 3.map.get(key) - return the value by the key, undefined if key doesn't exist in map.
 4.map.has(key) - return true if the key exist, false otherwise 
 5.map.delete(key) - removes the value by the key.
 6.map.clear() - removes everything from the map
 7.map.size - return the current element count.
*/

let map = new Map();

map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:

console.log(map.get(1)); // "num1"
console.log(map.get("1")); // "str1"
console.log(map.get(true)); // "bool1"

console.log("Size", map.size); // 3

/* As we can see, unlike objects, keys are not converted to string. Any type of key is possible */

//* map[Key] isn't the right way to use a Map

map[2] = "num2";

/* Although map[Key] also works, e.g. we can set map[key] = 2, this is treating map as a plain Javascript object. so it implies all corresponding limitations (only string/symbol keys and so on).

So we should use map methods set, get and so on.
*/

//! Map can also use objects as keys

let person = { name: "Rogers" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

visitsCountMap.set(person, 300);
console.log(visitsCountMap.get(person)); // 300

/* Using objects as Keys is one the most notable and important Map features. The same does not ocunt the Object. String as a key in Object is fine, but we can't use another Object as a key in Object. */

let john = { name: "Jhon" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 235; // try to use object as the key
visitsCountObj[john] = 123; // try to use jhon object as the key, ben object will get replaced

// that's what go wrriten!
console.log(visitsCountObj);

/* As visitsCountObj is an object, it converts all object keys, such as jhon and ben above, to same string "[object Object]". Definitely not what we want. */

//* How Map compares keys

/* To test keys for equivalence, Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be used as the key as well.

This algorithm can't be changed or customized.
*/

//* Chaining

/* Every map.set call return the map itself, so we can "chain" the calls: */

map.set("2", "str2").set(3, "num3").set(true, "boole2");

//* iteration over Map

/* => For looping over a Map, there are 3 methods:
 
1.map.keys() - return an iterable for keys
2.map.values() - return an iterable for values,
3.map.entries - return an iterable for entries [key, value], it's used by default in for..of.
*/

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 300],
  ["onion", 100],
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over value (amount)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 300, 100
}

// iterate over [key, value] entries
for (let entry of recipeMap.entries()) {
  console.log(entry); // [ 'cucumber', 500 ][ 'tomatoes', 300 ][ 'onion', 100 ]
}

//! The insertion order is used

/* The insertion goes in the same order as the value inseted. Map preserves this order, unlike a regular object. */

// Besides that, Map has a built-in forEach methods, similar to Array:

recipeMap.forEach((key, value, map) => {
  console.log(`${key} : ${value}`); // 500 : cucumber 300 : tomatoes 100 : onion
});

//* Object.entries: Map from object

/* When a map is created, we can pass an array (or another) */

let map2 = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "boolean1"],
]);

console.log(map2.get("1")); // str1

/* If we have a plain object. and we'd like to create a Map from it, then we can use built-in method Object.entries(obj) that return an array of key/value pairs for an object exactly in that format. */

let obj = {
  name: "Rogers",
  age: 18,
};

const newMap = new Map(Object.entries(obj));
console.log(newMap.get("name")); // Rogers

/* Here Object.entries return the array of key/value pairs: [["name", "rogers"], ["age", 18]]. That's what Map Needs */

//* Object.fromEntries: Object from Map

/* We've just see how to create Map from a plain Object with Object.entries(obj).

There's Object.fromEntries methods that does the revers: given an array of [key, value] pairs, it creates an Object from them
*/

let prices = Object.fromEntries([
  ["orange", 2],
  ["banana", 1],
  ["mango", 4],
]);

console.log(prices); // { banana: 1, orange: 2, mango: 4 }

// We can use Object.fromEntries to get a plain object from Map.

let newMap2 = new Map();
newMap2.set("banana", 1).set("orange", 3).set("Mango", 5);

let getObj = Object.fromEntries(newMap2.entries());

console.log(getObj); // { banana: 1, orange: 3, Mango: 5 }

/* A call to map.entries() returns an iterable of key/value pairs, exactly in the right format for Object.fromEntries.
 */

let obj2 = Object.fromEntries(map); // omit .entries()

/* That the same, because Object.fromEntries expects an iterable object as the argument. Not necessarily an array. And the standard iteration for map return same key/value pairs as map.entries(). So we got a plain object with same key/value as the map */

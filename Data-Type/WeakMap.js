//# What is Garbage Collection?

/* 
   Javascript Garbage Collection is a form of memory
   management whereby objects that are no longer referenced are automatically deleted and their resources
   are reclaimed.
*/

//# Weak Collections

/* 
=> Map and Set's references to objects are strongly आयोजित and will not allow for garbage collection

=> WeakMap and WeakSet ES6 collection are "weak" because they allow for objects which are no longer needed to
cleared from memory
*/

//: WeakMap

/* A WeakMap is a Collection of key/value pairs whose keys
must be objects only. Primitive data types as keys are not
allowed.

=> WeakMap does not support iteration and methods keys(),
values(), entries(), so there's no way to get all keys or
values from it.
*/

//* Methods

/* 

1.weakMap.get(key)
2.weakMap.set(key, value)
3.weakMap.delete(key)
4.weakMap.has(key)
*/

const aboutAuthor = new WeakMap(); // create New WeakMap
const currentAge = {}; // key must be an object
const currentCity = {}; // key must be an object

aboutAuthor.set(currentAge, 18); // set key values
aboutAuthor.set(currentCity, "Jaipur"); // key value can be of different data types

console.log(aboutAuthor.has(currentCity)); // true

aboutAuthor.delete(currentAge); // Delete a key

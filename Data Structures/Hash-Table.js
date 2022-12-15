//: Hash Table

/* A Hash Table is a dictionary-like structure that pairs keys to values. The location in memory of each pair is determined by Hash Function, which accepts a key and returns the address where the pair should be inserted and retrieved. */

//* Using Object Type

/* The simplest implementation is using the Object data type. This is because all non-scalar objects in JavaScript behave as associative arrays, a mapping from property keys to values. So an Object itself can behave as a basic hash table. */

let simpleHash = new Object();
// or
// let simplehash = ()

simpleHash["key1"] = "value1";
simpleHash["key2"] = "value2";
simpleHash["key3"] = "value3";

for (let key in simpleHash) {
  if (simpleHash.hasOwnProperty(key)) {
    console.log(`${key} : ${simpleHash[key]}`);
  }
}

/* => The Object comes with its own properties which could collide with potential key names.

=> There no easy way to get the size of a Hash Table stored in an Object, so it must be tracked manually.

S=> ince they are also property names, the keys used are limited to String or Symbol types.

=> Object isn’t optimized for frequent additions and removals of key-value pairs */

//* Using a Map Object

/* A Map object was created to implement this type of associative array without some of the downsides of using basic object:

=> There are no pre-exiting keys that could result in a collision.
=> A Map object has a size property to track its contents.
=> A Map object can have keys that are any data type.
=> A Map has optimized for repeated addition and insertion of key-value pairs.


Note: Key-value pairs must be set with the set method in order for the Map object to behave as expected. Using the syntax for Object above will appear to work, but will not associate the key-value pair to its internal collection.
*/

var mapHash = new Map();

maphash.set("key1", "value1");
maphash.set("key2", "value2");
maphash.set("key3", "value3");


console.log(maphash.get('key3'));
// Output: value3

maphash.set('key1', 'new value');

console.log(maphash.get('key1'));
// Output: new value

console.log(maphash.size);
// Output: 3

maphash.delete('key2');

console.log(maphash.size);
// Output: 2

for (const [key, value] of maphash) {
  console.log(key + ' = ' + value);
}
// Output: key1 = new value
//         key3 = value3
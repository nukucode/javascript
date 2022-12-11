//: Native JavaScript Data structures

//* Arrays

/* An array is a linear data structure that represents a collection of elements. In JavaScript, arrays don't have a fixed size, while their contenets can be of any valid type, even arrays themselves. Arrays are probably the most commonly used data structure and come with a plethora of methods that allow easy manipulation and transformation of their contents. */

const nums = [1, 2, 3];
const strs = Array.from("est");

nums.push(6);
nums.push(4, 8);
strs.unshift("t");

nums.length;
nums[nums.length - 1];
strs[0];
strs[2];

nums.slice(1, 2);
nums.map((x) => x * 2);
nums.filter((x) => x !== 1);
nums.reduce((a, n) => a + n, 0);

strs.reverse();
strs.join();

//* Set

/* A set is linear data structure that represent an ordered collection of unique Values. Sets in JavaScript can any valid type of value, however each node can only occur once based an value equality checking. */

const nums = new Set([1, 2, 3]);

nums.add(4);
nums.add(1);
nums.add(5);
nums.add(4);

nums.size; // 5
nums.has(4); // true

nums.delete(4);
nums.has(4); // false

[...nums]; // [1, 2, 3, 5]

nums.clear();
nums.size; // 0

//* Maps

/* A map is an associative data structure that represent a keyed collection of elements. Each key in a JavaScript Map has to be unique and either a primitive value or an object, whereas the values of the map can be of any valid type. */

const items = new Map([
  [1, { name: 'John' }],
  [2, { name: 'Mary' }]
]);

items.set(4, { name: 'Alan' });
items.set(2, { name: 'Jeff' });

items.size;                      // 3
items.has(4);                    // true
items.get(2);                    // { name: 'Jeff' }

items.delete(2);
items.size;                      // 2

[...items.keys()];               // [1, 4]
[...items.values()];             // [{ name: 'John' }, { name: 'Alan' }]

items.clear();
items.size;                      // 0
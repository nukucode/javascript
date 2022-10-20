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

//: WeakSet

/* 
=> WeakSet behaves similarly to WeakMap
=> Similar to set, but we can only add objects (not primitive types)
=> An object exists in the set as long as it can be
accessend from elsewhere.
=> Like set, it support add, has, and delete, but not size,
keys(), and iterations.
*/

//# Methods

/* 
1.weakSet.add(key)
2.weakSet.delete(key)
3.weakSet.has(key) 
*/

//* Example

/* 
we are on a page where we are showing Messages and we are
showing unread message as notification. When a message is
deletedm it will automatically be deleted from unread 
messages. 
*/

let message = [
  { text: "Hello", from: "Ankit" },
  { text: "Ram Ram", from: "therogersak" },
  { text: "Shree Ram Ji", from: "Ankit Yadav" },
  { text: "Jai Shree Ram", from: "Hanuman" },
];

let read = new WeakSet();

read.add(message[0]);
read.add(message[1]);
read.add(message[2]);
read.add(message[3]);
// a message can be read more than once. But the array will not change

message.shift();
// When the message is deleted. It is also deleted from the read

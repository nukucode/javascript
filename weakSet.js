// weakSet

/// WeakSet behaves similarly to Weakap
/// Similar to Set, but We can only add objects (not primitive types)

/// An Object exists in the set as long as it can be accessed from elsewhere.

/// Like set, it supports add, has, and delete, but not size, keys(), and iterations

// weakSet Methods
/// 1. weakSet.add(key)
/// 2. weakSet.delete(key)
/// 3. weakSet.has(key)

// example

let messages = [
  { text: "Hello Word", from: "therogersak" },
  { text: "I Love 3000", from: "Ironman" },
  { text: "I Can Do This All Day", from: "Captain America" },
];

const read = new WeakSet();

read.add(messages[0]);
read.add(messages[1]);
read.add(messages[0]);
read.add(messages[0]);
// A message can be read more than once. but the array will not change

messages.shift();
// when the message is delete. it is also delete from the read


// console.log(read.has(messages[0]))
// console.log(messages)
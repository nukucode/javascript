//: Set In Javascript

/* A Set special type collection - "set of values" (without keys), where each value may occur only once. */

/*
1.new Set(iterable) - creates the set, and if an iterable Object is provided (usually an array), copies value from it into the set.

2.set.add(value) - adds a value, return the set itself.
3.set.delete(value) - removes the value, return true if value existed at the moment of the call otherwise false.
4.set.has(value) - return true if the value exits in the set, otherwise false.
5.set.clear() - removes everything from the set.
6.set.size - is the elements count
*/

let set = new Set();

let john = { name: "Jhon" };
let pete = { name: "peter" };
let mary = { name: "mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(pete);

// set keeps only unique value
console.log(set.size); // 3

for (let user of set) {
  console.log(user.name); // Jhon, peter, mary
}

//* Iteration over Set

// we can loop over a set either with for..of or using forEach

let newSet = new Set(["Orange", "apple", "bananas"]);

for (let value of newSet) console.log(value);

// the same with forEach
newSet.forEach((value, valueAgain, newSet) => {
  console.log(value);
});

/* Note the funny thing. The callback function passed in forEach has 3 arguments: a value, then the same value valueagain, and then the target object. indeed, the same value appears in the arguments twice */

//: 1. Defaul function parameter & function length property.

function foo(a, b = 10, c) {
  console.log(foo.length);
}

foo(1, 2, 3); // 1

//: 2. Object.defineProperty method and its default parameters.

const obj = {};

Object.defineProperty(obj, "name", {
  value: "therogersak",
});

console.log(obj.name);
delete obj.name; // TypeError: Cannot delete property "name"
console.log(obj.name);

/* Object.defineProperty(obj,prop,descriptors)
 => obj - the object on which to define or modify the property
 => prop - the name of the property to be defined or modified
 => descriptors - descriptors for the property
 
 Property descriptors are a set of flags that configure that property.
 
 There are two types of descriptors => data descriptors (value, writable, enumerable, configureabl) 
 => access descriptors (get and set)

 By default, properties added using Object.property() are not writable, not enumerable, and not configurable.

 The configurable attribute specifies whether the property can be removed from the object, and whether the property descriptor can be changed in the future. If true, then the property will be available for deletion and modification of its descriptor, if false, then no. The default will be set to false.
 */

//: Array.map & parseInt.

const numbers = ["1", "2", "3", "4", "5"].map(parseInt);
console.log(numbers)
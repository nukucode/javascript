//: 65+ JAVASCRIPT CODE SNIPPETS WITH EXPLANATIONS

//# Avoid the "delete" keyword

const person = {
  name: "therogersak",
  age: "18",
};

delete person.age;
console.log(person); // { name: 'therogersak' }

// do this

const person2 = {
  name: "Chris",
  age: 40,
};

const { age, ...newPerson2 } = person2;
console.log(newPerson2); // { name: 'Chris' }

/* Don't use delete to remove a property from an object.
This mutates the original object and can lead to unpredictable behavior which becomes difficult to debug.

Instead, use the rest operator to create a new copy without given property*/

//# Using a Falsy Bouncer

const evenNumbersSquared = [1, 2, 3, 4, 5, 6]
  .map((n) => {
    if (n % 2 !== 0) {
      return null;
    }

    return n * n;
  })
  .filter(Boolean);

console.log(evenNumbersSquared); // [ 4, 16, 36 ]

/* When passing the "Boolean" constructor directly to Array.filter as the first argument, it serves as a falsy bouncer.

This will filer all values that qualifies as falsy;
That is false, null, undefined, 0, NaN, and ""(empty string)
*/

//# Object Destructuring on arrays

const lords = ["Shiva", "Vishnu", "Hanuman", "Ganesh"];

const { 0: s, 1: v, 2: h, 3: g } = lords;

console.log(s, v, h, g); // Shiva Vishnu Hanuman Ganesh

/* You can destructure elements from an array using the same syntax as when destructuring for objects.

The property name corresponds to the index of the element in the array.

It's a convenient way to pull out specific elements from  an array in  a single clean line of code.
*/

//# Skip elements with Array Destructuring

const number = [1, 2, 3, 4, 5];

const [, , ...newNum] = number;
console.log(newNum); // [3,4,5]

/* You can use an Empty 'placeholder' comma to skip elements when destructuring arrays.

If you want to access the second or third from a list, or want to skip the first or second element (etc), this is a great and clean way to do it.
 */

//# Replacer function with JSON.stringFY

const foo = {
  bar: 40,
  baz: "qux",
};

const replacer = (key, value) => (key === "bar" ? value * 2 : value);

const fooStr = JSON.stringify(foo, replacer);
console.log(fooStr); // {"bar":80,"baz":"qux"}

/* The replacer function is the second argument to JSON.stringfy.
I alters the behavior of the stringfication process.

The argument can also be an array or type String or Number.
This becomes an "allowlist" that filters the properties of the object with the name included in the list
*/

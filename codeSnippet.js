// ?  Avoid Delete Keyword

// ! Don't use 'delete' to removes a property from an object

const rogers = {
  age: 18,
  handle: "therogersak",
};

delete rogers.handle;

console.log(rogers);
// {age: 18}

// * instead, use the rest operator to create a new copy without the given property

const rogers2 = {
  age: 18,
  handle: "therogersak",
};

const { age, ...newRogers } = rogers;
console.log(newRogers);
// {handle: 'therogersak'}

// * Explanation

/// Don't use delete to remove a property from a object. This mutates the original object and can lead to unpredictable behavior which becomes difficut to debug

/// Instead, use the rest operator to create a new copy without the given property

// ? Using A Falsy Brouncer

const evenNumberSquared = [1, 2, 3, 4]
  .map((n) => {
    if (n % 2 !== 0) {
      return null;
    }

    return n * 2;
  })
  .filter(Boolean);

console.log(evenNumberSquared);
// * Filter all falsy values:
// [null,4,null,16]

// *Explanation
// When passing the 'Boolean' constructor directly to Array.filter as the first arguments, it serve as a falsy bouncer

// * This will filter all values that qualifies as falsy;
// ! that is false, null, undfined, 0, NaN, and ""(empty string)

// ? Object Destructuring On Arrays

const names = [
  "Ankit Yadav",
  "Manish Yadav",
  "Rahul Yadav",
  "Abishek Yadav",
  "Rohit Yadav",
  "Shubham Yadav",
  "Abijeet Yadav",
];

const { 0: ak, 1: mk, 3: ab } = names;

console.log(ak); // Ankit Yadav
console.log(mk); // Manish Yadav
console.log(ab); // Abishek Yadav

// *Explanation
// You can destructuring elements from an array using the same syntax as when destructuring for objects.
// The Property name corresponds to the index of the element in the array.
// It's conevnient way to pull out specific elements from an array in a single clean line of code

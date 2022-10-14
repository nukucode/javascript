//: ES6 Spread/Rest Operator tricks you must know

//# Add property conditionally to an Object.

/* We can use a neat spread operator trick to conditinally add a property when certain condition is satisfied.  */

function addUser(name, gender) {
  return {
    name: name,
    ...(gender == null ? {} : { gender }),
  };
}

console.log(addUser("Rogers", "Male")); // { name: 'Rogers', gender: 'Male' }
console.log(addUser("Rogers")); // { name: 'Rogers' }

//# Rename/Replace a Property

/* IN Some Cases, you might need to rename/replace certain properties from an Object. */

const user = { name: "Rogers", gender: "Male" };
const renameGenderOfUser = ({ gender: sex, ...rest }) => ({ sex, ...rest });

console.log(renameGenderOfUser(user)); //{ sex: 'Male', name: 'Rogers' }

//# Set Default Propeties

/* While dealing with objects in Javascript, we want to make sure f the consistency of the object. Especially in function parameters, we want to always have a default value no matter if it was supplied as an argument or not. Here is how you make sure of that using the rest operator in javascript */

const DEFAULT = { name: "", sex: "UNKOWN" };

function constuctorUser(user) {
  return {
    ...DEFAULT,
    ...user,
  };
}

console.log(constuctorUser({ name: "Rogers", sex: "Male" })); // { name: 'Rogers', sex: 'Male' }

//# Batch Push in Arrays

/* Have you ever wondered how to push multiple values into an array without having to use a loop? Well you know now. */

const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];

// works as well
arr2.forEach((a) => arr.push(a));

// Better
arr.push(...arr2);

//# Delete a Property

/* Most you probably use delete statement to delete a property from an Object. Delete statement is found to have performance problems because it changes the shape of an oBJECT. WE can instead use spread operator way that acts exactly like a delete. */

const person = {
  name: "Shera",
  age: "18",
};

// Do not use this
delete person.age;

// do this intead
const { age, ...newPerson } = person;
console.log(newPerson);

//# Remove Duplicates from an array

/* You can remove duplicates from an array using a spread operator. Most people tell you to use Set operator to remove duplicates as shown below. */

const duplicatesList = [1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6, 7];

const unique = [...new Set(duplicatesList)];
console.log(unique); // [1,2,3,4,5,6,7]

/* But Set Operator only works for primitive data types(String, numbers, boolean, etc). Here is a single function that removes duplicates from primitive as well as object in Javascript */

function removeDuplicates(array = [], uniqueKey) {
  return [
    ...new Map(
      array
        .map((item) => [uniqueKey == null ? item : item[uniqueKey], item])
        .values()
    ),
  ];
}

const dupli = [
  { name: "Rogers", sex: "M" },
  { name: "Miya", sex: "UNKOWN" },
  { name: "Nike", sex: "M" },
];

console.log(removeDuplicates(dupli));

/* Using Map constuctor in Javascript, we can remove duplicate itmes that are either primitive or special data types. For the object type, we need to pass a second argument indicating what should be the unique property from the object to filter the duplicate.

Use this function in your project to remove duplicates from any kind of array without a hassle
*/

//: Optional Chaining ==> (?.)

//? the Optinal chaining (?.) stops the evaluation if the the value before ?. is undefined or null and return undefined

//* Allows you to read the value of a deeply nested property without checking if it's a valid chain

//! old method
const hasValidPostcode = (u) =>
  u && u.address && u.address.passcode && u.address.passcode.valid;

//! new method
const hasValidPostcode1 = (u) => u?.address?.passcode?.valid;

const user = {};

console.log(user?.message?.first); // return undefined (no Error)

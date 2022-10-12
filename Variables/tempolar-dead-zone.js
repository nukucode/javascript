//: Temporal Dead Zone In Javascript

//* The Temporal Dead Zone is a behavior In Js that Occurs. When declaring a variabel with the let, const keywords but not with var

function somemethods() {
  console.log(first); // undefined
  console.log(second); // ReferenceError
  var first = 1;
  let second = 2;
}

somemethods();

//! In ECMAScript 6 (es6), accessing a let or const variable before it declaration (within its scope) causes a ReferenceError.

// The time span when that happens, between the creation of a variable's binding and it's declaration is called the tempolar dead zone.

//: Const IN Javascript

/* Variables declared with the const maintain constant values. const declarations share some similarities with let declarations. */

//# const declarations are block scoped

/* Like let declarations, const declarations can only be accessed within the block they were declared. */

//# const cannot be updated or re-declared

/* This means that the value of a variables declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can nethier do this: */

const name = "ankit";
name = "manish";

// nor this
const greeting = "Hello";
const greeting = "Say Hello";

// Every const declaration, therefore, must be initialized at the time of declaration.

/* This behavior is somehow different when it comes to objects declared with const. While a const object cannot be updated, the properties of this objects can be updated. Therefore, if we declare a const object as this: */

const person = {
  message: "Say Hi",
  times: 5,
};

// while we cannot do this:

person = {
  words: "Hello",
  number: "five",
};

// we can do this

person.message = "Say Hello instead";

// This will update the value of person.message without retunrning errors.

//# Hoisting of const

// Just like let, const declarations are hoisted to the top but are not initialized.

// So just in case you missed the differences, here they are:

/*
 ==> var declarations are globally scoped or function scoped while let and const are block scoped.

 ==> var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re declared.

 ==> They are all hoisted to the top of the their scope. But while var variables are initialized with undefined, let and const variables are not initialized.

 ==> While var and let can be declared without being initialized const must be initialized during declaration.
*/

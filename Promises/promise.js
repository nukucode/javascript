//: Promise In Javascript

//* In Javascript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not */

//! A promise may have one of three states.
/* Pending
   Fulfilled
   Rejected
*/

//* A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state*/

//! create a Promise

//* To create a promise object, we use the Promise() constuctor

let promis = new Promise(function (resolve, reject) {
  // do something
});

//? The Promise() constuctor takes a function as an argument. The function also accepts two functions resolve() and reject().

// If the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() function is called

var promise = new Promise(function (resolve, reject) {
  var x = 1;
  var y = 1;

  if (x === y) {
    console.log("Success, You are a Welcome");
    resolve();
  } else {
    console.log("Some Error has occurred");
    reject();
  }
});

promise
  .then(function () {
    console.log("Success");
  })
  .catch(function () {
    console.log("Error");
  });

/**
  //* Benefits Of Promise

   1. Improve Code Readabillity
   2. Better handling of asynchronous operation
   3. Better flow of control definition in asynchronous logic
   4. Better Error handling

   */

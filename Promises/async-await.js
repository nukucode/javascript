//* Async and await in Javascript

// -> Async

// we use the async keyword with a function to represent that the function is an asynchronous function. the async function returns a promise.

//! syntax
async function myFunction(parameters) {
  // statements
}

const name = async () => {
  let data = "therogersak";
  return data;
};

name().then((data) => console.log(data));

// -> await keyword

// the await keyword is used inside the async function to wait for the promise or asynchronous operation.

//! syntax
// let result = await promise;

// the use of await pauses the async function unil the promise return a result (resolve or reject) value

//! a promise
let promise = new Promise(function (resolve, reject) {
  setInterval(function () {
    resolve("fun is resolved");
  }, 4000);
});

//! async function

async function result() {
  const result = await promise;
  console.log(result);
  console.log("Hello World");
}

result(); // calling a function

// -> while using the async function, you write the code in  a synchronous manner. And you can also use the catch() method to catch the error. for example,

//! syntax

//asyncFun().catch(
// catch error and do something
//)

// The other way you can hundle an error is by using try/catch block

//! a promise
let promise2 = new Promise(function (resolve, reject) {
  setInterval(function () {
    resolve("function is resolved");
  }, 4000);
});

//! async function

async function asyncFun() {
  try {
    // wait unit the promise resolves
    const data = await promise2;
    console.log(data);
    console.log("Hello");
  } catch (error) {
    console.log(error);
  }
}

asyncFun(); // call async function

//? Benefits of using async Function
// the code more readable tha using a callback or a promise
// Error handling is simpler
// Debugging is easier

//: promise.all

/* Promise.all is a promise that takes an array (or an iterable) of promises as an input and it gets resolved when all the promise get resolved and get rejected immediately if any of the promise get rejected.   */

//# Example

const promise1 = new Promise((resolved, reject) => {
  setTimeout(() => {
    resolved("Promise1 Resolved");
  }, 2000);
});

const promise2 = new Promise((resolved, reject) => {
  setTimeout(() => {
    resolved("Promise2 Resolved");
  }, 1000);
});

const promise3 = new Promise((resolved, reject) => {
  setTimeout(() => {
    resolved("Promise3 Resolved");
  }, 2000);
});

Promise.all([promise1, promise2, promise3])
  .then((result) => console.log("Success", result))
  .catch((error) => console.log("Failed", error));

// Success [ 'Promise1 Resolved', 'Promise2 Resolved', 'Promise3 Resolved' ]

/* One interesting point about Promise.all() is that the
  order of the promise is maintained. */

//: Promise.allSettled()

/* Promise.allSettled will not fail once the first promise
is rejected (like promise.all)

Instead, it'll retrun a list of values. these values will be object, with two properties:

1. The status of the returned promise (either rejected or fulfilled)

2. The value of the fulfilled promise or the reason why a promise was rejected

*/

const prom1 = new Promise((resolved, reject) => {
  setTimeout(() => {
    resolved("Promise1 Resolved");
  }, 2000);
});

const prom2 = new Promise((resolved, reject) => {
  setTimeout(() => {
    reject("Promise2 Reject");
  }, 1000);
});

Promise.allSettled([prom1, prom2]).then((result) => console.log(result));

/* [
  { status: 'fulfilled', value: 'Promise1 Resolved' },
  { status: 'rejected', reason: 'Promise2 Resolved' }
] */

//: Promise.race()

/* Promise.race method return a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from the promise */

const pro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promsie1 Resolved");
  }, 1000);
});

const pro2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promsie2 Resolved");
  }, 200);
});

Promise.race([pro1, pro2])
  .then((result) => console.log("Success", result))
  .catch((error) => console.log("Reject", error));

//: Promise.any

/* Promise.any will return the first fulfilled promise, whereas Promise.race will return the first setteld promise

=> Promise.any will return AggregateError when all promise failed.
*/

const promis1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1 Resolved");
  }, 1000);
});

const promis2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2 Resolved");
  }, 1000);
});

Promise.any([promis1, promis2])
  .then((result) => console.log("Success", result))
  .catch((error) => console.log("Error", error));

//: Show the execution of 3 asynchronous block of code, one after the other in sequence

function asyncFunc() {
  console.log("Started asynchFunc1");
  //Async code 1
  setTimeout(() => {
    console.log("Complete asynchFunc1");
    console.log("Started asynchFunc2");
    //Async code 2
    setTimeout(() => {
      console.log("Complete asynchFunc2");
      console.log("Started asynchFunc3");
      //Async code 3
      setTimeout(() => {
        console.log("Complete asynchFunc3");
      }, 1000);
    }, 2000);
  }, 3000);
}

//: Write a code to make xmlHTTPRequest to get data the sever asynchronously

const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = function () {
  console.log(this.response);
};

xhr.onerror = function () {
  console.log(this.statusText);
};

xhr.send();

//: Show the working of promise along with resolve & reject code

function asyncResolveFunc() {
  function resolver(resolve, reject) {
    resolve("Success");
  }

  return new Promise(resolver);
}

function asyncRejectFunc() {
  function resolver(resolve, reject) {
    reject("Error");
  }

  return new Promise(resolver);
}

// driver code
const promiseSuccess = asyncResolveFunc();
const promiseError = asyncRejectFunc();

// Succeeded promise .then executes first function passed as argument
promiseSuccess.then(
  (successData) => {
    console.log(successData);
  },
  (failureData) => {
    console.log(failureData);
  }
);

// Failed promise .then executes second function passed as argument

promiseError.then(
  (successData) => {
    console.log(successData);
  },
  (failureData) => {
    console.log(failureData);
  }
);

//: Wrap the setTimeout function to convert to a promise

function setTimeoutPromise(delay) {
  function resolver(resolve) {
    setTimeout(resolve, delay);
  }

  return new Promise(resolver);
}

// driver code
console.log("Task Started");
const timeoutPromise = setTimeoutPromise(3000);
timeoutPromise.then(() => {
  console.log("Task Completed");
});

//: Convert the xmlHTTPRequest to promise based function to get the data from the server asynchronously (fetch)

function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
      try {
        if (this.status === 200) {
          resolve(this);
        } else {
          reject(this);
        }
      } catch (e) {
        reject(e);
      }
    };
    xhr.onerror = function () {
      reject(this);
    };
    xhr.send();
  });
}

// driver code
fetchData("https://reqbin.com/echo/get/json")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

//: Make a fetch request to retrieve and store JSON data from server

const response = fetch("https://reqbin.com/echo/get/json", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});

// driver code
response
  .then((data) => {
    const responseJson = data.json();
    responseJson.then((data) => {
      console.log(data);
    });
  })
  .catch((err) => console.log(err));

//: Cancel a fetch request

const controller = new AbortController();
var singnal = controller.signal;
fetch(url, singnal)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

controller.abort();

//: Show the working of async await work with promises

async function asyncAwaitFunction() {
  try {
    console.log("Executes normally when invoked");
    await promiseReturningFunc();
    console.log("Continues the execution after promise resolution");
  } catch (err) {
    console.log("Error occured:" + err);
  }
}

//: Write a code to resolve all the list of asynchronous executions of promises and stop if any of them is rejected. Print the output accordingly

const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map((async) => async());
finalResolution = Promise.all(promiseArr);
finalResolution
  .then((output) => {
    for (let data of output) {
      console.log(data);
    }
  })
  .catch((err) => console.log(err));

// 2nd

const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map((async) => async());
(async function () {
  try {
    output = await Promise.all(promiseArr);
    for (let data of output) {
      console.log(data);
    }
  } catch (err) {
    console.log(err);
  }
})();

//: Write a code to resolve all the list of asynchronous executions of promises no matter if each execution succeeds or fails. Print the output of each

const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map((async) => async());
finalResolution = Promise.allSettled(promiseArr);
finalResolution
  .then((output) => {
    for (let data of output) {
      if (data.status === "fulfilled")
        console.log(data.status + ": " + data.value);
      else if (data.status === "rejected")
        console.log(data.status + ": " + data.reason);
    }
  })
  .catch((err) => {
    console.log(err);
  });

//: Explain the working of Promise.race with few asynchronous function example

function asyncFunc1() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Resolved async1");
    }, 2000)
  );
}
function asyncFunc2() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Resolved async2");
    }, 3000)
  );
}
function asyncFunc3() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      reject("Rejected async3");
    }, 1000)
  );
}
// driver code
const asyncArr2 = [asyncFunc1, asyncFunc2, asyncFunc3];
const promiseArr2 = asyncArr2.map((async) => async());
Promise.race(promiseArr2).then(console.log).catch(console.log); // Rejected async3 (catch block)

//: Show me the working of a generator function

function* generatorFunc(param) {
  const num1 = yield;
  const num2 = yield;
  return num1 + num2;
}
// driver code
const it = generatorFunc();
it.next(); // { value: undefined, done: false}
it.next(3); // { value: undefined, done: false}
const sum = it.next(5); // { value: 8, done: true }
sum.value; // 8

//: Write a generator function which uses another generator function internally to fetch the values. Use for..of loop to consume the values

function* gen() {
  yield 1;
  yield* gen2();
  yield 4;
}

function* gen2() {
  yield 2;
  yield 3;
}

// driver code
for (let value of gene1()) {
  console.log(value);
}

//: Write an interface to mock Promise in JavaScript which can be called to create a promise with resolve and reject. Also implement then functionality

function MyPromise(resolver) {
  let successList = [];
  let failureList = [];
  let resolution = "pending";
  let data;
  function resolve(value) {
    if (resolution === "pending") {
      for (let successCb of successList) {
        successCb(value);
      }
      resolution = "resolved";
      data = value;
    }
  }
  function reject(value) {
    if (resolution === "pending") {
      for (let failureCb of failureList) {
        failureCb(value);
      }
      resolution = "rejected";
      data = value;
    }
  }
  setTimeout(() => {
    try {
      resolver(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }, 0);
  return {
    status: resolution,
    then: function (onSuccess, onFailure) {
      if (resolution === "pending") {
        successList.push(onSuccess);
        failureList.push(onFailure);
      } else {
        resolution === "resolved" ? onSuccess(data) : onFailure(data);
      }
    },
  };
}
// driver code
let p = new MyPromise((resolve, reject) => {
  resolve(10);
});
p.then((data) => console.log(data), console.log);

//: Show the  working generator function with promises

// asynchronous helper function returning a promise which gets resolved after the specified delay with data
function asyncFunc(data, delay) {
  return new Promise((resolve) => setTimeout(resolve, delay, data));
}
function* gen() {
  // async function calls to yield promise
  const num1 = yield asyncFunc(2, 1000);
  const num2 = yield asyncFunc(1, 2000);
  console.log(num1 + num2); // 3 (2 + 1)
}
function executeGeneratorWithPromise(gen) {
  const it = gen();
  // takes input as promise from generator
  function handle(promise) {
    if (!promise.done)
      promise.value
        .then((data) => {
          // continue the execution of generator after promise is resolved
          handle(it.next(data));
        })
        .catch((err) => iterator.throw(err));
  }
  handle(it.next());
}
// call generator executor function and pass generator function reference
executeGeneratorWithPromise(gen);

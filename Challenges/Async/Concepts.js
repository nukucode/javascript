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



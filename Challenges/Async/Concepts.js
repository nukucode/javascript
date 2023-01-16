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

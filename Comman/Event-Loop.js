//: Event Loop In Javascript

//* Call Stack

/* The call stack is a data structure that keeps track of the execution of JavaScript Code. As the name suggests, in's a stack, thus a LIFO (Last In Fast Out) data strcuture in memory. Each function that's executed is represented as a frame in the Call stack and placed on top of the previous function. */

function foo() {
  console.log("Hello Foo");
  bar();
}

function bar() {
  console.log("Hello Bar");
}

foo();

//* Event Loop =>

/* Event Loop is a loop that keeps running and checks if the call stack is empty. It processes Tasks and Microtasks, by placing them in the call stack one at a time also controls the rendering process. It's made up of four key steps: */

/* => 1.Script evaluation => Synchronously executes the script until the Call stack is empty.

=> 2.Task Processing: Select the first Task in the Task Queue and run it until the Call Stack is empty.

=> 3.Microtask processing: Select the first Microtask in the Microtask Queue and run it until the call stack is empty, repeating until the Microtask Queue is empty.

=> 4.Rendering: Re-render the UI and loop back to step2.*/

console.log("Script start");

setTimeout(() => console.log("seTimeOut()"), 0);

Promise.resolve()
  .then(() => console.log("Promise.then() #1"))
  .then(() => console.log("Promise.than() #2"));

console.log("Script end");


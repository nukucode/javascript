//: Call Stack

/* The stack is primarly used for function invocation(call). Since the call stack is single, function execution is done, one at a time, from top to bottom. It means the call stack is synchoronous.

=> A call stack is data strucuture that uses the LAST In First Out (LIFO) priciple to temporarily store and mange function invocation(call) */

//* LIFO =>

/* When we say that the call stack. operates by the data structure principle of Last In First Out. It means that the last function that gets pushed into the stack is the first to be pop out when the function return. */

//* Temporarily Store =>

/* When a function is invoked(called), the function, its parameters, and variables are pushed into the call stack to from a stack frame. This stack frame is a memory location in  the stack. The memory is cleared when the function returns as it is pop out of the stack. */

//* Mange Function Invocation (call) =>

/* The call stack maintain a record of the position of each stack frame. It knows the next function to be executed (and will remove it after execution). This is what makes code execution in JavaScript synchromous */

//* How does call stack handle function call

function f1() {
  console.log("Hello F1");
  f2();
}

function f2() {
  console.log("Hello f2");
}

console.log(f1());

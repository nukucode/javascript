//: ArrayBuffer, binary arrays

/* In web development we meet binary data mostly while dealing with files (create, upload, download). Another typical use case is image processing. */

//* ArrayBuffer - a reference to a fixed-length contiguous memory area

let buffer = new ArrayBuffer(16); // create a buffer of length 16
console.log(buffer.byteLength); // 16

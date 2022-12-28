//: File and FileReader

/* A File object inherits from blob and extended with filesystem-related capabilities */

//? new File(fileParts, fileName, [option])

/* => fileParts - is an array of Blob/BufferSource/String values.
=> fileName - file name string
=> options - optional object
=> lastModified - the timestamp (integer data) of last modifiaction.*/

//* 2 second, more often we get a file from <input type="file> or drag'n' drop or other browser interface."

<input type="file" onChange="showFile(this)" />;

function showFile(input) {
  let file = input.files[0];

  console.log(`File name: ${file.name}`); // my.png
  console.log(`last modified: ${file.lastModified}`); // e.g.234375475747
}

/* The input may select multiple files, so input.files is an array-like object with them. Here we have only one file, so we just take input.files[0] */

//* FideReader

/* FileReader is an object with the sole purpose of reading data from Blob (and hence File too) objects. */

let reader = new FileReader(); // no arguments

// The main methods:
/* 

=> readAsArrayBuffer(blob) - read the data in binary format "ArrayBuffer".

=> readAsText(blob, [encoding]) -  read the data as a text string with the given encoding (utf-8 by default).

=> readAsDataURL(blob) - read the binary data encode it as base64 data url.

=> abort() - cancel the operation.

? The choise of read* method depends on which format we prefer, how going to use the data.

=> readAsArrayBuffer – for binary files, to do low-level binary operations. For high-level operations, like slicing, File inherits from Blob, so we can call them directly, without reading.

=> readAsText – for text files, when we’d like to get a string.

=> readAsDataURL – when we’d like to use this data in src for img or another tag. There’s an alternative to reading a file for that, as discussed in chapter Blob: URL.createObjectURL(file).


? As the reading proceeds, there are events:

=> loadstart - loading started
=> progress - occurs during reading
=> load - no error, reading complete
=> abort - abort() called
=> error - error has occurred
=> loadend - reading finished with either success or failure

? When the reading is finished, we can access the result as:

=> reader.result is the result (if successful)
=> reader.error is the error (if failed)
*/

{
  /* <input type"file"  onchange="readFile(this)"> */
}

function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload(() => console.log(readder.result));

  reader.onerror(() => console.log(reader.error));
}


//? FileReaderSyn is available inside Web workers
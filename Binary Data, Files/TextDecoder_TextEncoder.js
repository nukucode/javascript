//: TextDecoder and TextEncoder

/* The built-in TextDecoder object allow one to read the value into an actual Javascript string, given the buffer and encoding. */

let decoder = new TextDecoder([lable], [options]);

/* => label - the encoding, utf-8 by default, but big5, windows-1251 and many other are also supported

=> options - optional object
  => fatal - boolean, if true then throw an exception for invalid (non-decodable) charaters, other (defalt) replace them with character /uFFFD.

  => ignoreBOM - boolean, if true then ignore BOM (an optional byte-order Unicode mark) rarely needed.*/

let str = decoder.decode([input], [options]);

/* input - BufferSource to decode.
=> options - optional object
 -> stream - true for decoding streams, when decoder is called repeatedly with incoming chunks of data. In that case a multi-byte character may occasionally split between chunks. This options tells TextDecoder to memorize “unfinished” characters and decode them when the next chunk comes. */

let uint8Array = new Uint8Array([72, 101, 108, 108, 111]);

console.log(new TextDecoder().decode(uint8Array)); // Hello

//* TextEncoder

/* TextEncoder does the reverse thing - converts a string into bytes */

let encoder = new TextEncoder();

//? The only encoding supports is "utf-8".

let unit8Array2 = encoder.encode("Hello");
console.log(unit8Array2);

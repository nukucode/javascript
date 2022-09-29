//* Globe Methods IN JS

//! 1. decodeURI()

// the decodeURI() method decodes a URI.

// Uniform Resource Identifire (URI)

//* snytax

// decodes(uri)
// es1 feature (ecmascript)

let uri = "my test.asp?name=ståle&car=saab";
let encoded = encodeURI(uri);
let decoded = decodeURI(encoded);

console.log(encoded); // my%20test.asp?name=st%C3%A5le&car=saab
console.log(decoded); // my test.asp?name=ståle&car=saab

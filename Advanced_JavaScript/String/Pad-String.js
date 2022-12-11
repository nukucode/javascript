//: PAD STRING

const pad = (str, length, char = " ") =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);

console.log(pad("cat", 8)); // "  cat  "
console.log(pad("foobar", 3)); // "foobar"

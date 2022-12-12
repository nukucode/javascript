//: Value Frequencies

/* Create an object with the unique values of an array as keys and their frequencies as the values. */

const frequencies = (arr) =>
  arr.reduce((a, v) => {
    console.log("a", a);
    console.log("v", v);

    a[v] = a[v] ? a[v] + 1 : 1;
    return a;
  }, {});

// { a: 3, b: 2, c: 1 }
console.log(frequencies(["a", "a", "b", "a", "b", "c"]));
      
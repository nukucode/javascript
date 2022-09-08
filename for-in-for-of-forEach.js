/// ----> for in

const array = [1,2,3,4,5,6,7,8];

for (let prop in ["1", "b", "c", "d"]) {
  console.log(prop); // 0,1,2,3 array indexes
}

for (let prop in "string") {
  console.log(prop); // 0,1,2,3,4,5 string indexes
}

for (let prop in { a: 1, b: 2, c: 3 }) {
  console.log(prop); // a,b,c  (object property names)
}

for (let prop in new Set(["a", "b", "c", d])) {
  console.log(prop); // undefined (no enumerable properties)
}

// ------> for of

for (let val of ["a", "b", "c"]) console.log(val); // a, b, c (array values)

for (let val of "str") console.log(val); // s, t, r (string characters)

for (let val of { a: 1, b: 2, c: 3 }) console.log(prop); // TypeError (not iterable)

for (let val of new Set(["a", "b", "a", "d"])) console.log(val); // a, b, d (Set values)



////// ----> for each

['a', 'b', 'c'].forEach(
    val => console.log(val)     // a, b, c (array values)
  );
  
  ['a', 'b', 'c'].forEach(
    (val, i) => console.log(i)  // 0, 1, 2 (array indexes)
  );
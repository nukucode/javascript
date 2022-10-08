//? Javascript Loops

//* 1.Javascript For Loop

//! syntax

// for (initialExpression; condition; updateExpression) {
//   body of loop
// }

const arr = ["BMW", "AUDI", "TATA", "MAHINDRA"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//* 2.Javascript while loop

//! syntax

// while (condition) {
//   body of loop
// }

let i = 0;

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

//* 3.Javascript do-while loop

//! syntax

// do{
//  body of loop
// }while(condition)

do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);

//* 4.Javascript forEach()

//! syntax

// Array.forEach((curr,index,arr) => {

// })

arr.forEach((el) => {
  console.log(el);
});

//* 5.Javascript map()

//! syntax

// Array.map((curr,index,arr) => {

// })

const newArr = arr.map((el) => {
  return el.toUpperCase();
});

//* 6.Javascript for of

//! syntax

// for ( element of iterable){
//     body of loop
// }

for (let el of arr) {
  console.log(el);
}

//* 7.Javascript for in

//! syntax

// for (Element in iterable){
//     body of loop
// }

for (let el in arr) {
  console.log(arr[el]);
}

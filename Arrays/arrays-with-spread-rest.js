//:  Use Case of spread or rest with array in JS

//* Merge Array
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 0];

const newArray = [...arr1, ...arr2];

//* Clone Array
const arr3 = [...arr1];

//* String ==> Array
const string = "@therogersak";
const arr4 = [...string];

//* Set => Array
const set = new Set([1, 2, 3, 4]);
const arr5 = [...set];

//* Node List ==> Array
// const nodeList = document.querySelectorAll("p");
// const arr6 = [...nodeList];

//* Argument ==> Array ===> using Rest(...)
function displyedName(...arguments) {

  arguments.map((name) => {
    console.log(name);
  });
}


//* ==> Array destucturing with rest(...)
const array = [1,2,3,4,5]

const newA = [a,b, ...newarr] = array;

console.log(a,b,newarr)
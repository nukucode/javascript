// today we learning array in javascript

// normal array
const names = ["rogers", "cate", "steve", "tony", "thor"];
console.log(names);

//JAVASCRIPT Array cheatsheet --->

// 1. contact() - create a new array by concating using existing arrays.

const avengers = names.concat([1, 2, 3, 4, 5, 6]);
console.log(avengers);

const data = avengers.map((data) => {
  return data;
});

console.log(data);

const num = [1, 2, 3, 4, 5, 6, 7, 8];

const filter = data.filter((filter) => {
  if (filter > 2) {
    return filter;
  }
});
console.log(filter);



// index of
const indexof = num.indexOf(2);
console.log(indexof);


//includes()
const includes = num.includes(4);
console.log(includes);

//pop()
const pop = num.pop();
console.log(pop);

//push()
const push = num.push(15);
console.log(push);

//shift()
const shift = num.shift();
console.log(shift);

//unshift()
const unshift = num.unshift(10);
console.log(unshift);

//splice()

const splice = num.splice(3,0);
console.log(splice);

//join 

const str = ['a','b','c','d','e','f','j','k','l','m','n','o','p','q','r','s','t','w','v','x','y','z'];

const abcd = str.join();
console.log(abcd);


// reverse 
const reverse = str.reverse()
console.log(reverse);


//slice

const slice = reverse.slice(1,5,10,15);
console.log(slice);


//sort

const sort = reverse.sort()
console.log(sort);
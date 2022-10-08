//? Array Method In Javascript

//* 1.concat()
//* 2.indexof()
//* 3.join()
//* 4.lastIndexOf()
//* 5.pop()
//* 6.push()
//* 7.reverse()
//* 8.unshift()
//* 9.shift()
//* 10.slice()
//* 11.sort()
//* 12.splice()
//* 13.toString()
//* 14.valueOf()

//! contact method

// the concat() method is used to merge two or more arrays. This methods does not change the existing arrays, but instead returns a new array.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];

const newArr = arr1.concat(arr2);

console.log(newArr);
// [ 1, 2, 3, 4, 5,6, 7, 8, 9]

//* syntax

// concat()
// concat(value0)
// concat(value0, value1)
// concat(value0, value1, value2, /*, valueN)

//! indexOf()

// the indexOf() method return the first index (position) of a specified value.

// the indexOf() method return -1 if value not found.

// the indexOf() method start at a specified index and search from left to right

//* syntax

// indexOf(item,start);

// item -> required the value to search for.
// start -> optional. whare to start the search. Default value is 0. Negative vLUES SRTART the search from the end of the array.

const fruits = ["Mango", "Apple", "Banana", "Orange"];

console.log(fruits.indexOf("Apple")); // 1

console.log(fruits.indexOf("Apple", 1)); // 1

console.log(fruits.indexOf("Orange", -1)); // 2

//! lastIndexOf()

// the lastIndexOf() method return the last index (Position) of a specified value.

// the lastIndexOf() method return -1 if the value is not found.

// the lastIndexOf() method start at a specified index and searches from right to left.

//* Syntax

// lastIndexOf(item, start);

const cars = ["BMW", "TATA", "MAHINDRA", "OLA", "BMW", "TESLA"];

console.log(cars.lastIndexOf("BMW")); // 4
// Beacuse This start from right to left

//! join()

// The joim method return an array as a string.

// the join() method does not change original array

// any seprator can be specified. the default is comma(,).

//* Syntax

// join(separator)

const names = ["Kashish", "Chris", "Rahul", "Manish"];

console.log(names.join()); // "Kashish,Chris,Rahul,Manish"
console.log(names.join(", ")); // "Kashish, Chris, Rahul, Manish"
console.log(names.join("**")); // "Kashish**Chris**Rahul**Manish"

//! pop()

// the pop method return removes (pops) the last element of an array.

// the pop() method changes the original array.

// the pop() method returns the removed element

//* syntax

// array.pop(value) // default 1;

const lang = ["Sanskrit", "Hindi", "English", "Russian", "Japani"];

lang.pop();

console.log(lang); // [ 'Sanskrit', 'Hindi', 'English', 'Russian' ]

lang.pop(2);

console.log(lang); // [ 'Sanskrit', 'Hindi', 'English' ]

//! push()

// the push() method add new items to the end of an array

// push method change the length of an array and retrun a new length

//* syntax

// array.push(item,item,item,.....,itemN)

const Avengers = ["Captain", "IronMan", "Thor", "Black Widow", "Hawkeye"];

Avengers.push("Hulk");

console.log(Avengers); // [ 'Captain', 'IronMan', 'Thor', 'Black Widow', 'Hawkeye', 'Hulk' ]

Avengers.push("Wanda", "Quiksilver", "Black Panter", "Doctor Strange");

console.log(Avengers);
// [
//     'Captain',
//     'IronMan',
//     'Thor',
//     'Black Widow',
//     'Hawkeye',
//     'Hulk',
//     'Wanda',
//     'Quiksilver',
//     'Black Panter',
//     'Doctor Strange'
//   ]

//! shift()

// the shift() method removes the first item of an array.

// the shift method change the original array

// the shift() method returns the shifted element.

//* syntax

// array.shift()

const coun = ["Pakistan", "India", "Russia", "Japan", "India", "Frnace", "USA"];

coun.shift();

console.log(coun); // [ 'India', 'Russia', 'Japan', 'Frnace', 'USA' ]

//! unshift()

// the unshift( method adds new elements to the beginning of an array.

// the unshift() method overwrites the original array.

//* syntax

// Array.unshift(item,item,item,....,itemX)

const gods = ["Vishanu Ji", "Shiva Ji", "Bhrma Ji", "Hanuman Ji"];

gods.unshift("Inder Ji", "Ganesh Ji", "Kuber Ji");

console.log(gods);

// [
//     'Inder Ji',
//     'Ganesh Ji',
//     'Kuber Ji',
//     'Vishanu Ji',
//     'Shiva Ji',
//     'Bhrma Ji',
//     'Hanuman Ji'
//   ]

//! sort()

// the sort() method sorts an array alphabetically

const abc = ["c", "d", "e", "f", "a", "b"];

console.log(abc.sort()); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

//! slice

// the slice() method returns selected elements in an Array, as a new array

// the slice() method selects from a given start, up to a (not inclusive) given and.

// the slice method does not change the original copy

//* syntax
// array.slice(start, end)

const abcd = ["a", "b", "c", "d", "e"];

console.log(abcd.slice(1, 3)); // ["b", "c"]

console.log(abcd.slice(-3, -1)); // ["c", "d"]

//! splice

// the splice() method add or removes array elements
// the splice method overwrite the orignal array.

//* syntax

// array.splice(index,howmany, item1,itme2,...., itemN);

// index --> required the position to add/remvoe items.
// Negative value defines the position from the end of the array

// howMany ---> optional. Number of items to be removed.

// item ---> Optional. New elements to be added.

const planets = ["Earth", "Mars", "Venus", "Sun", "Mercury"];

planets.splice(3, 1, "Chandra");

console.log(planets);
//[ 'Earth', 'Mars', 'Venus', 'Chandra', 'Mercury' ]

//! reverse()

// the reverse() method reverse the order of the elements in an array.

// the reverse method overwirite the original copy

//* syntax
// array.reverse()

const browers = ["Chrome", "IE", "Edge", "FireFox", "Safari"];

console.log(browers.reverse()); //[ 'Safari', 'FireFox', 'Edge', 'IE', 'Chrome' ]

//! toString()

// the toString() method returns a string with array values separated by commas.

// the toString() method does not change the original array.

console.log(browers.toString()); //Safari,FireFox,Edge,IE,Chrome


//! valueOf()

// the valueOf method returns the array itself

// the valueOf() method does not change the original array.

const values =  browers.valueOf();

console.log(values) // [ 'Safari', 'FireFox', 'Edge', 'IE', 'Chrome' ]
//: Write a function which can concatenate 2 arrays. If only one array is passed it will duplicate it

function mergeArray(array1, array2 = array1) {
  return [...array1, ...array2];
}

// => 2nd
function mergeArray2(array1, array2 = array1) {
  return array1.concat(...array2);
}

// => 3rd
function mergeArray3(array1, array2 = array1) {
  return array1.push(...array2);
}

//: Write a program to replace 3 center elements of the 1st array by center 3 elements of the 2nd array

const a = [1, 2, 3, 4, 5];
const b = [4, 0, 0, 0, 8];

const startPositionFor1stArray = a.length / 2 - 1;
const startPositionFor2ndArray = b.length / 2 - 1;
a.splice(
  startPositionFor1stArray,
  3,
  ...b.slice(startPositionFor2ndArray, startPositionFor2ndArray + 3)
);

//: Sort the given array of integers in ascending or descending order

arr.sort((a, b) => a - b);
arr.sort((a, b) => b - a);

//? If function is not passed arguments, default sorting will happen

//: Sort the given array of objects in ascending the author lastname

const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Maria Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];

books.sort((book1, book2) => {
  const authorLastName1 = book1.author.split(" ")[1];
  const authorLastName2 = book2.author.split(" ")[1];
  return authorLastName2 > authorLastName1 ? -1 : 1;
});

//: Sqaure all the positive numbers of the array and return the output array

const postiveArr = arr.filter((value) => value >= 0);
const sqaurePositiveArr = postiveArr.map((value) => value * value);

// => 2nd
const sqaurePositiveArr2 = arr.filter(Boolean).map((value) => value * value);

//: Write a code to generate an array with range of numbers and shuffle them

function rangeGenFunc(start = 1, end = 0) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  return arr;
}

const arr = rangeGenFunc(1, 10);
arr.sort(() => 0.5 - Math.random());

// => 2nd
function* rangeGen(start = 1, end = 0) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

let newArr = [...rangeGen(1, 10)];
let shuffleArr = [];
const length = newArr.length;
for (let i = 0; i < length; i++) {
  shuffleArr.push(
    ...newArr.splice(Math.floor(Math.random() * newArr.length), 1)
  );
}

//: Check if the user with the name "Jhon" exists in the array object.

const doesJhonExists = arr.some((obj) => obj.name === "Jhon");

// => 2nd
const jhonObj = arr.find((obj) => obj.name === "Jhon");
const doesJhonExists2 = jhonObj ? true : false;

// => 3rd
const jhonIndex = arr.findIndex((obj) => obj.name === "Jhon");
const doesJhonExists3 = jhonIndex < 0 ? false : true;

//: Generate an array of objects with properties id and full name from an array of objects where each object will have id, firstName and lastName

const employeesListWithFullName = arr.map((obj) => {
  return { id, fullName: obj.firstName + " " + obj.lastName };
});

//: Write a program to calculate the sum of all the value of an array

const sum = arr.reduce((acc, value) => acc + value, 0);

// => 2nd
const sum2 = sum.reduce((acc, value) => acc + value);

//: => 3rd
const sum3 = 0;
for (let num of arr) {
  sum = sum + num;
}

//: Get the maximum value from a numbers array along with its index

const max = Math.max(...arr);
arr.indexOf(max);

// 2nd
const max2 = arr.reduce((acc, val) => (acc > b ? acc : val));
arr.indexOf(max2);

// 3rd
let max3 = arr[0],
  position = 0;
for (let index in arr) {
  if (arr[index] > max3) {
    position = index;
    max = value;
  }
}

position;

//: Find the number of occurences of minimum value in the number list

const min = Math.min(...arr);
minarr = arr.filter((value) => value === min);
minarr.length;

//: Create an array of length n with the values of it set to 10

const n = 5;
const arrr = new Array(n);
arrr.fill(10);

//: Write a code to remove the duplicates from the array

const set = new Set();
const distinctArr = [...set];

//: Design a flat function which flattens an array to any depth

function flat(arr) {
  const flatArr = [];
  arr.forEach((value) => {
    if (Array.isArray(value)) {
      flatArr.push(...flat(value));
    } else {
      flatArr.push(value);
    }
  });

  return flatArr;
}

//: Check if all the students of have passed or not (40 is the pass marks)

const isPassAll = arr.every((student) => student.marks >= 40);

//: Get the average of all the salaries which is greater than 10000 from the department of "IT" from the array of objects


const itEmployeesWithSalaryGT10K = employees.filter((employee) => employee.salary > 10000 && employee.dept === 'IT );
    
const itTotalSalaryGT10K = itEmployeesWithSalaryGT10K.reduce((acc, value) => acc + value, 0);

const itAvgSalaryGT10K = itTotalSalaryGT10K / itEmployeesWithSalaryGT10K.length;



//: Extract the list of all the elements from the list of numbers given in 2 arrays

const set1 = new Set(...arr1);
const set2 = new Set(...arr2);
const distinctArr2 = [...set1, ...set2];

//: Get the list of all distinct elements which are present in both list of numbers

const intersectionArr = arr1.fitlter(value => arr2.includes(value));
const distinctIntersectionArr = [...new Set(intersectionArr)]

// 2nd

const set1 = new Set(arr1);
const set2 = new Set(arr2);
const distinctIntersectionArr = [...set1].filter(value => set2.has(value));


//: Extract list of elements present only in the first list given

const set1 = new Set(arr1);
const set2 = new Set(arr2);
const intersectionArr = [...set1].filter(value => !set2.has(value));


//: Create a function named "average" which can calculate the average of an array should be available to be called from any array object

Array.prototype.average = function () {
    let total = 0;

    for (let index in this) {
        total += this[index]
    }

    return total / this.length
}


//: Write a code to eliminate duplicate objects in an array where each object has an "id" property which can be used to identify the object and duplicate object with lower rank to be removed


const Arr = [
    {
        id: 1,
        name: "emp1",
        rank: 4
    },

    {
        id: 2,
        name: "emp1",
        rank: 1
    },


    {
        id: 2,
        name: "emp2",
        rank: 2
    },


    {
        id: 3,
        name: "emp3",
        rank: 3
    },
    
]


const map = new Map();

Arr.forEach((obj) => {
    if (map.has(obj.id)) {
        if (obj.rank < map.get(obj.id).rank) {
            map.set(obj.id, obj)
        }
    } else {
        map.set(obj.id, obj)
    }
})

distinctArr3 = [...map.values()]


//: Create an array will only accept string values. (Homogeneous array of strings)

var stringArr = [];

var stringArr = new Proxy(stringsArray, {
    set(target, prop, reciver) {
        if (typeof reciver === 'string') {
            target[target.length] = reciver;
        }
        return true
    }
})


// driver code
stringArr.push("Hello", 5, {}, "world", true, [1, 2, 3])
console.log(stringArr);

//: Create a Proxy object through which the array can be accessed as usual but also allow to access the value through negative indices

let newArray = [1, 2, 3, 4, 5];

newArray = new Proxy(arr, {
    get(target, handler) {
        if (handler < 0) return target[target.length + Number(handler)];
        else return target[handler];
    }
})


newArray[-1]  // 5
newArray[-2]  // 4

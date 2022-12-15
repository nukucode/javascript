//: JavaScript Objects, Square Brackets and Algorithms

//* Object Intro

/* Let's begin by creating a simple object representing a car. */

const car = {
  make: "TATA",
  modle: "Mini",
  color: "Black",
};

// we could even output it using console.log;
console.log(car.color); // "Black"

// Another way to refer to a property is using square bracket notation:
console.log(car["color"]); // "Black"

/* The useful thing about square bracket notation is that we can also use variables to get properties dynamically.

That is, rather than hardcoding a specific property name, we can specify it as a string in a variable:*/

const propertyName = "color";
console.log(car[propertyName]); //outputs: Black

//* Using dynamic lookup with square bracket notation

function getPrice(itemName) {
  if (itemName === "burger") {
    return 10;
  }
  if (itemName === "fires") {
    return 3;
  }

  if (itemName === "coleslaw") {
    return 4;
  }

  if (itemName === "coke") {
    return 2;
  }

  if (itemName === "roti") {
    return 5;
  }
}

//? Use
/* Using square bracktes notation we can create a function which will aceepts two arguments:

=> a menu object
=> a string with item name*/

const menu = { burger: 10, fries: 3, coleslaw: 4, coke: 2, beer: 5 };

const getPrice2 = (itemName, menu) => {
  const ItemName = menu[itemName];
};

//* Datastructures and algorithms

/* A map in computer science terms is a data strucuture which is a collection of key/value pairs where each key maps to a corresponding value. 

=> Let's look at an eample of why we may want to use a map. Let's say we run a book shop and have a list of books. Each book has a unique identifier called International Standard Book Number (ISBN), which is a 13 digit number. We store out books in an array and want to be able to look them up using the ISBN*/

const books = [
  {
    isbn: "978-0099540946",
    author: "Mikhail Bulgakov",
    title: "Master and Margarita",
  },
  {
    isbn: "978-0596517748",
    author: "Douglas Crockford",
    title: "JavaScript: The Good Parts",
  },
  {
    isbn: "978-1593275846",
    author: "Marijn Haverbeke",
    title: "Eloquent JavaScript",
  },
];

function getBookByIsbn(isbn, books) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].isbn === isbn) {
      return books[i];
    }
  }
}

const myBook = getBookByIsbn("978-1593275846", books);
console.log(myBook);

/* That works fine in this example since we only have three books (it's a small book shop). However, if we were Amazone, iterating over millions of books could be very slow and computationally expensive.

=> Big O notation is used in Computer Science to describe the performance of an algorithm. For example if n is the number of books in our collection, the cost of using iteration to look up a book in the worst case scenario (the book we look for is last in the list) will be  O(n). That means if the number of books in our collection doubles, the cost of finding a book using iteration will double as well.

As discussed a map can be used to look up the value which corresponds to a key. We can strucuture our data as map instead an array by using an object.

The key will be the ISBN and the value will be the corresponding book object:*/

const books2 = {
  "978-0099540946": {
    isbn: "978-0099540946",
    author: "Mikhail Bulgakov",
    title: "Master and Margarita",
  },
  "978-0596517748": {
    isbn: "978-0596517748",
    author: "Douglas Crockford",
    title: "JavaScript: The Good Parts",
  },
  "978-1593275846": {
    isbn: "978-1593275846",
    author: "Marijn Haverbeke",
    title: "Eloquent JavaScript",
  },
};

function getBookByIsbn2(isbn, books) {
  return books[isbn];
}

console.log(getBookByIsbn("978-1593275846", books));

/* Instead of using iteration, we can now use a simple map lookup by ISBN to get our value. We no longer need to check the ISBN value for each object. We get the value directly from the map using the key.

IN terms of performance, a map lookup will provide a huge imporovement over iteration. This is because the map lookup has constant cost in terms of computation. This can be written using Big O notation as O(1). It does not matter if we have three or three million book, we get the book we want just as fast by doing a map lookup using the ISBN key.*/

//* Recap

/* => We have seen we can access the values of object properties using dot notation and square bracket notation

=> We learned how we can dynamically look up values of property by using variables with square brackte notation.

=> We have also learned that a map datastructure maps keys to values. We can use keys to directly look up values in a map which we implement using an object.

=> We had a first glance at how algorithm performance is described using Big O notation. In addition, we saw how we can improve the performance of a search by converting an array of objects into a map and using direct lookup rather than iteration.*/

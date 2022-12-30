//: Decorator Structural Design Pattern

/* This is also a structural design pattern that focuses on the ability to add behaviour or functionalities to existing classes dynamically. It is another viable alternative to sub-classing */

class Book {
  constructor(title, author, price) {
    this._title = title;
    this._author = author;
    this._price = price;
  }

  getDetails() {
    return `${this._title} - ${this._author}`;
  }
}

// decorator 1
function giftWrap(book) {
  book.isGiftWrapped = true;
  book.unwrap = function () {
    return `Unwrapped ${book.getDetails()}`;
  };

  return book;
}

// decorator 2
function hardbindBook(book) {
  book.isHardBound = true;
  book.price += 5;
  return book;
}

// usage =>

const alchemist = giftWrap(new Book("The Alchemist", "Paulo Coelho", 1000));

console.log(alchemist.isGiftWrapped);
console.log(alchemist.unwrap());

const inferno = hardbindBook(new Book("Inferno", "Dan Brown", 2045));

console.log(inferno.isHardBound);
console.log(inferno.price);

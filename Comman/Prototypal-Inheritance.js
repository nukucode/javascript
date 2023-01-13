//: Prototypal Inheritance

/* In Javascript, inheritance works a bit differently compared to C++ or Java. Javascript inheriatance is more widely known as "Prototypical inheritance" */

//* Understanding the need for prototype

/* If you have worked with javascript arrays or objects or strings, you have notice that are a couple of methods that are available by default */

var arr = [1, 2, 3, 4, 5].reverse(); // [5,4,3,2,1]

var obj = { id: 1, value: "Some value" };
obj.hasOwnProperty("id"); // true

var str = "Hello World";
str.indexOf("W"); // 6

/* Can you define your own methods like this? You could say that you can in this way */

var arr = [1, 2, 3, 4, 5];
arr.test = function () {
  return "Hi";
};

console.log(arr.test()); // Hi

/* This will work, but only for this variable called arr. */

//? Let's creatre our simple constructor function

var Foo = function (name) {
  this.name = name;
  this.tellName = function () {
    console.log(this.name);
  };
};

var fooObj1 = new Foo("Ram");
var fooObj2 = new Foo("Ankit");

console.log(fooObj1.tellName); // Ram
console.log(fooObj2.tellName); // Ankit

/*  The problem is we are westing memory with the above approach. Note that the method tellName is the same for each and every instance of foo. Each time we create an instace of foo the method tellName ends up taking space in the system's memory. If tellName is the same for all the instaces it's better to keep it in a single place and make all our instance refer from that place. */

var Bar = function (name) {
  this.name = name;
};

Bar.prototype.getName = function () {
  console.log(this.name);
};

var barObj = new Bar("Ankit");
console.log(barObj.getName());

var barObj2 = new Bar("Ram");
console.log(barObj2.getName());

// Check getName references are the same

console.log(barObj.getName === barObj2.getName); // true

/* Most importantly node that comparing getName of both the instace evaluates to true. Function comparison in Javascript evaluates true only if their reference are the same. This proves thal getName is not consuming extra memory for multiple instaces. */

//* Now let's look into some more detail about protoype

/* Each and every Javascript function will have a prototype property which is of the object type. You can define your own properties under prototype. When you will use the function as a constructor function, all the instace of it will inherit properties from the protoype object.

=> Now let's come to that __proto__ property you saw above. The __proto__ is simply a reference to the prototype object from which the instace has inherited.*/



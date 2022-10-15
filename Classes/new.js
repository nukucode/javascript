//: Object-Oriented Programing IN Javascript


/* Object-Oriented Programing(OOP) is a programing paradigm bassed on the concept of "Objects."
Data and functions (attributes and methods) are bundled within an object.

An Object in Javascript is a collection of key-value pairs. These key-value pairs are
Properties of the object. A property can be an array, a function, an object itself or any
primitive data type such as strings or integers. */


//# Option 1 - Object Literal Notation

let user1 = {
name: "Rogers",
points: 5,
increment: function(){
user1.points++
}
};


/* A Javascript Object Literal is a list of name-value pairs wrapped in curly bracec. */

//# Option 2 - Object.create()

Object.create(prototype, [propertiesObject])

//* Object.create methods accept two arguments:

/* 1. prototype: the object which should be the prototype of the newly created object. it
has to be an object or null.

2. propetiesObject: properties of the new object. This argument is optional. */


let user2 = Object.create(null);

user2.name = "Rogers";
user2.age = 18;
user2.points = 5;
user2.increment = function(){
user2.points++
}


//# Solutions

//* Solution 1 - Generate objects using a function

function createUser(name,points){
let newUser = {}
 newUser.name = name;
  newUser.points = points;
  newUser.increment = function() {
    newUser.points++;
  };

return newUser;
}


/* To create a user, you would now enter the information in parameters of the function. */

let user4 = createUser("Rogers", 10)
user4.increment()



//* Solution 2 - Use the prototype nature of Javascript

/* Every javascript function has a property, which is empty by default. You can add functions
to this prototype property, and in this form, it is known as a method. When an inherited
function is executed, the value of this points to the inherting object. */

function createUser2(name, points){
let newUser = Object.create(userFuction);
 newUser.name = name;
  newUser.points = points;
  return newUser;
}

let userFunction = {
increment: function() {this.points++},
login: function() {console.log("Please Login.")}
}

let user3 = createUser("Bob", 10);
user1.increment();

/* When the User3 Object was created, a prototype chain bond with userFunction was formed. */


//* Solution 3 - new and this keywords

/* The new operator is used to create an instance of an object which has a constuctor function

When we call the constuctor function with new, we automate the following actions:

1.new object is created
2.It bind this to the object
3.The constuctor function's prototype object becomes the _proto_property of the new object
4. It return the object from the function */


function newUser(name, points){
this.name = name;
this.points = points;
}

newUser.prototype.increment = function(){
this.points++
}

newUser.prototype.login = function(){
console.log("Please Login")
}

let newUser1 = new newUser('Rogers', 20);
newUser.increment();


//! All function in Javascript also Objects.

//* Side note: Difference between_proto_and prototype

/* Prototype is a property of the constructor function that determines what will becomes
the _proto_property on the constucted object.

So, _proto_ is the reference created, and that reference is known as the prototype chain 
bond. */


//# Solution 4 - Es6 Syntactic sugar

/* ECAMAScript6 introduced the class keyword, which allow us to write classes of other 
classical languages. In reality, it is syntactic sugar over Javascript's prototypal 
behavior.
 */


class OtherUser {
    constructor(name, points){
        this.name = name;
        this.points = points;
    }

    increment (){
        this.points++
    }

    login(){
        console.log("Please Login")
    }
}


let user6 = new OtherUser('Ram', 30)
user6.increment()
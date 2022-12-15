//: Objects

/* Javascript simple types:
=> numbers (has object-like methods but they are immutable)
=> strings (has object-like methods but they are immutable)
=> booleans (has object-like methods but they are immutable)
=> null
=> undefined

All other values are object including arrays and function.

Objects are class free, can contain other objects and can inherit properties from their prototypes (which can reduce object initialisation time and memory consumption).

*/

//* Object Literal
/* An object literal or more comma-separated name/value pairs surrounded by curly braces {} */

var empty_object = {};

var today = {
  day: "Wednesday",
  month: "April",
  year: 2014,

  weather: {
    //objects can contain nested objects like this one
    morning: "sunny",
    afternoon: "cloudy",
  },
};

//* Retrieval

/* =>Can be done with either dot notation today.weather.morning or with square brackets today['month']

=> Or operand (||) can be used to fill in default values for nonexistent data to prevent and undefined error: var weath = today.weather.evening || "unknown"


* Update => Assigning a property value to an object overwrites any existing property values with that property name

* Reference => Object refer to each other, they dont' hold duplicates copes of data
*/

//* Reflection
/* => Determining what properties an object has
=> Using typeof includes all properties in the prototype chain including functions.

=> To avoid inherited properties, use hasOwnProperty(type); which returns true if that property exists only in that object itself (not the chain)
 */

today.hasOwnProperty("number"); //will return true
today.hasOwnProperty("constructor"); //will return false

//* Enumeration
// Best way to enumerate all the properties you want is a for loop

var i;
var properties = ["day", "month", "year"];
for (i = 0; i < properties.length; i++) {
  document.writeIn(properties[i] + ":" + today[properties[i]]);
}

// => This ensures you get the properties you want (i.e. not up the prototype chain) and in the order you want, as opposed to a for in loop which achieves neither of these

//* Delete
/* => Removes property from object, but also reveals property from further up the prototype chain if it exists
=> Format: delete today.month */


//* Global Abatement

/* => One way to mitigate the risks of global variables is to create a single global variable which then contains your whole application */

var MYAPP = {}

MYAPP.today = {
	day: "Wednesday",
	month: "April",
	year: 2014,

	weather: { //objects can contain nested objects like this one
		morning: "sunny",
		afternoon: "cloudy"
	}
}
//Making sure all other variables (like today) are contained within this one global variable (MYAPP) means none of them have global scope and therefore the risk of naming conflicts, etc in your application is reduced
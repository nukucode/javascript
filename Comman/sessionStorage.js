//* SessionStorage IN Javascript =>

// the window sessionStorage() property is used for saving key/value pairs in a web browser. it stores the key/value pairs in a browser for only session and data expires as soon as new session is loaded.

//! Syntax
// window.sessionStorage;

// Because the sessionStorage is an instance of the storage type, you can manage data using the Storage's methods

//? setItem(name,value) - set the value for a name

//? removeItem(name)  - remove the name-value pair identified by name.

//? getItem(name) - get the value for a given name

//? key(index) - get the name of the value in the given numeric position

//? clear() - remove all values in the sessionStorage

window.sessionStorage;

// -> setItem in sessionStorage
sessionStorage.setItem("mode", "dark");

// -> gettting data from the sessionStorage
const mode = sessionStorage.getItem("mode");
console.log(mode);

// -> removing an item by a name
sessionStorage.removeItem("mode");

// -> Deleting all item in the sessionStorage
sessionStorage.clear();

//* lterating all items

const keys = Object.keys(sessionStorage);
for (let key of keys) {
  console.log(`${key}: ${sessionStorage.getItem("key")}`);
}

// The sessionStorage allows you to store the data for session only.

// the browser will delete the sessionStorage data when you close the browser tab or window.

// the sessionStorage is an instance of the storage type, therefore, you can use the methods of the storage type to mange data in the sessionStorage.

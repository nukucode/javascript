
 // localstorage store data in user machine with no expairation date 

//  syntaxt of localStorage

// 1.window.localStorage
// 2.localStorage


// save data in localstorage 
localStorage.setItem('name' , 'Rogers');


// get data from localStorage 
const name = localStorage.getItem('name');
console.log(name);


// remove data from localStorage 
localStorage.removeItem('key');

// remove all data from localStorage
localStorage.clear();




//* call()

//? call invokes the function immediately and allows you to pass in arguments one by one

let myObj = {
    greet: "Hello",
  };
  
  // function that we want on every object
  function greeting(person, other) {
    console.log(this.greet + " " + person + " " + other);
  }
  
  // attachin the function to multiple objects
  greeting.call(myObj, "Shiva"); // Hello Shiva
  
  //* apply()
  
  //? Apply invokes the function, and you can allow you to pass in arguments as an array
  
  const otherObj = {
    greet: "Ram Ram JI",
  };
  
  let pop = greeting.apply(otherObj, ["Rogers", "Hello Ji"]); // Ram Ram JI Rogers
  
  //* bind()
  
  //? bind return a new function, and you can invoke/call it anytime you want by invoking a function
  
  let message = greeting.bind(myObj);
  
  message("therogersak", " ", " Thanks For Supporting");
  
  //! other refrences
  
  // bind: It binds the function with provided value and context but it does not executes the function. To execute function you need to call the function.
  
  // call: It executes the function with provided context and parameter.
  
  // apply: It executes the function with provided context and parameter as array.
  
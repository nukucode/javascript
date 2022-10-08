// Getters

/// Getters are some kinds of special method that allow you to access a property value which is dynamically computed.

// Setters

/// In same way, Setters allow you to set a dynamically computed value to a property.

/// they are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.

let myObj = {
  get propName() {
    // getter , the code excuted on getting myObj.propName
  },

  set propName(value) {
    // setter, the code execute on setting myObj.propName = value
  },
};

/// Getter will usewhen you want to get property using myObj.propName

/// setter will use when you want to set property using myObj,propName=value

/// example

const employee = {
  empId: 1234,
  name: "chris",

  get emp() {
    return `${this.name} #${this.empId}`;
  },

  set emp(value) {
    const info = value.split("#");
    this.name = info[0];
    this.empId = info[1];
  },
};


// get emp is called ====> sahil #1234;
console.log(employee.emp);

// set emp is called ==> new value will set
employee.emp = 'suresh#9034';

// get emp is called ===> suresh #9034;
console.log(employee.emp)



// #Note : getter method will not take any parameter whereas, setter method accept only one parameter which the new value for set
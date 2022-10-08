// nullish coalescing 

/// return its right-hand when its left-hand side operand is null or undefined and left-hand is not undefined or null when return left-hand side.



const result = undefined ?? 'Hello';
console.log(result) // Hello


const result1 = 123 ?? 'Hello'
console.log(result1) // 123
// because left-hand side not null or undifined


const result2 = NaN ?? 'Hello';
console.log(result2) // NaN


const result3 = true ?? 'Hello'
console.log(result3) // true

const result4 = false ?? 'Hello'
console.log(result4)  // false

const result5 = 'Hello World' ?? 'Hello';
console.log(result5)


const result6 = 3 > 5 ?? true;
console.log(result6) // false 
// false because 3 > 5 evakuates to false

const result7 = [1,2,3,4,'Hello'] ?? 'Hello World';
console.log(result7)




/// second example

// old method
const addUser = (user,id) => {
    user.id = id !== null || id !== undefined ? id : 'Unknown'
    return user;
}


// new method
const addUser1 = (user,id) => {
  user.id = id ?? 'Unknown';
  return user;
}
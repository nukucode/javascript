// Destructuring Arrays

// write less code by unpacking values from arrays into distinct variables


/// Old Method
const data = [
    ['Aveg','Per'],
    ['Ak', 'Mkk']
]

const var1 = data[0], var2 = data[1];

// ['Aveg','Per'], ['Ak', 'Mkk']
console.log(var1, var2) // 


// new method

const [var3,var4] = data;
console.log(var3, var4) // [ 'Aveg', 'Per' ] [ 'Ak', 'Mkk' ]


/// using rest operator (...)

const [var5, ...var6] = data;
console.log(var5,var6); // [ 'Aveg', 'Per' ] [ [ 'Ak', 'Mkk' ] ]


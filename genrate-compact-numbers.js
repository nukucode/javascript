const formatter =  Intl.NumberFormat('hi', {
    notation: 'compact'
})

console.log(formatter.format(1235))
console.log(formatter.format(123455))
console.log(formatter.format(1233455)
)
console.log(formatter.format(12345434567657))


// let formatter = Intl.NumberFormat('en', { notation: 'compact' });
// // example 1
// let million = formatter.format(123456);
// // example 2
// let billion = formatter.format(1234567890);
// // print
// // console.log(million == '1M', billion == '1B');

// console.log(million);
// console.log(billion);
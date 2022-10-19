//# Arrays

var num = [1, 2, 3, 4, 5];

num.at(1); // 2
num.push(6); // [1,2,3,4,5,6] add element to the end
num.pop(); // [1,2,3,4,5]  remove element to the end
num.shift(); // [(2, 3, 4, 5)]; // remove element to the first
num.unshift(1); // add element to the first
num.reverse(); // sort in descending order
num.includes(2); // is array contain a specified value: true
num.map((item) => item * 2); // Map elements [1,2,3,4,5]
num.filter((item) => item * 2 === !0); // filter element
num.find((item) => item > 2); // find element
num.every((item) => item > 0); // true
num.findIndex((item) => item === 3); // 2
num.reduce((prev, curr) => prev + curr, 0); // 15
num.toString(); // convert to string
num.join("*"); // join
num.splice(4, 1, "b", "a"); // add elements + remove elements
num.slice(1, 4); // slice element [1] to [4-1]
num.sort(); // sort string alphabetically
x.sort((a, b) => a - b);

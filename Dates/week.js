// today we are going to get wekly name by different language.

const date = new Date();
console.log(date.toLocaleString("en-us", { weekday: "long" }));
console.log(date.toLocaleString("hi-in", { weekday: "long" }));

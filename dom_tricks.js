//* Detect Click Outside

// you can use this method to detect if a user has clicked outside/inside of a target element. the value returned is a boolean and you can use it to update your app based on the result.

const el = document.getElementById("button");
const result = document.getElementById("result");

document.addEventListener("click", (e) => {
  const outside = !el.contains(e.target);
  console.log(outside);
  result.innerText = outside;
});

//* Fire Events Only Once

// you can add {once:true} to your event listener to make sure your event will only be triggered once on a given element. it'sperfect if you do not want your user to be able to perform an action multiple times on a render.

el.addEventListener(
  "click",
  () => {
    console.log("Hello World");
  },
  { once: true }
);

//* Clone a DOM Node

// you can clone any DOM Node by using the cloneNode() method!

const clone = el.cloneNode(true);
console.log(clone.outerHTML);

// it takes one boolean argument. if set to true, it will create a deep clone of the DOM Node, including all of its children

//* Toggle Boolean Attributes

// you can use toogleAttribute() if you want to toggle an element's boolean attributes, meaning the attributes that don;t accept a value, like the disabled arrtribute.

const input = document.getElementById("input");
const button2 = document.getElementById("button2");

button2.addEventListener("click", () => {
  input.toggleAttribute("disabled");
});

// this is useful if you want to avoid using both the setAttribute and removeAttribute calls in order to achive the same result!

//* Get Computed Style

const element = document.getElementsByClassName("container");

const Style = getComputedStyle(element, ":before");
element.innerText = Style.content;

// you can add a second argument to the call if you want to access any pseudo-element of the selected!

//* Scroll Element Into View

const button3 = document.getElementById("button3");
const p = document.getElementById("p");

button3.addEventListener("click", () => {
  p.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

// the method takes an object as an arguments, where you can set the following options:

// block - the final scroll position of the element after scrolling it into view, the options are:start (default), center, end, nearest

// behavior - the scroll-behavior of the scroll transition the options are auto(default) or smooth

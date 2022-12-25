//: Event Capturing

/* It is Opposite of Event Bubbling: the outer event handler are fired before more specific handler, the one on button. */


document.getElementById("container").addEventListener(
  "click",
  () => {
    //window loaded
  },
  true
);
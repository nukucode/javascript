//: Queue

/* A queue is a linear data structure that behaves like a real-world queue. It follows a first in, first out (FIFO) order of operations, similar to its real-world conterpart.This means that new items are added to the end of the queue, whereas items are removed from the start of the queue.


* The main operations of a queue data structure are:

=> enqueue: Adds an element to the end of the queue
=> dequeue: Removes an element  from the start of the queue
=> peek: Retieves the element at the start of the queue, without removing it
=> isEmpty: Checks if the queue is empty
*/

//* Implementation

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();

console.log(queue.isEmpty()); // true

cueue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.enqueue("D");
queue.enqueue("E");

console.log(queue.isEmpty()); // false

console.log(queue.peek());

console.log(queue.dequeue()); // "A"
console.log(queue.dequeue()); // "B"
console.log(queue.dequeue()); // "C"
console.log(queue.dequeue()); // "D"
console.log(queue.dequeue()); // "E"

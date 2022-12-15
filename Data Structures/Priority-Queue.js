//: Priority Queue

/* In computer science, a priority queue is an abstract data type which is like a regular queue or stack data structure, but where additionally each element has "priority" associated with it. In a priority queue, an element with hight priority is served before an element with low priority. If two elements have the same priority, they are served according to their order in the queue. 

While priority queues are often implemented with heaps, they are conceptually distinct from heaps. A priority queue is an abstract concept like "a list" or "a map"; just as a list can be implemented with a linked list or an array, a priority queue can be implemented with a heap or a variety of other methods such as an unordered array.*/

class Element {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  enqueue(element, priority) {
    const queue = new Element(element, priority);

    let contain = false;

    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i].priority < queue.priority) {
        this.collection.splice(i, 0, queue);
        contain = true;

        break;
      }
    }

    if (!contain) {
      this.collection.push(queue);
    }
  }

  dequeue() {
    return this.collection.shift();
  }

  peek() {
    return this.collection[0];
  }

  rear() {
    return this.collection[this.collection.length - 1];
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  print() {
    return console.log(this.collection);
  }
}

const pQ = new PriorityQueue();

pQ.enqueue("Jhon", 3);
pQ.enqueue("Mike", 2);
pQ.enqueue("Log", 1);

pQ.dequeue();

console.log("front of the array", pQ.peek());
console.log("last element", pQ.rear());
pQ.print();

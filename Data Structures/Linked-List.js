//: Linked List

/* A linked list is a linear data structure similar to an array. However, unlike arrays, elements are not shared in a particular momory location or index, Rather each element is a separate object that contain a pointer or a link to the next object in that list.


Each element (commonly called nodes) contains two items: the data stored and a link to the next node. The data can be any valid data type.

The entry point to a linked list is called the head. The head is a reference to the first node in the linked list. The last node on the list points to null. If a list is empty, the head is null reference.*/

//* iN JAVASCRIPT, A LINKED LIST LOOK LIKE THIS:

const listt = {
  head: {
    value: 6,
    next: {
      value: 5,
      next: {
        value: 4,
        next: {
          value: 3,
          next: {
            value: 2,
            next: {
              value: 1,
              next: {
                value: 0,
                next: null,
              },
            },
          },
        },
      },
    },
  },
};

//* An Advantage of Linked Lists

/* Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. This is one advantage it has over arrays. */

//* Disadvantages of Linked lists

/* => Search operations are slow in linked lists. Unlike arrays, random access of data elements is not allowed. Nodes are accessed sequentially strating from the first node.

=> It uses more memory that arrays because of the storage of the pointers.*/

//* Types of Linked Lists - 3

/* => 1.Singly Linked Lists: Each node contains only one pointer to the next node. This is what we have been talking about so far.

=> 2.Doubly Linked Lists: Each node contains two pointers, a pointer to the next node and a pointer to the previous node.

=> 3.Circular Linked Lists: Circular linked list are a variation of a linked list is which the last node points to the first node or any other node before it, thereby forming a loop.*/

//* Implementing a List Node in JavaScript

/* As started earlier, a list node contain two items: the data and the pointer to the next node. We can implement a list node in JavaScript as follows */

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//* Implementing a Linked List in JavaScript

/* The code below shows the implementation of a linked list class with a constructor. Notice that if the head node is not passed, the head is initialised to null. */

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

//* Putting it all together

/* Let's create a linked list with the class we just created. First, we create two list nodes, node1 and node2 and a pointer from node 1 to node 2. */

let node1 = new ListNode(2);
let node2 = new ListNode(5);

node1.next = node2;

// Next, we'll create a Linked list with the ndoe1.

let list = new LinkedList(node1);

// Let's try to access the nodes in the list we just created.

console.log(list.head.next.data);  // 5



//* Some linkedList methods

/* Next up, we will implement four helper methods for the linked list. */


// ==> 1.size()

/* This method returns the number of nodes present in the lined list. */

size() {
    let count = 0;
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count
}


// ==> 2.clear()
// This method empties our the list.

clear(){
    this.head = null;
}


// ==> 3.getLast()
// This method returns the last node of the linked list.

getLast(){
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode;
}


// ==> 4.getFirst()
// This method return the first node of the linked list.

getFirst(){
    return this.head;
}
//: Tree

/* A tree is a data structure consisting of a set of linked nodes that represent a hierachical tree structure. Each node is linked to others via parent-children relationship. The first not in the tree is the root, whereas nodes without any children are the leaves. */

//* Each node in a tree data strucutre must have the following properties:

/* => Key: The key of the node
   => value: The value of the node
   => parent: The parent of the node (null if there is none)
   => children: An array of pointers to the node's children */

//* The main operations of a tree data structure are:

/* 
=> insert: Inserts a node as a child of the given parent node
=> remove: Removes a node and its children from the tree
=> find: Retrieves a given node
=> preOrderTraversal: Traverses the tree by recursively traversing each node followed by its children
=> postOrderTraversal: Traverses the tree by recursively traversing each node's children followed by the node.
*/

class TreeNode {
  constructor(key, value = key, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.children = [];
  }

  get isLeaf() {
    return this.children.length === 0;
  }

  get hasChildren() {
    return !this.isLeaf;
  }
}

class Tree {
  constructor(key, value = key) {
    this.root = new TreeNode(key, value);
  }

  *preOrderTraversal(node = this.root) {
    yield node;
    if (node.children.length) {
      for (let child of node.children) {
        yield* this.preOrderTraversal(child);
      }
    }
  }

  *postOrderTraversal(node = this.root) {
    if (node.children.length) {
      for (let child of node.children) {
        yield* this.postOrderTraversal(child);
      }
    }
    yield node;
  }

  insert(parentNodeKey, key, value = key) {
    for (let node of this.preOrderTraversal()) {
      if (node.key === parentNodeKey) {
        node.children.push(new TreeNode(key, value, node));
        return true;
      }
    }
    return false;
  }

  remove(key) {
    for (let node of this.preOrderTraversal()) {
      const filtered = node.children.filter((c) => c.key !== key);
      if (filtered.length !== node.children.length) {
        node.children = filtered;
        return true;
      }
    }
    return false;
  }

  find(key) {
    for (let node of this.preOrderTraversal()) {
      if (node.key === key) return node;
    }
    return undefined;
  }
}


const tree = new Tree(1, 'AB');

tree.insert(1, 11, 'AC');
tree.insert(1, 12, 'BC');
tree.insert(12, 121, 'BG');

[...tree.preOrderTraversal()].map(x => x.value);
// ['AB', 'AC', 'BC', 'BCG']

tree.root.value;              // 'AB'
tree.root.hasChildren;        // true

tree.find(12).isLeaf;         // false
tree.find(121).isLeaf;        // true
console.log(tree.find(121).parent.value);  // 'BC'

tree.remove(12);

[...tree.postOrderTraversal()].map(x => x.value);
// ['AC', 'AB']
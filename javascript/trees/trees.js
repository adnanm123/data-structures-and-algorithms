'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let order = [];

    const traverse = (current) => {
      if (!current) return;
      order.push(current.value);

      if (current.left) {
        traverse(current.left);
      }
      if (current.right) {
        traverse(current.right);
      }
    };
    traverse(this.root);

    return order;
  }

  inOrder() {
    let order = [];

    const traverse = (current) => {
      if (!current) return;

      if (current.left) {
        traverse(current.left);
      }

      order.push(current.value);

      if (current.right) {
        traverse(current.right);
      }
    };
    traverse(this.root);

    return order;
  }

  postOrder() {
    let order = [];

    const traverse = (current) => {
      if (!current) return;

      if (current.left) {
        traverse(current.left);
      }
      if (current.right) {
        traverse(current.right);
      }

      order.push(current.value);
    };
    traverse(this.root);

    return order;
  }

  // breadth first traversal
  bfs() {
    let root = this.root;

    let queue = [];
    let order = [];
    queue.push(root);

    while (queue.length > 0) {
      let current = queue.shift();
      order.push(current.value);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

    return order;
  }

  findMax() {
    if (!this.root) {
      return null;
    }

    let maxValue = this.root.value;

    const traverse = (current) => {
      if (current.value > maxValue) {
        maxValue = current.value;
      }

      if (current.left) {
        traverse(current.left);
      }

      if (current.right) {
        traverse(current.right);
      }
    };

    traverse(this.root);

    return maxValue;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  // adds a value to our BST
  add(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // searches for a value in our BST, and returns a boolean
  contains(value) {
    return this.search(this.root, value);
  }

  search(node, value) {
    if (!node) {
      return false;
    }

    if (node.value === value) {
      return true;
    }

    if (value < node.value) {
      return this.search(node.left, value);
    }

    return this.search(node.right, value);
  }
}

// Testing
let tree = new BinarySearchTree();

tree.add(4);
tree.add(2);
tree.add(6);
tree.add(1);
tree.add(3);
tree.add(5);
tree.add(7);

console.log(tree.contains(5)); // Should return true
console.log(tree.contains(8)); // Should return false

module.exports = { BinarySearchTree };



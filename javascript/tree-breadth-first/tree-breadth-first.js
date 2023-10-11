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

  breadthFirst() {
    if (!this.root) return [];

    const result = [];
    const queue = [this.root];

    while (queue.length) {
      const current = queue.shift();
      result.push(current.value);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

    return result;
  }
}

module.exports = { Node, BinaryTree };

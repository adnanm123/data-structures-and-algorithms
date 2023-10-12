class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor() {
    this.root = null;
  }
}

function fizzBuzzTree(tree) {
  if (!tree.root) {
    return new KaryTree();
  }

  const newTree = new KaryTree();

  function traverse(node) {
    let newValue;

    if (node.value % 3 === 0 && node.value % 5 === 0) {
      newValue = "FizzBuzz";
    } else if (node.value % 3 === 0) {
      newValue = "Fizz";
    } else if (node.value % 5 === 0) {
      newValue = "Buzz";
    } else {
      newValue = node.value.toString();
    }

    const newNode = new Node(newValue);
    newTree.root = newTree.root || newNode;

    for (const child of node.children) {
      const newChild = traverse(child);
      newNode.children.push(newChild);
    }

    return newNode;
  }

  traverse(tree.root);
  return newTree;
}

module.exports = { KaryTree, Node, fizzBuzzTree };

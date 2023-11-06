const HashMap = require('../hashtable');

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
}

function treeIntersection(tree1, tree2) {
  const map = new HashMap();
  const result = [];

  function traversePopulate(node) {
    if (!node) return;
    map.set(node.value, true);   // Changed from map.add() to map.set()
    traversePopulate(node.left);
    traversePopulate(node.right);
  }

  function traverseCheck(node) {
    if (!node) return;
    if (map.has(String(node.value))) {   // Changed from map.repeatedWord() to map.has()
      result.push(node.value);
    }
    traverseCheck(node.left);
    traverseCheck(node.right);
  }

  traversePopulate(tree1.root);
  traverseCheck(tree2.root);

  return result;
}

module.exports = { Node, BinaryTree, treeIntersection };

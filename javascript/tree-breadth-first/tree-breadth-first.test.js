const { Node, BinaryTree } = require('./tree-breadth-first');

describe('Breadth-First Traversal', () => {
  it('returns an empty array for an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.breadthFirst()).toEqual([]);
  });

  it('returns values in the order they were encountered', () => {
    const root = new Node(2);
    const tree = new BinaryTree();
    tree.root = root;

    root.left = new Node(7);
    root.right = new Node(5);
    root.left.left = new Node(2);
    root.left.right = new Node(6);
    root.right.right = new Node(9);
    root.right.right.left = new Node(4); // Move this node to the left of 9
    root.right.right.right = new Node(5);
    root.left.left.left = new Node(11); // Move this node to the left of 4

    expect(tree.breadthFirst()).toEqual([2, 7, 5, 2, 6, 9, 11, 4, 5]);
  });
});

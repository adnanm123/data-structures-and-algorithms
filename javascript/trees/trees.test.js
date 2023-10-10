const { BinarySearchTree } = require('./trees'); // Make sure to adjust the import path

describe('BinarySearchTree', () => {
  it('can successfully instantiate an empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree.root).toBeNull();
  });

  it('can successfully add a single root node', () => {
    const tree = new BinarySearchTree();
    tree.add(10);
    expect(tree.root).toBeDefined();
    expect(tree.root.value).toBe(10);
  });

  it('can successfully add nodes to the left and right', () => {
    const tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    expect(tree.root.value).toBe(10);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.right.value).toBe(15);
  });

  it('can successfully perform a pre-order traversal', () => {
    const tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(3);
    tree.add(7);
    tree.add(12);
    tree.add(18);

    const expectedOrder = [10, 5, 3, 7, 15, 12, 18];
    const preOrder = tree.preOrder();
    expect(preOrder).toEqual(expectedOrder);
  });

  it('can successfully perform an in-order traversal', () => {
    const tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(3);
    tree.add(7);
    tree.add(12);
    tree.add(18);

    const expectedOrder = [3, 5, 7, 10, 12, 15, 18];
    const inOrder = tree.inOrder();
    expect(inOrder).toEqual(expectedOrder);
  });

  it('can successfully perform a post-order traversal', () => {
    const tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(3);
    tree.add(7);
    tree.add(12);
    tree.add(18);

    const expectedOrder = [3, 7, 5, 12, 18, 15, 10];
    const postOrder = tree.postOrder();
    expect(postOrder).toEqual(expectedOrder);
  });

  it('can successfully check if a value exists in the tree', () => {
    const tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(3);
    tree.add(7);
    tree.add(12);
    tree.add(18);

    expect(tree.contains(7)).toBe(true);
    expect(tree.contains(9)).toBe(false);
  });
});

it('should successfully return the maximum value for the findMax method', () => {
  const tree = new BinarySearchTree();
  tree.add(4);
  tree.add(2);
  tree.add(6);
  tree.add(1);
  tree.add(3);
  tree.add(5);
  tree.add(7);

  expect(tree.findMax()).toEqual(7);
});

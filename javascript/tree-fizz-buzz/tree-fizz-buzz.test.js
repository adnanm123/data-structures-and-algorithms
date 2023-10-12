const { KaryTree, Node, fizzBuzzTree } = require('./tree-fizz-buzz');

describe('Fizz Buzz Tree', () => {
  it('should transform a k-ary tree according to FizzBuzz rules', () => {
    const originalTree = new KaryTree();
    const root = new Node(3);
    const child1 = new Node(5);
    const child2 = new Node(15);
    const child3 = new Node(2);
    root.children = [child1, child2, child3];
    originalTree.root = root;

    const expectedTree = fizzBuzzTree(originalTree);

    // Expected structure:
    //     "Fizz"
    //   /   |   \
    // "Buzz" "FizzBuzz" "2"
    expect(expectedTree.root.value).toEqual("Fizz");
    expect(expectedTree.root.children[0].value).toEqual("Buzz");
    expect(expectedTree.root.children[1].value).toEqual("FizzBuzz");
    expect(expectedTree.root.children[2].value).toEqual("2");
  });

  it('should return an empty tree if the input tree is empty', () => {
    const originalTree = new KaryTree();
    const expectedTree = fizzBuzzTree(originalTree);
    expect(expectedTree.root).toBe(null);
  });
});

# Tree Intersection

## Challenge Description
Find common values in 2 binary trees.

## Specifications
- Do all your work in a public repository called `data-structures-and-algorithms`.
- Create a branch in your repository called `tree-intersection`.
- On your branch, create the respective directories and files based on your language of choice.
- Include any language-specific configuration files required.

## Feature Tasks
Write a function called `tree_intersection` that takes two binary trees as parameters. Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees.

### Structure and Testing
- Utilize the Single-responsibility principle.
- Write at least three test assertions for each method that you define.
- Ensure your tests are passing before you submit your solution.

## Whiteboard Process
![Tree Intersection Whiteboard](path-to-your-whiteboard-image.jpg)
*Replace 'path-to-your-whiteboard-image.jpg' with the actual path to your whiteboard image.*

## Approach & Efficiency
Our approach involves traversing through the first binary tree and adding each value to a hashmap. Then, we traverse the second binary tree, checking the hashmap for each value. If a value is found in the hashmap, it's added to the result set.

**Time Complexity**: O(n + m), where n and m are the numbers of nodes in the two trees, respectively.
**Space Complexity**: O(n).

## Solution
### To Run the Code
- Instantiate two binary trees.
- Populate the trees with values.
- Call the `tree_intersection` function with both trees as arguments.

### Example
```javascript
const tree1 = new BinaryTree();
// ... add nodes to tree1

const tree2 = new BinaryTree();
// ... add nodes to tree2

const commonValues = tree_intersection(tree1, tree2);
console.log(commonValues); // Expected output: [100,160,125,175,200,350,500]

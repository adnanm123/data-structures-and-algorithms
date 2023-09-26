const { LinkedList } = require('./app'); // Replace with the actual path to your LinkedList file.

describe('LinkedList', () => {
  it('can successfully add a node to the end of the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    if (list.head.value === 1) {
      console.log('Test Passed: Node added to the end.');
    } else {
      console.error('Test Failed: Node not added to the end.');
    }
  });

  it('can successfully add multiple nodes to the end of a linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    if (
      list.head.value === 1 &&
      list.head.next.value === 2 &&
      list.head.next.next.value === 3
    ) {
      console.log('Test Passed: Multiple nodes added to the end.');
    } else {
      console.error('Test Failed: Multiple nodes not added to the end.');
    }
  });

  it('can successfully insert a node before a node located in the middle of a linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(3);
    list.insertBefore(3, 2);
    if (
      list.head.value === 1 &&
      list.head.next.value === 2 &&
      list.head.next.next.value === 3
    ) {
      console.log('Test Passed: Node inserted before the middle node.');
    } else {
      console.error('Test Failed: Node not inserted before the middle node.');
    }
  });

  it('can successfully insert a node before the first node of a linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.insertBefore(1, 0);
    if (list.head.value === 0 && list.head.next.value === 1) {
      console.log('Test Passed: Node inserted before the first node.');
    } else {
      console.error('Test Failed: Node not inserted before the first node.');
    }
  });

  it('can successfully insert after a node in the middle of the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(3);
    list.insertAfter(1, 2);
    if (
      list.head.value === 1 &&
      list.head.next.value === 2 &&
      list.head.next.next.value === 3
    ) {
      console.log('Test Passed: Node inserted after the middle node.');
    } else {
      console.error('Test Failed: Node not inserted after the middle node.');
    }
  });

  it('can successfully insert a node after the last node of the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.insertAfter(1, 2);
    if (list.head.value === 1 && list.head.next.value === 2) {
      console.log('Test Passed: Node inserted after the last node.');
    } else {
      console.error('Test Failed: Node not inserted after the last node.');
    }
  });
});

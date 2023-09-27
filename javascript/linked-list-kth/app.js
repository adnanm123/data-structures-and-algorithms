class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  kthFromEnd(k) {
    if (k < 0 || !Number.isInteger(k)) {
      throw new Error("Invalid input: k should be a positive integer.");
    }

    let current = this.head;
    let kthNode = this.head;
    let length = 0;

    // Traverse the list to find the length
    while (current) {
      current = current.next;
      length++;
    }

    if (k >= length) {
      throw new Error('Invalid input: k is greater than or equal to the length of the list.');
    }

    // Move k positions ahead from the start
    for (let i = 0; i < k; i++) {
      kthNode = kthNode.next;
    }

    current = this.head;

    // Move both pointers until the end of the list
    while (kthNode.next) {
      current = current.next;
      kthNode = kthNode.next;
    }

    return current.value;
  }
}

module.exports = { Node, LinkedList };

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
    return null;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
    return null;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack(); // For enqueue
    this.stack2 = new Stack(); // For dequeue
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.isEmpty()) {
      // Transfer items from stack1 to stack2 for dequeue
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }
}

module.exports = PseudoQueue;

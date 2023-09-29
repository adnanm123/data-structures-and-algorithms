const { Stack, Queue } = require('./app'); // Adjust the import path as needed

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

describe('Stack', () => {
  it('should push onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    assert(stack.peek() === 1, 'Stack push test failed');
  });

  it('should push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    assert(stack.peek() === 2, 'Stack push multiple values test failed');
  });

  it('should pop off the stack', () => {
    const stack = new Stack();
    stack.push(1);
    const poppedValue = stack.pop();
    assert(poppedValue === 1, 'Stack pop test failed');
  });

  it('should empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    assert(stack.isEmpty(), 'Stack empty after multiple pops test failed');
  });

  it('should peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push('A');
    stack.push('B');
    assert(stack.peek() === 'B', 'Stack peek test failed');
  });

  it('should instantiate an empty stack', () => {
    const stack = new Stack();
    assert(stack.isEmpty(), 'Stack instantiation test failed');
  });

  it('calling pop on empty stack raises exception', () => {
    const stack = new Stack();
    assert(() => stack.pop(), 'Stack pop on empty stack did not raise an exception');
  });

  it('calling peek on empty stack raises exception', () => {
    const stack = new Stack();
    assert(() => stack.peek(), 'Stack peek on empty stack did not raise an exception');
  });
});

describe('Queue', () => {
  it('should enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue('A');
    assert(queue.peek() === 'A', 'Queue enqueue test failed');
  });

  it('should enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue('A');
    queue.enqueue('B');
    assert(queue.peek() === 'A', 'Queue enqueue multiple values test failed');
  });

  it('should dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    const dequeuedValue = queue.dequeue();
    assert(dequeuedValue === 1, 'Queue dequeue test failed');
  });

  it('should empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    assert(queue.isEmpty(), 'Queue empty after multiple dequeues test failed');
  });

  it('should peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue('X');
    queue.enqueue('Y');
    assert(queue.peek() === 'X', 'Queue peek test failed');
  });

  it('should instantiate an empty queue', () => {
    const queue = new Queue();
    assert(queue.isEmpty(), 'Queue instantiation test failed');
  });

  it('calling dequeue on empty queue raises exception', () => {
    const queue = new Queue();
    assert(() => queue.dequeue(), 'Queue dequeue on empty queue did not raise an exception');
  });

  it('calling peek on empty queue raises exception', () => {
    const queue = new Queue();
    assert(() => queue.peek(), 'Queue peek on empty queue did not raise an exception');
  });
});

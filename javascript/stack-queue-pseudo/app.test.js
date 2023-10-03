const assert = require('assert');
const PseudoQueue = require('./app'); // Make sure to adjust the path as needed

describe('PseudoQueue', function () {
  it('should enqueue values and dequeue in FIFO order', function () {
    const queue = new PseudoQueue();

    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);
    queue.enqueue(20);

    assert.strictEqual(queue.dequeue(), 5);
    assert.strictEqual(queue.dequeue(), 10);
    assert.strictEqual(queue.dequeue(), 15);
    assert.strictEqual(queue.dequeue(), 20);
  });

  it('should handle edge case when dequeue is called on an empty queue', function () {
    const queue = new PseudoQueue();

    assert.strictEqual(queue.dequeue(), null);
  });

  it('should handle enqueue after dequeue and maintain FIFO order', function () {
    const queue = new PseudoQueue();

    queue.enqueue(5);
    queue.enqueue(10);
    assert.strictEqual(queue.dequeue(), 5);

    queue.enqueue(15);
    assert.strictEqual(queue.dequeue(), 10);
    assert.strictEqual(queue.dequeue(), 15);
    assert.strictEqual(queue.dequeue(), null);
  });
});

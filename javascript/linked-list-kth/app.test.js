const { LinkedList } = require('./app'); // Import your LinkedList class

describe('LinkedList', () => {
  describe('kthFromEnd', () => {
    it('should return the correct value when k is valid', () => {
      const ll = new LinkedList();
      ll.append(1);
      ll.append(3);
      ll.append(8);
      ll.append(2);

      const result1 = ll.kthFromEnd(0);
      const result2 = ll.kthFromEnd(2);

      if (result1 === 2 && result2 === 3) {
        // Test passes
      } else {
        throw new Error('Test failed: Expected results not met.');
      }
    });

    it('should throw an exception when k is negative', () => {
      const ll = new LinkedList();
      ll.append(1);

      let errorThrown = false;
      try {
        ll.kthFromEnd(-1);
      } catch (error) {
        if (error.message === 'Invalid input: k should be a positive integer.') {
          errorThrown = true;
        }
      }

      if (errorThrown) {
        // Test passes
      } else {
        throw new Error('Test failed: Expected exception not thrown.');
      }
    });

    it('should throw an exception when k is greater than or equal to the length of the list', () => {
      const ll = new LinkedList();
      ll.append(1);
      ll.append(3);

      let errorThrown = false;
      try {
        ll.kthFromEnd(2);
      } catch (error) {
        if (error.message === 'Invalid input: k is greater than or equal to the length of the list.') {
          errorThrown = true;
        }
      }

      if (errorThrown) {
        // Test passes
      } else {
        throw new Error('Test failed: Expected exception not thrown.');
      }
    });

    it('should throw an exception when k is not an integer', () => {
      const ll = new LinkedList();
      ll.append(1);

      let errorThrown = false;
      try {
        ll.kthFromEnd('not an integer');
      } catch (error) {
        if (error.message === 'Invalid input: k should be a positive integer.') {
          errorThrown = true;
        }
      }

      if (errorThrown) {
        // Test passes
      } else {
        throw new Error('Test failed: Expected exception not thrown.');
      }
    });

    it('should handle a list of size 1', () => {
      const ll = new LinkedList();
      ll.append(5);

      const result1 = ll.kthFromEnd(0);

      if (result1 === 5) {
        // Test passes
      } else {
        throw new Error('Test failed: Expected result not met.');
      }

      let errorThrown = false;
      try {
        ll.kthFromEnd(1);
      } catch (error) {
        if (error.message === 'Invalid input: k is greater than or equal to the length of the list.') {
          errorThrown = true;
        }
      }

      if (errorThrown) {
        // Test passes
      } else {
        throw new Error('Test failed: Expected exception not thrown.');
      }
    });

    it('should return the correct value when k is in the middle of the list', () => {
      const ll = new LinkedList();
      ll.append(1);
      ll.append(3);
      ll.append(8);
      ll.append(2);

      const result1 = ll.kthFromEnd(1);
      const result2 = ll.kthFromEnd(2);

      if (result1 === 8 && result2 === 3) {
        // Test passes
      } else {
        throw new Error('Test failed: Expected results not met.');
      }
    });
  });
});

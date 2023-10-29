const Hashtable = require('./index');

describe('Hashtable', () => {
  let table;

  beforeEach(() => {
    table = new Hashtable();
  });

  it('should set and get key-value pairs', () => {
    table.set('name', 'John');
    expect(table.get('name')).toBe('John');
  });

  it('should return null for keys that do not exist', () => {
    expect(table.get('age')).toBeNull();
  });

  it('should check if a key exists', () => {
    table.set('name', 'John');
    expect(table.has('name')).toBe(true);
    expect(table.has('age')).toBe(false);
  });

  it('should return a list of unique keys', () => {
    table.set('name', 'John');
    table.set('city', 'New York');
    table.set('country', 'USA');
    expect(table.keys()).toEqual(['name', 'city', 'country']);
  });

  it('should handle collisions and retrieve values correctly', () => {
    // Create a collision by hashing 'name' and 'mane' to the same index
    table.set('name', 'John');
    table.set('mane', 'Lion');
    expect(table.get('name')).toBe('John');
    expect(table.get('mane')).toBe('Lion');
  });

  it('should hash a key to an in-range value', () => {
    const hashValue = table.hash('name');
    expect(hashValue).toBeGreaterThanOrEqual(0);
    expect(hashValue).toBeLessThan(table.size);
  });

  // Add more test cases to cover different scenarios
});

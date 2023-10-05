// app.test.js

const validateBrackets = require('./app');

describe('validateBrackets function', () => {
  it('should return true for balanced brackets', () => {
    expect(validateBrackets('{}')).toBeTruthy();
    expect(validateBrackets('{}{}()')).toBeTruthy(); // Updated test with only brackets
    expect(validateBrackets('()')).toBeTruthy(); // Added test with only brackets
    expect(validateBrackets('(){}[[]]')).toBeTruthy();
  });

  it('should return false for unbalanced brackets', () => {
    expect(validateBrackets('[({}]')).toBeFalsy();
    expect(validateBrackets('(](')).toBeFalsy();
    expect(validateBrackets('{(})')).toBeFalsy();
  });

  it('should handle edge cases', () => {
    expect(validateBrackets('')).toBeTruthy(); // Empty string is considered balanced
    expect(validateBrackets('[')).toBeFalsy(); // Unmatched opening bracket
    expect(validateBrackets(']')).toBeFalsy(); // Unmatched closing bracket
  });
});

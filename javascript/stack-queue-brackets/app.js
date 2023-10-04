// app.js

function validateBrackets(input) {
  const stack = [];
  const bracketPairs = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  for (let char of input) {
    if (bracketPairs[char]) {
      stack.push(char);
    } else {
      const lastBracket = stack.pop();
      if (bracketPairs[lastBracket] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = validateBrackets;

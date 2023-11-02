const leftJoin = require('./index');
const assert = require('assert');

describe('leftJoin function', () => {
  it('should return the correct left join of two hashmaps', () => {
    let synonyms = new Map([
      ["diligent", "employed"],
      ["fond", "enamored"],
      ["guide", "usher"],
      ["outfit", "garb"],
      ["wrath", "anger"]
    ]);

    let antonyms = new Map([
      ["diligent", "idle"],
      ["fond", "averse"],
      ["guide", "follow"],
      ["flow", "jam"],
      ["wrath", "delight"]
    ]);

    let result = leftJoin(synonyms, antonyms);

    assert.deepEqual(result, [
      ["diligent", "employed", "idle"],
      ["fond", "enamored", "averse"],
      ["guide", "usher", "follow"],
      ["outfit", "garb", null],
      ["wrath", "anger", "delight"]
    ]);
  });

  // ... you can add more tests as necessary
});

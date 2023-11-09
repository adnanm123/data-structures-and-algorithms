function repeatedWord(str) {
  const words = str.toLowerCase().split(/[\s,]+/);
  const wordSet = new Set();

  for (const word of words) {
    if (wordSet.has(word)) {
      return word;
    }
    wordSet.add(word);
  }

  return null;
}

console.log(
  repeatedWord('Once upon a time, there was a brave princess who...')
);

module.exports = repeatedWord;

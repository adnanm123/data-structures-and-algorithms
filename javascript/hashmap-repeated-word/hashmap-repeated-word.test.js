const repeatedWord = require('./index'); // Assuming index.js and test.js are in the same directory

describe('repeatedWord Function', () => {
  it('should return the first repeated word', () => {
    expect(
      repeatedWord('Once upon a time, there was a brave princess who...')
    ).toBe('a');
    expect(
      repeatedWord(
        'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness...'
      )
    ).toBe('it');
    expect(
      repeatedWord(
        'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'
      )
    ).toBe('summer');
  });

  it('should return null if no repeated word is found', () => {
    expect(repeatedWord('Hello World!')).toBeNull();
  });
});

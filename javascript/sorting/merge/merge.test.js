const mergeSort = require('./index');


describe('Merge Sort', () => {
  test('Should sort an unsorted array', () => {
    const unsorted = [8, 4, 23, 42, 16, 15];
    expect(mergeSort(unsorted)).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('Should handle a reverse-sorted array', () => {
    const reverseSorted = [20, 18, 12, 8, 5, -2];
    expect(mergeSort(reverseSorted)).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  test('Should handle an array with few unique values', () => {
    const fewUniques = [5, 12, 7, 5, 5, 7];
    expect(mergeSort(fewUniques)).toEqual([5, 5, 5, 7, 7, 12]);
  });

  test('Should handle a nearly-sorted array', () => {
    const nearlySorted = [2, 3, 5, 7, 13, 11];
    expect(mergeSort(nearlySorted)).toEqual([2, 3, 5, 7, 11, 13]);
  });

  test('Should handle an empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });

  test('Should handle an array with one element', () => {
    expect(mergeSort([5])).toEqual([5]);
  });
});

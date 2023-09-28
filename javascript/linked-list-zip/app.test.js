const {LinkedList, zipLists } = require('./app'); // Replace with the actual file path

describe('zipLists', () => {
  it('should zip two linked lists of equal length', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(2);

    const list2 = new LinkedList();
    list2.append(5);
    list2.append(9);
    list2.append(4);

    const zippedList = zipLists(list1, list2);

    expect(zippedList.head.value).toEqual(1);
    expect(zippedList.head.next.value).toEqual(5);
    expect(zippedList.head.next.next.value).toEqual(3);
    expect(zippedList.head.next.next.next.value).toEqual(9);
    expect(zippedList.head.next.next.next.next.value).toEqual(2);
    expect(zippedList.head.next.next.next.next.next.value).toEqual(4);
    expect(zippedList.head.next.next.next.next.next.next).toBeNull();
  });

  it('should zip two linked lists of different lengths', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);

    const list2 = new LinkedList();
    list2.append(5);
    list2.append(9);
    list2.append(4);

    const zippedList = zipLists(list1, list2);

    expect(zippedList.head.value).toEqual(1);
    expect(zippedList.head.next.value).toEqual(5);
    expect(zippedList.head.next.next.value).toEqual(3);
    expect(zippedList.head.next.next.next.value).toEqual(9);
    expect(zippedList.head.next.next.next.next.value).toEqual(4);
    expect(zippedList.head.next.next.next.next.next).toBeNull();
  });

  it('should zip two linked lists when one is empty', () => {
    const list1 = new LinkedList();

    const list2 = new LinkedList();
    list2.append(5);
    list2.append(9);
    list2.append(4);

    const zippedList = zipLists(list1, list2);

    expect(zippedList.head.value).toEqual(5);
    expect(zippedList.head.next.value).toEqual(9);
    expect(zippedList.head.next.next.value).toEqual(4);
    expect(zippedList.head.next.next.next).toBeNull();
  });

  it('should return an empty linked list when both input lists are empty', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    const zippedList = zipLists(list1, list2);
    expect(zippedList.head).toBeNull();
  });
});

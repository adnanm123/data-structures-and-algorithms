class Hashtable {
  constructor(size = 100) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    for (const entry of this.table[index]) {
      if (entry[0] === key) {
        entry[1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (const entry of this.table[index]) {
        if (entry[0] === key) {
          return entry[1];
        }
      }
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (const entry of this.table[index]) {
        if (entry[0] === key) {
          return true;
        }
      }
    }
    return false;
  }

  keys() {
    const keysArray = [];
    for (const bucket of this.table) {
      if (bucket) {
        for (const entry of bucket) {
          keysArray.push(entry[0]);
        }
      }
    }
    return Array.from(new Set(keysArray));
  }
}

module.exports = Hashtable;

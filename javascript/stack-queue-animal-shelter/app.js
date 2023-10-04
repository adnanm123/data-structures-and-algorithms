class AnimalShelter {
  constructor() {
    this.dogQueue = [];
    this.catQueue = [];
  }

  enqueue(animal) {
    if (animal.species === "dog") {
      this.dogQueue.push(animal);
    } else if (animal.species === "cat") {
      this.catQueue.push(animal);
    }
  }

  dequeue(pref) {
    if (pref === "dog") {
      if (this.dogQueue.length > 0) {
        return this.dogQueue.shift();
      }
    } else if (pref === "cat") {
      if (this.catQueue.length > 0) {
        return this.catQueue.shift();
      }
    } else {
      return null; // Return null for invalid preference
    }

    // If pref is not specified or it is a valid preference, return the oldest animal
    if (this.dogQueue.length > 0 && this.catQueue.length > 0) {
      // Compare timestamps to determine which animal arrived first
      if (this.dogQueue[0].timestamp < this.catQueue[0].timestamp) {
        return this.dogQueue.shift();
      } else {
        return this.catQueue.shift();
      }
    } else if (this.dogQueue.length > 0) {
      return this.dogQueue.shift();
    } else if (this.catQueue.length > 0) {
      return this.catQueue.shift();
    }

    return null; // Return null if the shelter is empty
  }
}

class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
    this.timestamp = Date.now(); // Timestamp for tracking arrival order
  }
}

module.exports = { AnimalShelter, Animal };

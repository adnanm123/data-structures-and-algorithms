const { AnimalShelter, Animal } = require('./app'); // Update the path as needed

describe('AnimalShelter', () => {
  it('should enqueue dogs and cats correctly', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue(new Animal("dog", "Buddy"));
    shelter.enqueue(new Animal("cat", "Whiskers"));

    expect(shelter.dogQueue.length).toBe(1);
    expect(shelter.catQueue.length).toBe(1);
  });

  it('should dequeue dogs and cats based on preference', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue(new Animal("dog", "Buddy"));
    shelter.enqueue(new Animal("cat", "Whiskers"));
    shelter.enqueue(new Animal("dog", "Rex"));

    expect(shelter.dequeue("cat")).toEqual({ species: 'cat', name: 'Whiskers', timestamp: expect.any(Number) });
    expect(shelter.dequeue("dog")).toEqual({ species: 'dog', name: 'Buddy', timestamp: expect.any(Number) });
  });

  it('should return null if an invalid preference is provided', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue(new Animal("dog", "Buddy"));
    shelter.enqueue(new Animal("cat", "Whiskers"));

    expect(shelter.dequeue("parrot")).toBe(null);
  });

  it('should return null if preference is not specified', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue(new Animal("dog", "Buddy"));
    shelter.enqueue(new Animal("cat", "Whiskers"));
    shelter.enqueue(new Animal("dog", "Rex"));

    expect(shelter.dequeue()).toBe(null);
  });
});

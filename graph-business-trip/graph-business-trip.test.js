const { Graph, Node, Edge, businessTrip } = require('./index');

describe('businessTrip', () => {
  let graph;
  beforeEach(() => {
    graph = new Graph();
    graph.addNode('Metroville');
    graph.addNode('Pandora');
    graph.addNode('Arendelle');
    graph.addNode('Monstropolis');
    graph.addNode('Naboo');
    graph.addNode('Narnia');

    graph.addEdge('Metroville', 'Pandora', 82);
    graph.addEdge('Metroville', 'Arendelle', 99);
    graph.addEdge('Metroville', 'Monstropolis', 105);
    graph.addEdge('Metroville', 'Naboo', 26);
    graph.addEdge('Metroville', 'Narnia', 37);
    graph.addEdge('Arendelle', 'Monstropolis', 42);
    graph.addEdge('Monstropolis', 'Naboo', 73);
    graph.addEdge('Naboo', 'Narnia', 250);
  });

  test('should return the correct total cost for a possible trip', () => {
    const itinerary = ['Metroville', 'Pandora'];
    expect(businessTrip(graph, itinerary)).toBe(82);
  });

  test('should return the correct total cost for another possible trip', () => {
    const itinerary = ['Arendelle', 'Monstropolis', 'Naboo'];
    expect(businessTrip(graph, itinerary)).toBe(115);
  });

  test('should return null for a trip with no direct flight', () => {
    const itinerary = ['Naboo', 'Pandora'];
    expect(businessTrip(graph, itinerary)).toBeNull();
  });

  test('should return null for another trip with no direct flight', () => {
    const itinerary = ['Narnia', 'Arendelle', 'Naboo'];
    expect(businessTrip(graph, itinerary)).toBeNull();
  });

});

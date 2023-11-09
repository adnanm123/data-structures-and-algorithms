const { Graph } = require('./index');

describe('Graph Business Trip', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
    graph.setupGraph();
  });

  test('businessTrip returns $82 for the trip from Metropolis to Pandora', () => {
    const cost = graph.businessTrip(['Metropolis', 'Pandora']);
    expect(cost).toBe(82);
  });

  test('businessTrip returns $115 for the trip from Arendelle to Monstropolis to Naboo', () => {
    const cost = graph.businessTrip(['Arendelle', 'Monstropolis', 'Naboo']);
    expect(cost).toBe(115);
  });

});

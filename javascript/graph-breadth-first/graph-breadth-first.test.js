const { Graph, Vertex, Edge } = require('./index');

describe('Graph breadth-first traversal', () => {
  it('should return nodes in the correct order', () => {
    const graph = new Graph();
    const pandora = new Vertex('Pandora');
    const arendelle = new Vertex('Arendelle');
    const metroville = new Vertex('Metroville');

    graph.adjacencyList.set(pandora, [new Edge(arendelle)]);
    graph.adjacencyList.set(arendelle, [new Edge(metroville)]);
    graph.adjacencyList.set(metroville, []);

    const result = graph.bfs(pandora); // Directly use the result from bfs
    expect(result).toEqual(['Pandora', 'Arendelle', 'Metroville']);
  });

  it('should return an empty array when the starting vertex is not in the graph', () => {
    const graph = new Graph();
    const nonExistent = new Vertex('NonExistent');

    // Make sure bfs handles non-existent vertices correctly
    expect(graph.bfs(nonExistent)).toEqual([]);
  });

  it('should handle a graph with only one vertex', () => {
    const graph = new Graph();
    const solitude = new Vertex('Solitude');

    graph.adjacencyList.set(solitude, []);

    const result = graph.bfs(solitude); // Directly use the result from bfs
    expect(result).toEqual(['Solitude']);
  });
});

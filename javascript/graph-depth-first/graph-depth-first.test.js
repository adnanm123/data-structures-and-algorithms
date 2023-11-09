const { Graph } = require('./index');

describe('Graph Depth First Traversal', () => {
  it('should perform depth-first traversal starting from node A', () => {
    const graph = new Graph();
    const nodeA = { value: 'A', neighbors: [] };
    const nodeB = { value: 'B', neighbors: [] };
    const nodeC = { value: 'C', neighbors: [] };

    graph.addNode(nodeA);
    graph.addNode(nodeB);
    graph.addNode(nodeC);

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');

    const result = graph.depthFirst(nodeA);
    expect(result).toEqual(['A', 'B', 'C']);
  });

  it('should perform depth-first traversal starting from node X', () => {
    const graph = new Graph();
    const nodeX = { value: 'X', neighbors: [] };
    const nodeY = { value: 'Y', neighbors: [] };
    const nodeZ = { value: 'Z', neighbors: [] };

    graph.addNode(nodeX);
    graph.addNode(nodeY);
    graph.addNode(nodeZ);

    graph.addEdge('X', 'Y');
    graph.addEdge('Y', 'Z');

    const result = graph.depthFirst(nodeX);
    expect(result).toEqual(['X', 'Y', 'Z']);
  });

  it('should handle disconnected nodes', () => {
    const graph = new Graph();
    const nodeM = { value: 'M', neighbors: [] };
    const nodeN = { value: 'N', neighbors: [] };
    const nodeO = { value: 'O', neighbors: [] };

    graph.addNode(nodeM);
    graph.addNode(nodeN);
    graph.addNode(nodeO);

    const result = graph.depthFirst(nodeM);
    expect(result).toEqual(['M']);
  });
});

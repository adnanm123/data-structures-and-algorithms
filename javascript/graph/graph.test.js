const Graph = require("./index");

describe("Graph", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test("Vertex can be successfully added to the graph", () => {
    const vertex = graph.addVertex("v1");
    expect(graph.getVertices()).toContain(vertex);
  });

  test("An edge can be successfully added to the graph", () => {
    const v1 = graph.addVertex("v1");
    const v2 = graph.addVertex("v2");
    graph.addEdge(v1, v2, 1);
    expect(graph.getNeighbors(v1)).toEqual([{ vertex: v2, weight: 1 }]);
  });

  test("A collection of all vertices can be properly retrieved from the graph", () => {
    const v1 = graph.addVertex("v1");
    const v2 = graph.addVertex("v2");
    expect(graph.getVertices()).toEqual([v1, v2]);
  });

  test("All appropriate neighbors can be retrieved from the graph with their weights", () => {
    const v1 = graph.addVertex("v1");
    const v2 = graph.addVertex("v2");
    graph.addEdge(v1, v2, 2);
    expect(graph.getNeighbors(v1)).toEqual([{ vertex: v2, weight: 2 }]);
  });

  test("The proper size is returned, representing the number of vertices in the graph", () => {
    graph.addVertex("v1");
    graph.addVertex("v2");
    expect(graph.size()).toBe(2);
  });

  test("A graph with only one vertex and edge can be properly returned", () => {
    const v1 = graph.addVertex("v1");
    graph.addEdge(v1, v1);
    expect(graph.getNeighbors(v1)).toEqual([{ vertex: v1, weight: 0 }]);
  });

  // graph.test.js

  test("An error is thrown when adding an edge with nonexistent vertex", () => {
    const v1 = graph.addVertex("v1");
    const nonExistingVertex = { value: "v2" }; // Simulate a vertex that wasn't added via addVertex
    expect(() => graph.addEdge(v1, nonExistingVertex)).toThrow(
      "Vertex not found"
    );
  });
});

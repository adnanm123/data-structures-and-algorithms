class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge(startVertex, endVertex, weight) {
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('Vertex not found');
    }
    const edge = new Edge(endVertex, weight);
    this.adjacencyList.get(startVertex).push(edge);
  }

  getVertices() {
    return Array.from(this.adjacencyList.keys());
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('Vertex not found');
    }
    return this.adjacencyList.get(vertex);
  }

  size() {
    return this.adjacencyList.size;
  }
}

module.exports = Graph;

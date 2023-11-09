'use strict';

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

  getEdges(vertex) {
    return this.adjacencyList.has(vertex)
      ? [...this.adjacencyList.get(vertex)]
      : [];
  }

  bfs(start) {
    const visited = new Set();
    const queue = [];
    const order = [];

    if (!this.adjacencyList.has(start)) {
      return order;
    }

    visited.add(start);
    queue.push(start);

    while (queue.length) {
      const current = queue.shift();
      order.push(current.value);

      const edges = this.getEdges(current);
      for (const edge of edges) {
        const { vertex } = edge;
        if (!visited.has(vertex)) {
          visited.add(vertex);
          queue.push(vertex);
        }
      }
    }

    return order;
  }
}

module.exports = { Graph, Vertex, Edge };

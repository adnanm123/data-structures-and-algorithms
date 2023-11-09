class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(node) {
    this.nodes.set(node.value, node);
  }

  addEdge(startNodeValue, endNodeValue) {
    const startNode = this.nodes.get(startNodeValue);
    const endNode = this.nodes.get(endNodeValue);

    if (startNode && endNode) {
      startNode.neighbors.push(endNode);
    }
  }

  depthFirst(startNode) {
    const visited = new Set();
    const result = [];

    function traverse(node) {
      if (!node) return;
      visited.add(node.value);
      result.push(node.value);

      for (const neighbor of node.neighbors) {
        if (!visited.has(neighbor.value)) {
          traverse(neighbor);
        }
      }
    }

    traverse(startNode);
    return result;
  }
}

module.exports = { Graph };

class Node {
  constructor(value) {
    this.value = value;
    this.edges = new Map();
  }
}

class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addCity(city) {
    this.nodes.set(city, new Node(city));
  }

  addFlight(start, end, cost) {
    let startNode = this.nodes.get(start);
    let endNode = this.nodes.get(end);
    if (startNode && endNode) {
      startNode.edges.set(endNode, cost);
      endNode.edges.set(startNode, cost);
    }
  }

  getCity(city) {
    return this.nodes.get(city);
  }

  businessTrip(cities) {
    let totalCost = 0;

    for (let i = 0; i < cities.length - 1; i++) {
      let startCity = this.getCity(cities[i]);
      let destinationCity = this.getCity(cities[i + 1]);

      if (startCity && destinationCity) {
        let cost = startCity.edges.get(destinationCity);
        if (cost) {
          totalCost += cost;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }

    return totalCost;
  }


  setupGraph() {

    const cities = ['Metropolis', 'Pandora', 'Arendelle', 'Monstropolis', 'Naboo', 'Narnia'];
    cities.forEach(city => this.addCity(city));

    this.addFlight('Metropolis', 'Pandora', 82);
    this.addFlight('Metropolis', 'Arendelle', 99);
    this.addFlight('Metropolis', 'Monstropolis', 105);
    this.addFlight('Metropolis', 'Naboo', 26);
    this.addFlight('Pandora', 'Arendelle', 150);
    this.addFlight('Arendelle', 'Monstropolis', 42);
    this.addFlight('Monstropolis', 'Naboo', 73);
    this.addFlight('Narnia', 'Naboo', 250);
    this.addFlight('Narnia', 'Metropolis', 37);
  }
}

module.exports = { Graph };

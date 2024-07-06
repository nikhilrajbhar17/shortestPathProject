// utils/dijkstra.js

const { PriorityQueue } = require("./priorityQueue"); // Assuming you have implemented PriorityQueue

function dijkstra(graph, source, destination) {
  const dist = {};
  const parent = {};
  const pq = new PriorityQueue();

  // Initialize distances to all nodes as Infinity except for source
  Object.keys(graph).forEach((node) => {
    dist[node] = Infinity;
    parent[node] = null;
  });
  dist[source] = 0;
  pq.enqueue(source, 0);

  while (!pq.isEmpty()) {
    const u = pq.dequeue().element;

    if (u === destination) {
      break; // Exit early if we reach the destination
    }

    graph[u].forEach((neighbor) => {
      const v = neighbor.node;
      const weight = neighbor.weight;
      const alt = dist[u] + weight;

      if (alt < dist[v]) {
        dist[v] = alt;
        parent[v] = u;
        pq.enqueue(v, alt);
      }
    });
  }

  // Reconstruct shortest path
  const shortestPath = [];
  let current = destination;

  while (current !== null) {
    shortestPath.unshift(current);
    current = parent[current];
  }

  return { shortestPath, shortestDistance: dist[destination] };
}

module.exports = dijkstra;

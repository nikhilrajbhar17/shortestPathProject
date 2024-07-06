// routes/api.js

const express = require("express");
const router = express.Router();
const dijkstra = require("../utils/dijkstra");

// Example graph representation (adjacency list)
const graph = {
  CityA: [
    { node: "CityB", weight: 6 },
    { node: "CityC", weight: 1 },
  ],
  CityB: [
    { node: "CityA", weight: 6 },
    { node: "CityC", weight: 2 },
    { node: "CityD", weight: 3 },
  ],
  CityC: [
    { node: "CityA", weight: 1 },
    { node: "CityB", weight: 2 },
    { node: "CityD", weight: 5 },
  ],
  CityD: [
    { node: "CityB", weight: 3 },
    { node: "CityC", weight: 5 },
  ],
};

// POST endpoint to find shortest path
router.post("/shortest-path", (req, res) => {
  const { source, destination } = req.body;

  // Validate input
  if (!source || !destination || !graph[source] || !graph[destination]) {
    return res
      .status(400)
      .json({ error: "Invalid source or destination city." });
  }

  // Compute shortest path using Dijkstra's algorithm
  const { shortestPath, shortestDistance } = dijkstra(
    graph,
    source,
    destination
  );

  // Respond with shortest path distance
  res.json({ shortestPath, shortestDistance });
});

module.exports = router;

// routes/api.js
const graph = require("./stationData");
const express = require("express");
const router = express.Router();
const dijkstra = require("../utils/dijkstra");

// Example graph representation (adjacency list)

// POST endpoint to find shortest path
router.post("/shortest-path", (req, res) => {
  const { source, destination } = req.body;
  // console.log(source);

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

// routes/api.js

const express = require("express");
const router = express.Router();
const dijkstra = require("../utils/dijkstra");

// Example graph representation (adjacency list)
const graph = {
  "Andhra Pradesh": [
    { node: "Telangana", weight: 190 },
    { node: "Tamil Nadu", weight: 580 },
    { node: "Karnataka", weight: 350 },
    { node: "Odisha", weight: 460 },
  ],
  "Arunachal Pradesh": [
    { node: "Assam", weight: 380 },
    { node: "Nagaland", weight: 440 },
    { node: "Myanmar", weight: 520 },
  ],
  Assam: [
    { node: "Arunachal Pradesh", weight: 380 },
    { node: "Nagaland", weight: 120 },
    { node: "Manipur", weight: 480 },
    { node: "Meghalaya", weight: 290 },
  ],
  Bihar: [
    { node: "Jharkhand", weight: 270 },
    { node: "Uttar Pradesh", weight: 410 },
    { node: "West Bengal", weight: 350 },
  ],
  Chhattisgarh: [
    { node: "Maharashtra", weight: 560 },
    { node: "Madhya Pradesh", weight: 340 },
    { node: "Odisha", weight: 560 },
    { node: "Telangana", weight: 490 },
    { node: "Jharkhand", weight: 280 },
    { node: "Uttar Pradesh", weight: 730 },
  ],
  Goa: [
    { node: "Karnataka", weight: 210 },
    { node: "Maharashtra", weight: 470 },
  ],
  Gujarat: [
    { node: "Rajasthan", weight: 470 },
    { node: "Maharashtra", weight: 500 },
    { node: "Madhya Pradesh", weight: 880 },
  ],
  Haryana: [
    { node: "Punjab", weight: 290 },
    { node: "Himachal Pradesh", weight: 370 },
    { node: "Uttarakhand", weight: 310 },
    { node: "Uttar Pradesh", weight: 460 },
    { node: "Rajasthan", weight: 470 },
    { node: "Delhi", weight: 30 },
  ],
  "Himachal Pradesh": [
    { node: "Jammu and Kashmir", weight: 280 },
    { node: "Punjab", weight: 240 },
    { node: "Uttarakhand", weight: 240 },
    { node: "Haryana", weight: 370 },
  ],
  Jharkhand: [
    { node: "Bihar", weight: 270 },
    { node: "Chhattisgarh", weight: 280 },
    { node: "Odisha", weight: 420 },
    { node: "West Bengal", weight: 320 },
  ],
  Karnataka: [
    { node: "Goa", weight: 210 },
    { node: "Maharashtra", weight: 740 },
    { node: "Kerala", weight: 560 },
    { node: "Tamil Nadu", weight: 430 },
    { node: "Telangana", weight: 570 },
    { node: "Andhra Pradesh", weight: 350 },
  ],
  Kerala: [
    { node: "Karnataka", weight: 560 },
    { node: "Tamil Nadu", weight: 310 },
  ],
  "Madhya Pradesh": [
    { node: "Uttar Pradesh", weight: 690 },
    { node: "Rajasthan", weight: 610 },
    { node: "Chhattisgarh", weight: 340 },
    { node: "Maharashtra", weight: 810 },
    { node: "Gujarat", weight: 880 },
  ],
  Maharashtra: [
    { node: "Gujarat", weight: 500 },
    { node: "Madhya Pradesh", weight: 810 },
    { node: "Chhattisgarh", weight: 560 },
    { node: "Telangana", weight: 600 },
    { node: "Karnataka", weight: 740 },
    { node: "Goa", weight: 470 },
  ],
  Manipur: [
    { node: "Nagaland", weight: 210 },
    { node: "Mizoram", weight: 460 },
    { node: "Assam", weight: 480 },
  ],
  Meghalaya: [{ node: "Assam", weight: 290 }],
  Mizoram: [
    { node: "Manipur", weight: 460 },
    { node: "Tripura", weight: 330 },
    { node: "Assam", weight: 350 },
  ],
  Nagaland: [
    { node: "Arunachal Pradesh", weight: 440 },
    { node: "Manipur", weight: 210 },
    { node: "Assam", weight: 120 },
  ],
  Odisha: [
    { node: "Jharkhand", weight: 420 },
    { node: "Chhattisgarh", weight: 560 },
    { node: "Telangana", weight: 870 },
    { node: "Andhra Pradesh", weight: 460 },
    { node: "West Bengal", weight: 440 },
  ],
  Punjab: [
    { node: "Haryana", weight: 290 },
    { node: "Himachal Pradesh", weight: 240 },
    { node: "Jammu and Kashmir", weight: 340 },
  ],
  Rajasthan: [
    { node: "Gujarat", weight: 470 },
    { node: "Madhya Pradesh", weight: 610 },
    { node: "Haryana", weight: 470 },
    { node: "Uttar Pradesh", weight: 600 },
    { node: "Punjab", weight: 600 },
  ],
  Sikkim: [{ node: "West Bengal", weight: 150 }],
  "Tamil Nadu": [
    { node: "Kerala", weight: 310 },
    { node: "Karnataka", weight: 430 },
    { node: "Andhra Pradesh", weight: 580 },
  ],
  Telangana: [
    { node: "Andhra Pradesh", weight: 190 },
    { node: "Chhattisgarh", weight: 490 },
    { node: "Maharashtra", weight: 600 },
    { node: "Karnataka", weight: 570 },
    { node: "Odisha", weight: 870 },
  ],
  Tripura: [
    { node: "Mizoram", weight: 330 },
    { node: "Assam", weight: 160 },
  ],
  "Uttar Pradesh": [
    { node: "Bihar", weight: 410 },
    { node: "Madhya Pradesh", weight: 690 },
    { node: "Chhattisgarh", weight: 730 },
    { node: "Rajasthan", weight: 600 },
    { node: "Haryana", weight: 460 },
    { node: "Uttarakhand", weight: 550 },
    { node: "Delhi", weight: 530 },
  ],
  Uttarakhand: [
    { node: "Uttar Pradesh", weight: 550 },
    { node: "Himachal Pradesh", weight: 240 },
    { node: "Haryana", weight: 310 },
  ],
  "West Bengal": [
    { node: "Sikkim", weight: 150 },
    { node: "Jharkhand", weight: 320 },
    { node: "Odisha", weight: 440 },
    { node: "Bihar", weight: 350 },
    { node: "Assam", weight: 710 },
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

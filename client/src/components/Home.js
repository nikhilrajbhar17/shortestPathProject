import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";
import Test from "./test";
const Home = () => {
  const [shortestPath, setShortestPath] = useState([]);
  const [shortestDistance, setShortestDistance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFormSubmit = (source, destination) => {
    setLoading(true);
    axios
      .post("http://localhost:5000/api/shortest-path", { source, destination })
      .then((response) => {
        setShortestPath(response.data.shortestPath); // Set shortest path received from backend
        setShortestDistance(response.data.shortestDistance); // Set shortest distance received from backend
        setLoading(false);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          setError(error.response.data.error);
        } else {
          setError("Something went wrong. Please try again later.");
        }
      });
  };

  return (
    <div className="container">
      <h1>Find Shortest Path Between Metro Stations</h1>
      <br></br>
      <Form  onSubmit={handleFormSubmit}  />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {shortestPath.length > 0 && !loading && !error && (
        <Test shortestPath={shortestPath} shortestDistance={shortestDistance} />
      )}
    </div>
  );
};

export default Home;

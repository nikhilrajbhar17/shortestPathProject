import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";
import Result from "./Result";
import "./style.css"; // Import your CSS stylesheet

const Home = () => {
  const [shortestDistance, setShortestDistance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to handle form submission
  const handleFormSubmit = (source, destination) => {
    setLoading(true);
    axios
      .post("http://localhost:5000/api/shortest-path", { source, destination })
      .then((response) => {
        setShortestDistance(response.data.shortestDistance);
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
      <h1>Find Shortest Path Between Cities</h1>
      <Form onSubmit={handleFormSubmit} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {shortestDistance !== null && !loading && !error && (
        <Result shortestDistance={shortestDistance} />
      )}
    </div>
  );
};

export default Home;

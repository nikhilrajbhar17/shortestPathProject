import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(source, destination);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="source">Source City:</label>
        <select
          id="source"
          className="form-control"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        >
          <option value="">Select Source City</option>
          <option value="CityA">City A</option>
          <option value="CityB">City B</option>
          <option value="CityC">City C</option>
          {/* Add more cities as needed */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="destination">Destination City:</label>
        <select
          id="destination"
          className="form-control"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        >
          <option value="">Select Destination City</option>
          <option value="CityA">City A</option>
          <option value="CityB">City B</option>
          <option value="CityC">City C</option>
          {/* Add more cities as needed */}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Find Shortest Path
      </button>
    </form>
  );
};

export default Form;

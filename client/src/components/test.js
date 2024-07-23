import React from "react";

const Test = ({ shortestPath, shortestDistance }) => {
  return (
    <div className="data">
      <h1>Path Visualization</h1>
      <div className="path-info">
        <p> Distance: {shortestDistance} Kms</p>
      </div>
      <div className="visual">
        {shortestPath.map((node, index) => (
          <div className="stat" key={index}>
            <p>{node}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;

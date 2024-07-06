import React from 'react';
// import './styles.css'; // Import CSS stylesheet

const PathVisualization = ({ shortestPath, shortestDistance }) => {
    return (
        <div className="container">
            <h1>Path Visualization</h1>
            <div className="path-info">
                <p>Shortest Distance: {shortestDistance}</p>
            </div>
            <div className="path-container">
                {shortestPath.map((node, index) => (
                    <React.Fragment key={index}>
                        <div className={`node ${index === shortestPath.length - 1 ? 'active' : ''}`}>
                            {node}
                        </div>
                        {index < shortestPath.length - 1 && (
                            <div className="arrow arrow-right"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default PathVisualization;

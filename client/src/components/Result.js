import React from 'react';

const Result = ({ shortestDistance }) => {
    return (
        <div className="result">
            <h3>Shortest Distance:</h3>
            <p>{shortestDistance} km</p>
        </div>
    );
};

export default Result;

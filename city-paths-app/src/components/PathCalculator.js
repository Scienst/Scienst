import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PathCalculator = ({ selectedCities, onShortestPathCalculated }) => {
  const [shortestPath, setShortestPath] = useState([]);

  useEffect(() => {
    if (selectedCities.length === 2) {
      // Make an API request to calculate the shortest path
      axios.post('/api/shortest-path', { cities: selectedCities })
        .then(response => {
          setShortestPath(response.data);
          onShortestPathCalculated(response.data);
        })
        .catch(error => {
          console.error('Error calculating the shortest path:', error);
        });
    }
  }, [selectedCities]);

  return (
    <div>
      <h2>Shortest Path:</h2>
      <ul>
        {shortestPath.map(city => (
          <li key={city.id}>
            {city.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PathCalculator;

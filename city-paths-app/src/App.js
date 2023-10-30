import React, { useState } from 'react';
import CitySelector from './components/CitySelector';
import MapDisplay from './components/MapDisplay';
import PathCalculator from './components/PathCalculator';

function App() {
  const [selectedCities, setSelectedCities] = useState([]);
  const [allPaths, setAllPaths] = useState([]);
  const [shortestPath, setShortestPath] = useState([]);

  return (
    <div>
      <h1>City Path Finder</h1>
      <CitySelector onCitySelected={city => setSelectedCities(city)} />
      <MapDisplay selectedCities={selectedCities} allPaths={allPaths} />
      <PathCalculator
        selectedCities={selectedCities}
        onShortestPathCalculated={path => setShortestPath(path)}
      />
    </div>
  );
}

export default App;

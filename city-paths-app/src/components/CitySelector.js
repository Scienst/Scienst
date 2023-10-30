import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CitySelector = ({ onCitySelected }) => {
  const [cities, setCities] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);

  useEffect(() => {
    // Fetch the list of cities from your API
    axios.get('/api/cities')
      .then(response => {
        setCities(response.data);
      })
      .catch(error => {
        console.error('Error fetching cities:', error);
      });
  }, []);

  const handleCitySelect = (city) => {
    if (selectedCities.length < 2) {
      setSelectedCities([...selectedCities, city]);
    }
  };

  return (
    <div>
      <h2>Select Cities:</h2>
      <ul>
        {cities.map(city => (
          <li key={city.id} onClick={() => handleCitySelect(city)}>
            {city.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitySelector;

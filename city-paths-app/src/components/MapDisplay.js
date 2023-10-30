import React, { useEffect } from 'react';
import L from 'leaflet';

const MapDisplay = ({ selectedCities, allPaths }) => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([0, 0], 3);

    // Add your map tile layer (e.g., from Mapbox)
    L.tileLayer('your_tile_layer_url', {
      maxZoom: 19,
    }).addTo(map);

    // Clear previous markers and paths
    map.eachLayer(layer => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        map.removeLayer(layer);
      }
    });

    // Display selected cities as markers
    selectedCities.forEach(city => {
      L.marker([city.lat, city.lng])
        .addTo(map)
        .bindPopup(city.name);
    });

    // Display all paths between cities
    allPaths.forEach(path => {
      const coordinates = path.map(city => [city.lat, city.lng]);
      L.polyline(coordinates, { color: 'blue' }).addTo(map);
    });

  }, [selectedCities, allPaths]);

  return (
    <div id="map" style={{ height: '500px', width: '100%' }}></div>
  );
};

export default MapDisplay;

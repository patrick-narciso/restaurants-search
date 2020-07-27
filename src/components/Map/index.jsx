import React, { useState } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

export const MapContainer = (props) => {
  const [nearbyRestaurants, setNearbyRestaurants] = useState([]);
  const { google, initialCenter } = props;

  const searchNearby = (map, center) => {
    const service = new google.maps.places.PlacesService(map);

    // Specify location, radius and place types for your Places API search.
    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        setNearbyRestaurants(results);
        console.log(results);
      }
    });
  };

  function onMapReady(_, map) {
    searchNearby(map, map.center);
  }

  return (
    <Map google={google} initialCenter={initialCenter} onReady={onMapReady} zoom={15}>
      {nearbyRestaurants.map((restaurant) => (
        <Marker
          key={restaurant.id}
          name={restaurant.name}
          position={{
            lat: restaurant.geometry.location.lat(),
            lng: restaurant.geometry.location.lng(),
          }}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);

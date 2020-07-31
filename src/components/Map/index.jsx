import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { setRestaurants } from '../../redux/modules/restaurants';

export const MapContainer = (props) => {
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const { restaurants } = useSelector((state) => state.restaurants);
  const { google, query } = props;

  const searchByQuery = useCallback(
    (map, query) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setRestaurants([]));

      const request = {
        location: map.center,
        radius: '200',
        type: ['restaurant'],
        query,
      };

      service.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurants(results));
        }
      });
    },
    [dispatch, google]
  );

  useEffect(() => {
    if (query) {
      searchByQuery(map, query);
    }
  }, [searchByQuery, query, map]);

  const searchNearby = (map, center) => {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  };

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
      zoom={15}
      {...props}>
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.place_id}
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

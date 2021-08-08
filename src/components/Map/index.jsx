import React, { useState, useEffect } from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';

export const MapContainer = (props) => {
    const [ map, setMap ] = useState(null);
    const { google, query } = props;

    useEffect(() => {
      
      if(query){
        searchByQuery(query);
      };

    }, [query]);

    const searchByQuery = (query) => {
      const service = new google.maps.places.PlacesService(map);
    
      const request = {
        location: map.center,
        radius: '200',
        type: ['restaurant'],
        query,
      };
    
      service.textSearch(request, (results, status) => {
        if(status === google.maps.places.PlacesServiceStatus.OK){
          console.log('restaurants>>>', results);
        };
      });
    };

    const searchNearby = (map, center) => {
      const service = new google.maps.places.PlacesService(map);
    
      const request = {
        location: center,
        radius: '20000',
        type: ['restaurant'],
      };
    
      service.nearbySearch(request, (results, status) => {
        if(status === google.maps.places.PlacesServiceStatus.OK){
          console.log('restaurants>>>', results);
        };
      });
    };
     
    const onMapReady = (_, map) => {
      setMap(map);
      searchNearby(map, map.center);
    }

    return <Map google={google} centerAroundCurrentLocation onReady={onMapReady} onRecenter={onMapReady} />;
};


export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
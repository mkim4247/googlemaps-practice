import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MapDirectionsRenderer from './MapDirectionsRenderer';

const Map = 
  withGoogleMap( props => (
    <GoogleMap
      defaultCenter={props.defaultCenter}
      defaultZoom={props.defaultZoom} >
      <MapDirectionsRenderer 
        places={props.places} 
        travelMode={window.google.maps.TravelMode.DRIVING} />
    </GoogleMap>
  ));

const MapWithDirections = props => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const {
    places,
    loadingElement,
    containerElement,
    mapElement,
    defaultCenter,
    defaultZoom
  } = props;
  
  return (
    <Map
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
      places={places}
      loadingElement={loadingElement || <div style={{height: `100%`}}/>}
      containerElement={containerElement || <div style={{height: "80vh"}}/>}
      mapElement={mapElement || <div style={{height: `100%`}}/>}
      defaultCenter={
        defaultCenter.lat ? 
        defaultCenter : {lat: 37.874784, lng: -122.408770}
      }
      defaultZoom={defaultZoom || 10}
    />
  );
};

export default MapWithDirections;
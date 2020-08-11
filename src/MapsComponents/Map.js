import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import MapDirectionsRenderer from './MapDirectionsRenderer';


let apiKey = process.env.REACT_APP_API_KEY


const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultCenter={props.defaultCenter}
      defaultZoom={props.defaultZoom}
    >
      {props.places.map((marker, index) => {
        const position = {lat: marker.lat, lng: marker.lng};
        return <Marker key={index} position={position}/>;
      })}
      <MapDirectionsRenderer places={props.places} travelMode={window.google.maps.TravelMode.DRIVING} />
    </GoogleMap>
  ))
);

const AppMap = props => {
  const {places} = props;

  const {
    loadingElement,
    containerElement,
    mapElement,
    defaultCenter,
    defaultZoom
  } = props;

  return (
    <Map
      googleMapURL={
        'https://maps.googleapis.com/maps/api/js?key=' +
        apiKey +
        '&v=3.exp&libraries=geometry,drawing,places'
      }
      places={places}
      loadingElement={loadingElement || <div style={{height: `100%`}}/>}
      containerElement={containerElement || <div style={{height: "80vh"}}/>}
      mapElement={mapElement || <div style={{height: `100%`}}/>}
      defaultCenter={defaultCenter || {lat: 25.798939, lng: -80.291409}}
      defaultZoom={defaultZoom || 11}
    />
  );
};

export default AppMap;
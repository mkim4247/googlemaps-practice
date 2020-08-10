import React from 'react';

import PlacesAutocomplete, {
  geocodeByAddress,
   getLatLng
} from "react-places-autocomplete";

let apiKey = process.env.REACT_APP_API_KEY

  
export default function App() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });
  
  const handleSelect = value => {
    geocodeByAddress(value)
    .then(res => getLatLng(res[0]))
    .then(latLng => {
      console.log(latLng, value)
      setAddress(value)
      setCoordinates(latLng)
    })
    .catch(error => console.log('error', error))
    }
  
  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>
  
            <input {...getInputProps({ placeholder: "Type address" })} />
  
            <div>
              {loading ? <div>...loading</div> : null}
  
              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };
  
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}
import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

let apiKey = process.env.REACT_APP_API_KEY

export default function InputComponent() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleChange = value => {
    setAddress(value)
  }
  
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
        onChange={handleChange}
        onSelect={handleSelect} >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Address: {address} </p>
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
                  <div key={`suggestion-${suggestion.id}`} {...getSuggestionItemProps(suggestion, { style })}>
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
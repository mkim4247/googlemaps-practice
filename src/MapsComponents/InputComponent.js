import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

const InputComponent = props => {
  const handleChange = value => {
    props.setLocation({ 
        address: value 
    });
  };
  
  const handleSelect = value => {
    geocodeByAddress(value)
    .then(res => getLatLng(res[0]))
    .then(latLng => {
      console.log(latLng, value)
      props.setLocation({
          address: value,
          lat: latLng.lat,
          lng: latLng.lng
        });
    })
    .catch(error => console.log('error', error))
  };
  
  return (
    <div>
      <PlacesAutocomplete
        value={props.location.address}
        onChange={handleChange}
        onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p> Address: {props.location.address} </p>
            <p> Latitude: {props.location.lat} </p>
            <p> Longitude: {props.location.lng} </p>
  
            <input { ...getInputProps({ placeholder: "Type address" })}/>
  
            <div>
              {loading ? <div> ...loading </div> : null}
  
              {suggestions.map( suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "yellow" : "white"
                };
  
                return (
                    <div key={`${suggestion.placeId}`} {...getSuggestionItemProps(suggestion, {style})}>
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

export default InputComponent
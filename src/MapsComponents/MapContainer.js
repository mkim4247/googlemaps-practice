import React from 'react';
import MapWithDirections from './MapWithDirections'

const MapContainer = props => {
    return(
        <div>
            <MapWithDirections 
            places={props.places} 
            defaultCenter={props.defaultCenter}/>
        </div>
    )
}

export default MapContainer
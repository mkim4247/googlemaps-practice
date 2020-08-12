import React from 'react';
import MapWithDirections from './MapWithDirections'

export default function MapContainer(props){
    return(
        <div>
            <MapWithDirections places={props.places}/>
        </div>
    )
}
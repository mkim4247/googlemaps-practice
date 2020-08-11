import React from 'react';
// import MapComponent from './MapComponent';
import AppMap from './Map'

export default function MapContainer(props){
    return(
        <div>
            <AppMap places={props.places}/>
        </div>
    )
}
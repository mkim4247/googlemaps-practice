import React from 'react';
import PickupContainer from './MapsComponents/PickupContainer';
import DropoffContainer from './MapsComponents/DropoffContainer';
import MapContainer from './MapsComponents/MapContainer';

export default function App() {
  const [pickup, setPickup] = React.useState({
    address: "",
    lat: null,
    lng: null
  });

  const [dropoff, setDropoff] = React.useState({
    address: "",
    lat: null,
    lng: null
  });

  return(
    <div>
      <PickupContainer location={pickup} setLocation={setPickup}/>
      <DropoffContainer location={dropoff} setLocation={setDropoff}/>
      <MapContainer places={[pickup, dropoff]}/>
    </div>
  )  
}
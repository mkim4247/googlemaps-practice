import React from 'react';
import InputComponent from './MapsComponents/InputComponent'

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
      <InputComponent location={pickup} setLocation={setPickup}/>
      <InputComponent location={dropoff} setLocation={setDropoff}/>
    </div>
  )  
}
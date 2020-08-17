import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router'
import FormContainer from './MapsComponents/FormContainer'
import MapContainer from './MapsComponents/MapContainer';
import Signup from './SignupComponents/Signup'
const App = () => {
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

  const [userCoord, setUserCoord] = React.useState({
    lat: null,
    lng: null
  })

  // if(navigator && navigator.geolocation){
  //   navigator.geolocation.getCurrentPosition((pos) => {
  //     const coords = pos.coords;
  //     console.log(pos)
  //     setUserCoord({
  //       lat: coords.latitude,
  //       lng: coords.longitude
  //     });
  //   })
  // }

    console.log('ref')


  return(
    <div>
      <Switch>
        <Route exact path='/order' render={ () => (
          <FormContainer pickup={pickup} dropoff={dropoff} setPickup={setPickup} setDropoff={setDropoff} />
        )}/>
        <Route exact path='/map' render={ () => (
          <MapContainer places={[pickup, dropoff]} defaultCenter={userCoord}/>
        )}/>
        <Route exact path='/new' render={ () => (
          <Signup />
        )}/>
      </Switch>
    </div>
  )
};

export default App;
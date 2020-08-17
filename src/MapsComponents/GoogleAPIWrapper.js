import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './MapContainer';

const apiKey = process.env.REACT_APP_API_KEY

export default GoogleApiWrapper(props => ({
    apiKey: (apiKey),
    places: props.places,
    defaultCenter: props.defaultCenter
    }
))(MapContainer)

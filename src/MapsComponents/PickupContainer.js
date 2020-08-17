import React from 'react'
import InputComponent from './InputComponent'

const PickupContainer = props => {
    return(
        <div>
            <h3> Pickup </h3>
            <InputComponent 
                location={props.location} 
                setLocation={props.setLocation}/>
        </div>
    )
}

export default PickupContainer;
import React from 'react'
import PickupContainer from './PickupContainer'
import DropoffContainer from './DropoffContainer'

const FormContainer = props => {
    return(
        <div>
            <PickupContainer location={props.pickup} setLocation={props.setPickup}/>
            <DropoffContainer location={props.dropoff} setLocation={props.setDropoff}/>
        </div>
    )
}

export default FormContainer

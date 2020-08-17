import React from 'react'
import InputComponent from './InputComponent'

const DropoffContainer = props => {
    return(
        <div>
            <h3> Dropoff </h3>
            <InputComponent 
                location={props.location} 
                setLocation={props.setLocation} />
        </div>
    )
}

export default DropoffContainer
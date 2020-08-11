import React from 'react'
import InputComponent from './InputComponent'

export default function DropoffContainer(props) {
    return(
        <div>
            <h3> Dropoff </h3>
            <InputComponent location={ props.location } setLocation={ props.setLocation }/>
        </div>
        
    )
}
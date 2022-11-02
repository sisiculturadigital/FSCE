import React from 'react'
import { Marker } from 'react-leaflet'
import IconLocation from './IconLocation'


const Markers = () => {

    return(
        <div>
            <Marker position={{lat:'-12.490139', lng:'-76.790697'}} icon={IconLocation} />
            <Marker position={{lat:'-12.366711', lng:'-76.716629'}} icon={IconLocation} />
            <Marker position={{lat:'-12.513217',lng:'-76.733779'}} icon={IconLocation} />
        </div>
    )          
}

export default Markers
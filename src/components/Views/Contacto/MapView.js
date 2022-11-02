import React from "react";
import { MapContainer , TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Markers from "./Markers";


const MapView = () => {


  return (

    <MapContainer center={{lat: -12.4621795, lng: -76.78759}}  zoom={11} className='mapContainer'>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Markers/>

    </MapContainer>
  )
}

export default MapView
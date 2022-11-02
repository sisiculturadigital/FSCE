import L  from 'leaflet'
import IconMap from './iconMap.svg'


const IconLocation = L.icon({
  iconUrl: IconMap,
  iconRetinaUrl: IconMap,
  iconSize: [35, 35],
  shadowSize: null,
  iconAnchor: null,
  shadowUrl: null,
  shadowAnchor: null,
  className: "leaflet-venue-icon",
  
})

export default IconLocation
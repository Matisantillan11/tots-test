import './map.style.css'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

import { LayersControl, MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'

export default function Map() {
	return (
		<div className='map_container'>
			<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className='w-full'>
				<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
				<Marker position={[51.505, -0.09]} />
			</MapContainer>
		</div>
	)
}

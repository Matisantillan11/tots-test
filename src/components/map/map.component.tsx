import './map.style.css'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

import { MapContainer, TileLayer } from 'react-leaflet'

import { Country } from '@/interfaces/country.interface'
import { LatLngExpression } from 'leaflet'
import { MarkerComponent } from './marker/marker.component'
import { useMemo } from 'react'

const MAP_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
export default function Map({ countries }: { countries: Country[] | undefined }) {
	const latLong: LatLngExpression = useMemo(() => {
		if (!!countries) {
			const countriesLengthKey = countries.length - 1
			return [countries[countriesLengthKey].lat, countries[countriesLengthKey].long]
		}

		return [0, 0]
	}, [countries])

	return (
		<div className='map_container'>
			<MapContainer center={latLong} zoom={5} className='w-full'>
				<TileLayer url={MAP_URL} />

				{countries?.map((country) => {
					return <MarkerComponent key={country.code} country={country} />
				})}
			</MapContainer>
		</div>
	)
}

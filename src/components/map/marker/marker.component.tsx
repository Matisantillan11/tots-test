import { Marker, Tooltip, useMap } from 'react-leaflet'

import { Country } from '@/interfaces/country.interface'
import { FC } from 'react'
import { LatLngExpression } from 'leaflet'

interface MarkerComponentProps {
	country: Country
}
export const MarkerComponent: FC<MarkerComponentProps> = ({ country }) => {
	const map = useMap()

	const handleFlyToMap = () => {
		if (!!country) {
			const newLatLong = [country?.lat, country?.long] as LatLngExpression
			map.flyTo(newLatLong, 8, {
				duration: 2,
			})
		}
	}

	return (
		<Marker
			position={[country.lat, country.long]}
			eventHandlers={{
				click: handleFlyToMap,
			}}>
			<Tooltip>
				<div className='w-full h-full'>
					<div className='flex flex-col items-start justify-start'>
						<p className='text-xl text-bold'>
							{country.emoji} {country.name}
						</p>
						<p>{country.capital}</p>
					</div>

					<p>
						Currency: <strong>{country.currency}</strong>
					</p>
				</div>
			</Tooltip>
		</Marker>
	)
}

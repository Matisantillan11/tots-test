'use client'

import { useEffect, useState } from 'react'

import { Country } from '@/interfaces/country.interface'
import Loader from '@/components/loader/loader.component'
import countries from '@/mock/countries.json'
import dynamic from 'next/dynamic'
import { getCountryInformation } from '@/services/country.service'

async function getCountriesData() {
	const codes = countries.map((country) => country['ISO Code'])

	const promises = codes.map((code) => {
		return getCountryInformation(code).then((data) => data)
	})

	const countriesData = await Promise.all(promises)
	return countriesData.map((country) => {
		const countryPrevInfo = countries.find((c) => c['ISO Code'] === country.code)
		return {
			...country,
			lat: countryPrevInfo?.Latitude,
			long: countryPrevInfo?.Longitude,
		}
	})
}
export default function Home() {
	const Map = dynamic(() => import('@/components/map/map.component'), {
		loading: () => <Loader />,
		ssr: false,
	})

	const [countriesListData, setCountriesList] = useState<Country[]>()

	useEffect(() => {
		getCountriesData().then((data) => setCountriesList(data))
	}, [])

	return (
		<main className='flex flex-col items-center justify-center w-full h-screen'>
			{!!countriesListData ? <Map countries={countriesListData} /> : <Loader />}
		</main>
	)
}

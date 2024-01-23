'use client'

import Searcher from '@/components/searcher/searcher.component'
import dynamic from 'next/dynamic'

export default function Home() {
	const Map = dynamic(() => import('@/components/map/map.component'), {
		loading: () => <p>A map is loading</p>,
		ssr: false,
	})

	return (
		<main className='flex flex-col items-center justify-between'>
			<Map />
			<Searcher />
		</main>
	)
}

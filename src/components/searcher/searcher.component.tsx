export default function Searcher() {
	return (
		<div className='absolute my-10 w-full h-14 z-[999] flex justify-center items-center'>
			<div className='w-1/2 h-full py-2 bg-white flex justify-start items-center'>
				<input className='bg-white w-full h-full rounded-lg px-2 text-black/50' placeholder='Search your country' />
				<div className='w-14 h-full flex justify-center items-center'>
					<svg
						width='30'
						height='30'
						focusable='false'
						fill='#cbcdd0'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'>
						<path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path>
					</svg>
				</div>
			</div>
		</div>
	)
}

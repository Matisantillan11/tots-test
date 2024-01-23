import './globals.css'
import '@fontsource/geist-mono'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='stylesheet' href='https://unpkg.com/leaflet@1.0.1/dist/leaflet.css' />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	)
}

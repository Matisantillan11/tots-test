import { getCountryInformation } from './country.service'

describe('fetchCountryData Function', () => {
	it('should return an object with the data of the country code specified', async () => {
		const countryData = await getCountryInformation('AR')
		expect(countryData).toEqual({
			name: 'Argentina',
			code: 'AR',
			capital: 'Buenos Aires',
			currency: 'ARS',
			emoji: '🇦🇷',
			native: 'Argentina',
		})
	})

	it("shouldn't return an object with the data of the country code specified", async () => {
		const countryData = await getCountryInformation('US')
		expect(countryData).not.toEqual({
			name: 'Argentina',
			code: 'AR',
			capital: 'Buenos Aires',
			currency: 'ARS',
			emoji: '🇦🇷',
			native: 'Argentina',
		})
	})

	it('should return null when the country code is not found', async () => {
		const countryData = await getCountryInformation('XX')
		expect(countryData).toBeNull()
	})
})

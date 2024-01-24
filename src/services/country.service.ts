import { API_URL } from '@/constants/api-url'
import { baseAPI } from '@/lib/api'

export const getCountryInformation = async (countryCode: string) => {
	const query = `
  query {
    country(code:"${countryCode}"){
      code,
      name,
      capital,
      currency,
      emoji,
      native
    }
  }
`
	try {
		const response = await baseAPI(API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query }),
		})
		const parsedData = await response.json()
		return parsedData.data?.country
	} catch (error) {
		throw new Error(String(error))
	}
}

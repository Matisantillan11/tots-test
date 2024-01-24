export const baseAPI = (input: URL | RequestInfo, init?: RequestInit | undefined): Promise<Response> => {
	return fetch(input, init)
}

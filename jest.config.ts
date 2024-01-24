import type { Config } from 'jest'

const config: Config = {
	clearMocks: true,
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
}

export default config

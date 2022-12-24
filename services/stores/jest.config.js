const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    'default'
  ],
  moduleNameMapper: {
    '@application/(.*)': '<rootDir>/src/application/$1',
    '@domain/(.*)': '<rootDir>/src/domain/$1',
    '@infrastructure/(.*)': '<rootDir>/src/infrastructure/$1'
  },
  transform: {}
}

export default config

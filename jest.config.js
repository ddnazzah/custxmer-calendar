// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    clearMocks: true,
    coverageDirectory: 'coverage',
    collectCoverage: true,
    coverageReporters: ['json', 'text', 'html', 'lcov', 'clover'],
    testEnvironment: 'node',
    setupFiles: ['<rootDir>/src/@testing/__mocks__/jest.mock.js'],
    transformIgnorePatterns: [
        // 'node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)',
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/src/@testing/__mocks__/assetsTransformer.js',
        '\\.(css|less)$':
            '<rootDir>/src/@testing/__mocks__/assetsTransformer.js',
        '^styled-components$': '<rootDir>/node_modules/styled-components',
        '\\.svg': '<rootDir>/src/@testing/__mocks__/svgMock.js',
    },

    //   setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};

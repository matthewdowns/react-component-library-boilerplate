module.exports = {
    roots: [
        '<rootDir>/src'
    ],
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.ts'
    ],
    testEnvironment: "jsdom",
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)'
    ],
    transform: {
        '.+\\.(less)$': 'jest-transform-stub',
        '^.+\\.(ts|tsx)$': 'ts-jest'
    }
};

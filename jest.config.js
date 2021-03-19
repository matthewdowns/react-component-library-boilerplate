module.exports = {
    preset: 'ts-jest',
    roots: [
        '<rootDir>/src'
    ],
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.ts'
    ],
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)'
    ],
    transform: {
        '.+\\.(less)$': 'jest-transform-stub',
        '^.+\\.(ts|tsx)$': 'ts-jest'
    }
};

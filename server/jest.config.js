module.exports = {
    collectCoverageFrom: [
        '**/*.js',
        '!**/node_modules/**',
    ],
    setupFiles: [
        "dotenv/config",
        "<rootDir>/setupTests.js"
    ],
    testPathIgnorePatterns: ['/node_modules/'],
    coveragePathIgnorePatterns: ['/node_modules/', '/coverage/', '\.config\.js$', 'dev-remote-api/*', 'server.js'],
    transform: { '^.+\\.js$': '<rootDir>/node_modules/babel-jest' },
    transformIgnorePatterns: ['/node_modules/']
};

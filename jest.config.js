/**
 * @link https://kulshekhar.github.io/ts-jest/docs/getting-started/presets
 * @type {import('ts-jest').JestConfigWithTsJest}
 */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    "default",
    ["jest-junit", { outputName: '/dist/junit.xml' }]
  ]
};

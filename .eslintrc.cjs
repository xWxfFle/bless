const { configure, presets } = require('eslint-kit')

module.exports = configure({
  allowDebug: process.env.NODE_ENV !== 'production',

  presets: [
    presets.imports(),
    presets.node(),
    presets.prettier(),
    presets.typescript(),
    presets.react(),
  ],
  extend: {
    env: {
      node: true,
      browser: true,
    },
    ignorePatterns: ['src/shared/api/gql'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
})

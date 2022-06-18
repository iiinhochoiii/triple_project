const createConfig = require('@titicaca/eslint-config-triple/create-config')

const allowedNames = ['__DISASTER__CALLBACK', '_triple_no_navbar']

module.exports = createConfig({
  type: 'frontend',
  project: './tsconfig.json',
  allowedNames,
})

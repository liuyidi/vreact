module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'standard',
    'standard-jsx',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': [
      {
        'space-before-function-paren': 0
      }
    ],
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : 2,
    'no-useless-escape': 0,
    'no-empty': 0
  }
}
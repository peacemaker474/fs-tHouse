const { off } = require('process')

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 0,
    'react/react-in-jsx-scope': 'off', // import React 생략
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }], // ts, tsx 파일에서도 jsx를 쓰기 위해
    'react/jsx-props-no-spreading': ['warn'], // props로 받은 것 바로 props로 넘기기 허용
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}

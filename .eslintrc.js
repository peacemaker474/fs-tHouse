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
    'prettier/prettier': 'off',
    'react/react-in-jsx-scope': 'off', // import React 생략
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }], // ts, tsx 파일에서도 jsx를 쓰기 위해
    'react/jsx-props-no-spreading': ['warn'], // props로 받은 것 바로 props로 넘기기 허용
    'no-use-before-define': 'off', // 변수가 선언되기 전에 사용하지 못하도록, styled-components를 하위에서 관리하기 위해
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'never',
        'd.ts': 'never',
      },
    ],
    'linebreak-style': 'off', // 줄바꿈과 관련된 설정
    'object-curly-newline': 'off', // import를 3개 이상할 경우, 줄바꿈을 해야 하는데 그것을 무시하는 규칙
    'react/button-has-type': 'off', // button type 강제 off
    'jsx-a11y/label-has-associated-control': 'off', // label과 id를 강제 off
    'react/require-default-props': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};

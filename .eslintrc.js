module.exports = {
  extends: [
    'mantine',
    'plugin:@next/next/recommended',
    'plugin:jest/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['testing-library', 'jest'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-useless-computed-key': 'off',
    'import/extensions': 'off',
    'arrow-body-style': 'off',
  },
};

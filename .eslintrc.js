module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier'
    ],
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 13,
    },
    env: {
        node: true,
        es6: true,
    },
    rules: {
        'react/jsx-filename-extension': 0,
        'import/extensions': ['off'],
        'import/no-extraneous-dependencies': ['off'],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'prettier/prettier': [
            'warn',
            {
                singleQuote: true,
            },
        ],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-shadow': 'off',
    },
};

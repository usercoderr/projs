module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'usercoder-plugin',
        'unused-imports',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'no-param-reassign': 'off',
        'react/no-unstable-nested-components': 'off',
        'unused-imports/no-unused-imports': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'no-trailing-spaces': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'react/no-array-index-key': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'as',
                    'role',
                    'data-testid',
                    'to',
                    'target',
                    'justify',
                    'direction',
                    'align',
                    'border',
                    'gap',
                ],
            },
        ],
        'max-len': ['error', { ignoreComments: true, code: 240 }],
        'jsx-a11y/click-events-have-key-events': 'off',
        'usercoder-plugin/path-checker': ['error', { alias: '@' }],
        'usercoder-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportsPatterns: ['**/StoreProvider', '**/ThemeDecorator.tsx'],
            },
        ],
        'usercoder-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilePatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};

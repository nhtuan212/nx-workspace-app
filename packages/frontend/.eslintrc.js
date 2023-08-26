module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@next/next/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        // off|| 0 - warn || 1 - error || 2
        indent: ['off', 4],
        // 'linebreak-style': [
        //     'error',
        //     'unix'
        // ],
        quotes: ['warn', 'single'],
        semi: ['warn', 'always'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-types': [
            'error',
            {
                extendDefaults: true,
                types: {
                    '{}': false,
                },
            },
        ],
        '@typescript-eslint/no-unused-vars': 'error',
        'react/no-unknown-property': [
            2,
            {
                ignore: ['jsx', 'global'],
            },
        ],
    },
    ignorePatterns: ['**/*.css', '**/*.scss'],
};

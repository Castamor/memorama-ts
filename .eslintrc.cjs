module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    overrides: [],
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react"
    ],
    rules: {
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-useless-return': 'off',
        camelcase: 'off',
        indent: ['error', 4]
    }
}
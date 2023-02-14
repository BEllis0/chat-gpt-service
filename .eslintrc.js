module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
        sourceType: "module" 
    },
    parserOptions: {
        project: './tsconfig.json'
    },
    settings: {
        "import/resolver": {
        "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
        }
    },
    extends: [
        "airbnb-base",
        "airbnb-typescript/base"
        // "plugin:@typescript-eslint/recommended", // recommended rules from the @typescript-eslint/eslint-plugin
        // "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    env: {
        node: true, // Enable Node.js global variables
        es6: true,
        jest: true,
    },
    rules: {
        'object-curly-newline': 'warn',
        'no-plusplus': 'off',
        'max-len': ['error', { code: 125 }],
        "arrow-body-style": ["warn", "as-needed"],
        'no-console': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-unused-vars': 'warn',
        'dot-notation': 'warn',
        '@typescript-eslint/dot-notation': 'off'
    },
    plugins: ["@typescript-eslint"]
};
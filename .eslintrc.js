module.exports = {
env: {
    browser: true,
    commonjs: true,
    es2021: true,
    "jest": true
},
extends: [
    'standard'
],
parserOptions: {
    ecmaFeatures: {
    jsx: true
    },
    ecmaVersion: 12
},
plugins: [
    'jest'
],
rules: {
}
}

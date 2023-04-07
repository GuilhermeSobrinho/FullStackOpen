module.exports = {
    'env': {
        'node': true,
        'commonjs': true,
    },
    'extends': 'eslint:recommended',
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        "no-unused-vars": false
    
    }
}

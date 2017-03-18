module.exports = {
    "extends": ['eslint-config-airbnb'],
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "parser": 'babel-eslint',
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'indent': [2,4, {'SwitchCase': 1}],
        'class-methods-use-this': 0,
        'func-names': 0,
        'react/sort-comp': 0,
        'react/prop-types': 0,
        'react/jsx-first-prop-new-line': 0,
        'no-param-reassign': 0,
        'no-return-assign': 0,
        'max-len': 0,
        'react/no-multi-comp': 0,
        'array-callback-return': 0,
        'import/no-unresolved': 0,
        'jsx-a11y/img-has-alt': 0,
        'import/extensions': 0,
        'import/no-extraneous-dependencies': 0,
        'react/no-string-refs': 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx", ".md"] }],
        'react/no-array-index-key': 0,
        'react/no-find-dom-node': 0,
        'react/require-extension': 0,
        'jsx-a11y/anchor-has-content': 0,
        'jsx-a11y/href-no-hash': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        "react/jsx-indent": [1, 4]
    }
};
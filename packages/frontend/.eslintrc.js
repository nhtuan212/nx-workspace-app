module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'indent': 'off',
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-types': [
			'error',
			{
				'extendDefaults': true,
				'types': {
					'{}': false
				}
			}
		],
		'react/no-unknown-property': [
			2,
			{
				'ignore': [
					'jsx',
					'global',
				]
			}
		]
	}
};

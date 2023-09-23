module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'@typescript-eslint/eslint-plugin',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}', '*.jsx', '*.tsx'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'prettier/prettier': 'warn',
		quotes: ['error', 'single'],
		semi: ['off', 'never'],
		indent: ['error', 'tab'],
		'no-tabs': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
	},
}

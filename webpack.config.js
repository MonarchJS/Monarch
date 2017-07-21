const webpack = require('webpack')
const path = require('path')

module.exports = {
	entry: {
		index: path.resolve(__dirname, './source/index.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: 'babel-loader'
			}
		]
	}
}

const webpack = require('webpack')
const path = require('path')

module.exports = s = {
	entry: {
		index: path.resolve(__dirname, './source/index.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'server.min.js',
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

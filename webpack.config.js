const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cwd = process.cwd();

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(cwd, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader'
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css')
	],
	devServer: {
		contentBase: path.resolve(cwd, 'public')
	}
};

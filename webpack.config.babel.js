'use strict';

import path from 'path';
import WebpackShellPlugin from 'webpack-shell-plugin-next';

export default {
	entry:  './client/js/App.js',
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name]-bundle.js'
	},
    mode: 'development',
	watch: true,
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: '/node_modules/',
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: '/node_modules/',
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new WebpackShellPlugin({
			onBuildStart: {
				scripts: ['echo "Starting"'],
				blocking: true,
				parallel: false
			},
			onBuildEnd: {
				scripts: ['node -r @babel/register ./server/server.js'],
				blocking: false,
				parallel: true
			}
		})
	],
	resolve: {
		extensions: ['.js', '.scss']
	}
}

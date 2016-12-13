var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
		    'webpack/hot/only-dev-server',
		    './src'
    ],
    output: {
        path: "dist",
        filename: "bundle.js"
    },
    // adding loaders, they do almost all the magic, copy files bundles etc..
    module:{
      loaders: [
        // loader for the js files
        {
				    test: /\.js?$/,
				    loaders: ['react-hot','babel'],
				    exclude: /node_module/,
			   },

      ]
    },
    plugins: [
  	   new webpack.HotModuleReplacementPlugin()
	  ],
    // simulates a development server serving the files in /dist
    devServer: {
      port: 8080 ,
      contentBase: './dist',
      inline: true
    }
}

const path = require('path')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './docs/entry.js',

  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ],
      },
    ],
  },
  
  plugins: [
    ...!isDev ? [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin()
    ] : [],
  ],

  devServer: {
    contentBase: 'docs/'
  },
}

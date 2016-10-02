var path = require('path')

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
          'babel'
        ]
      }
    ]
  },

  devServer: {
    contentBase: 'docs/'
  }
}

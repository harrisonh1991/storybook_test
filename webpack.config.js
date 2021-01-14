const { resolve } = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015", "env", "stage-2', 'react']
          },
          plugins:[
            'transform-es2015-arrow-functions'
          ]
        }
      }
    ]
  }
};
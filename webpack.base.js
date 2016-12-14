const path = require('path');

const srcPath = path.join(process.cwd(), '/src');

module.exports = {
  resolve: {
    fallback: srcPath
  },
  module: {
    loaders: [{
      loader: 'babel',
      test: /\.js$/,
      include: srcPath,
      exclude: /(node_modules)/,
      query: {
        presets: [
          'react',
          'es2015',
          'stage-1'
        ]
      }
    }]
  }
};

let local;
try {
  local = require('./local');
} catch (e) {
  local = {};
}

const settings = {
  sass: {
    files: [
      './src/**/*.scss'
    ],
    includePaths: [
      './src',
      './node_modules/foundation-sites/scss'
    ],
    output: './dist/css',
  }
};

Object.assign(settings, local);

module.exports = settings;

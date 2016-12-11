let local;
try {
  local = require('./local');
} catch (e) {
  local = {};
}

const settings = {
  sass: {
    files: [
      './src/scss/**/*.scss'
    ],
    includePaths: [
      './src/scss'
    ],
    output: './dist/css',
  }
};

Object.assign(settings, local);

module.exports = settings;

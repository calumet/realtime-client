require('./tasks/sass');
require('./tasks/watch');

const gulp = require('gulp');

gulp.task('default', ['sass', 'watch']);

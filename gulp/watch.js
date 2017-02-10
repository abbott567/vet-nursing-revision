/*
  watch.js
  ===========
  watches sass
*/

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('watch', done => {
  runSequence('watch-sass', done);
});

gulp.task('watch-sass', () => {
  return gulp.watch('./src/**/**/*.scss', ['sass']);
});

'use strict';

var config        = require('../../config');
var gulp          = require('gulp');

// Views task
gulp.task('script', function() {

  // Put our index.html in the dist folder
  return gulp.src(config.dist.script)
    .pipe(gulp.dest('build/public/js'));
});


gulp.task('json', function() {
  // Put our index.html in the dist folder
  return gulp.src(config.dist.json)
    .pipe(gulp.dest('build/public/json'));
});
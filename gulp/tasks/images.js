
'use strict';

var config      = require('../../config');
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');

gulp.task('images', function() {

  return gulp.src(config.images.src)
    .pipe(changed(config.images.dest)) // Ignore unchanged files
    // .pipe(gulpif(global.isProd, imagemin())) // Optimize
    .pipe(gulp.dest(config.images.dest));

});

gulp.task('color-box-images', function() {
  return gulp.src(config.colorboximages.src)
    .pipe(changed(config.colorboximages.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.colorboximages.dest));
});
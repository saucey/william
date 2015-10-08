'use strict';
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    reload = browserSync.reload;

gulp.task('styles', function() {
  return sass('app/public/sass/main.scss',{ style: 'expanded' })
    .pipe(gulp.dest('app/public/css'))
    // .pipe(rename({suffix: '.min'}))
});

gulp.task('concat-styles', function () {
  return gulp.src(['app/public/css/main.css','bower_components/jquery-colorbox/example3/colorbox.css'])
    .pipe(minifycss())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('build/public/css'))
});
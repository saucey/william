'use strict';
var gulp = require('gulp'),
runSequence = require('run-sequence');


gulp.task('dev', [], function(cb) {
	runSequence(['styles','concat-styles', 'script', 'json', 'images','color-box-images', 'fonts', 'views'], 'watch', cb);
});


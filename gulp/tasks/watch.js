// 'use strict';
// var gulp = require('gulp'),
// 	browserSync = require('browser-sync');

// gulp.task('watch', function() {
// 	gulp.watch('app/public/sass/*.scss', ['styles']);
// 	gulp.watch('app/public/js/**/*.js', ['browserify']);
// 	gulp.watch('app/views/**/*.html').on('change', browserSync.reload);

//   // gulp.watch('app/**/*.html', ['html-task']);

// });


'use strict';

var config      = require('../../config');
var gulp        = require('gulp');


gulp.task('watch', function() {

	// Scripts are automatically watched and rebundled by Watchify inside Browserify task
	gulp.watch('app/public/sass/*.scss', ['styles', 'concat-styles']);
	gulp.watch('app/public/js/**/*.js', ['script']);
	gulp.watch('app/**/*.html', ['views']);

});

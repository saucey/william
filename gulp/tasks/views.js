'use strict';

var config        = require('../../config');
var gulp          = require('gulp');

// Views task
gulp.task('views', function() {

  // Put our index.html in the dist folder
  return gulp.src(['app/index.html', 'app/json.html'])
    .pipe(gulp.dest(config.dist.root));
});

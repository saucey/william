'use strict';

module.exports = {

	'dist': {
	  'root'  : 'build',
	  'script'  : ['app/public/js/json.js','app/public/js/scripts.js','bower_components/jquery-colorbox/jquery.colorbox.js'],
	  'json'  : ['app/public/json/menu.json']
	},

	'views': {
	  'watch': [
	    'app/index.html',
	    'app/views/**/*.html'
	  ],
	  'src': 'app/views/**/*.html',
	  'dest': 'app/public/js'
	},

	'fonts': {
	  'src' : ['bower_components/font-awesome/fonts/**/*'],
	  'dest': 'build/public/fonts'
	},

	'images': {
	  'src' : ['app/public/images/**/*'],
	  'dest': 'build/public/images'
	},

	'colorboximages': {
	  'src' : ['bower_components/jquery-colorbox/example3/images/*'],
	  'dest': 'build/public/css/images'
	},
};

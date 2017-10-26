var gulp = require('gulp');
var del = require('del');

var DIST_PATH = 'public/dist';


gulp.task('clean', function () {
    return del.sync([
		DIST_PATH
	]);
});
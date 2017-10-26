var gulp = require('gulp');

// Image compression
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');

var IMAGES_PATH = 'public/images/**/*.{png,jpeg,jpg,svg,gif}';
var DIST_PATH = 'public/dist';

// Images
gulp.task('images', function () {
    return gulp.src(IMAGES_PATH)
        .pipe(imagemin(
			[
				imagemin.gifsicle(),
				imagemin.jpegtran(),
				imagemin.optipng(),
				imagemin.svgo(),
				imageminPngquant(),
				imageminJpegRecompress()
			]
        ))
        .pipe(gulp.dest(DIST_PATH + '/images'));
});

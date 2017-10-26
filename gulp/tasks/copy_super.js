var gulp = require('gulp');

var DIST_PATH = 'public/dist';


gulp.task('fonts', function () {
    console.log('Starting fonts task');
    return gulp.src('public/css/fonts/**/*')
        .pipe(gulp.dest(DIST_PATH + '/fonts'));
});

gulp.task('copyHtml', function () {
    console.log('Starting copyHtml task');
    return gulp.src('./public/index.html')
        .pipe(gulp.dest(DIST_PATH));
});

gulp.task('copy_super', ['copyHtml', 'fonts'], function () {
    console.log('Starting copy_super task');
    var pathsToCopy = [

//    './app/**/*',
//    '!./app/index.html',

  ]

    return gulp.src(pathsToCopy)
        .pipe(gulp.dest(DIST_PATH));
});

var gulp = require('gulp');
var zip = require('gulp-zip');


gulp.task('export', function () {
    return gulp.src('public/**/*')
        .pipe(zip('website.zip'))
        .pipe(gulp.dest('./zip/'));
});
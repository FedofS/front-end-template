var gulp = require('gulp');
var modernizr = require('gulp-modernizr');

gulp.task('modernizr', function () {
     console.log('Starting modernizr task');
    return gulp.src(['./public/css/**/*.css', './public/scripts/**/*.js'])
        .pipe(modernizr({
            "options": [
        "setClasses"
      ]
        }))
        .pipe(gulp.dest('./public/dist/scripts/'));
});

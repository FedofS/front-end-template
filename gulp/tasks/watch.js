var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();


var HTML_PATH = './public/index.html';


gulp.task('watch', ['default'], function () {

    console.log('Starting watch task');
    browserSync.init({
        notify: false,
        server: {
            baseDir: "public/dist"
        }
    });

    watch(HTML_PATH, function () {
         gulp.start('HTMLRefresh');
    });

    watch('./public/css/**/*.css', function () {
        gulp.start('cssInject');
    });


    watch('./public/scripts/**/*.js', function () {
        gulp.start('scriptsRefresh');
    });

});

gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./public/dist/styles/styles.css')
        .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function () {
    browserSync.reload();
});

gulp.task('HTMLRefresh', ['copyHtml'], function () {
    browserSync.reload();
});






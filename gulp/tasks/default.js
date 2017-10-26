var gulp = require('gulp');

gulp.task('default', ['clean', 'styles', 'scripts', 'images', 'copy_super'], function () {
    console.log('Starting default task');
});

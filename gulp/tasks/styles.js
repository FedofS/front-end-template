// Styles
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
    hexrgba = require('postcss-hexrgba');


var DIST_PATH = 'public/dist';
var CSS_PATH = 'public/css/styles.css';


gulp.task('styles',['fonts'], function () {
    console.log('starting styles task');
    return gulp.src([CSS_PATH])
        .pipe(plumber(function (err) {
            console.log('Styles Task Error');
            console.log(err.toString());
            this.emit('end');
        }))
        .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba]))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(concat('styles.css'))
//        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH + '/styles'));
        
});

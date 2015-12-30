//
// Dependencies
//
var gulp = require('gulp');
var sass = require('gulp-sass');
var nano = require('gulp-cssnano');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

//
// Default task
//
gulp.task('default', function() {
    gulp.watch('./assets/scss/**/*', ['scss']);
});

//
// SCSS
//
gulp.task('scss', function() {
    return gulp.src('./assets/scss/main.scss')
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>"),
        }))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(nano())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./assets/bin'));
});

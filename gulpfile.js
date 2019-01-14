'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const shell = require('gulp-shell')

// Task to build the pages
gulp.task('generate', shell.task('eleventy'))

// Task to compile SCSS files to CSS.
gulp.task('styles', () => {
    return gulp.src('styles/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', () => {
    gulp.watch('styles/**/*', gulp.parallel('styles'))
    gulp.watch('src', gulp.parallel('generate'))
})

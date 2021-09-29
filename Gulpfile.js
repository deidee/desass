'use strict';

var gulp = require('gulp');
var pipeline = require('readable-stream').pipeline;
let sass = require('gulp-sass')(require('node-sass'));

sass.compiler = require('sass');

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});
/**
 * Documentation
 * @file document
 */

/*globals require, console, global*/

var esdoc = require('gulp-esdoc'),
    gulp = require('gulp'),
    sassdoc = require('sassdoc');

gulp.task('document.css', function () {
    'use strict';
    return gulp.src(global.paths.src + global.paths.scss)
        .pipe(sassdoc({dest: 'docs/css'}));
});

gulp.task('document.js', function () {
    'use strict';
    return gulp.src(global.paths.src)
        .pipe(esdoc({destination: 'docs/js'}));
});
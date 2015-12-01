/**
 * Compile assets
 * @file compile
 */

/*globals require, console, global*/

var autoprefixer = require('gulp-autoprefixer'),
    combineMediaQueries = require('gulp-combine-media-queries'),
    connect = require('gulp-connect'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');

gulp.task('compile.css', function () {
    'use strict';
    gulp.src(global.paths.src + global.paths.rootSCSS)
        .pipe(sass({errLogToConsole: true}))
        .pipe(combineMediaQueries({log: true}))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(rename('all.css'))
        .pipe(gulp.dest(global.paths.src + '/modules'))
        .on('error', function (error) {
            console.error('css error: ' + error);
        });
    gulp.src(global.paths.src + global.paths.css)
        .pipe(connect.reload());
});

gulp.task('compile.html', function () {
    'use strict';
    gulp.src(global.paths.src + global.paths.html)
        .pipe(connect.reload());
});

gulp.task('compile.img', function () {
    'use strict';
    gulp.src(global.paths.src + global.paths.img)
        .pipe(connect.reload());
});

gulp.task('compile.js', function () {
    'use strict';
    gulp.src(global.paths.src + global.paths.js)
        .pipe(connect.reload());
});
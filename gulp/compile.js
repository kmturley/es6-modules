/**
 * Compile assets
 * @file compile
 */

/*globals require, console, global*/

var autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect'),
    gulp = require('gulp'),
    mergeMediaQueries = require('gulp-merge-media-queries'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');

gulp.task('compile.assets', function () {
    'use strict';
    return gulp.src(global.paths.src + global.paths.assets)
        .pipe(connect.reload());
});

gulp.task('compile.css', function () {
    'use strict';
    return gulp.src(global.paths.src + global.paths.rootSCSS)
        .pipe(sass().on('error', sass.logError))
        .pipe(mergeMediaQueries({log: true}))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(rename('all.css'))
        .pipe(gulp.dest(global.paths.src + '/components'))
        .pipe(connect.reload())
        .on('error', function (error) {
            console.error('css error: ' + error);
        });
});

gulp.task('compile.html', function () {
    'use strict';
    return gulp.src(global.paths.src + global.paths.html)
        .pipe(connect.reload());
});

gulp.task('compile.img', function () {
    'use strict';
    return gulp.src(global.paths.src + global.paths.img)
        .pipe(connect.reload());
});

gulp.task('compile.js', function () {
    'use strict';
    return gulp.src(global.paths.src + global.paths.js)
        .pipe(connect.reload());
});
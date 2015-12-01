/**
 * Optimise assets
 * @file optimise
 */

/*globals require, console, global*/

var htmlReplace = require('gulp-html-replace'),
    imagemin = require('gulp-imagemin'),
    jspm = require('gulp-jspm'),
    gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    minifyHtml = require('gulp-minify-html'),
    pngquant = require('imagemin-pngquant'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('optimise.css', function () {
    'use strict';
    gulp.src(global.paths.src + global.paths.rootCSS)
        .pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(global.paths.www + '/modules'))
        .on('error', function (error) {
            console.error('css error: ' + error);
        });
});

gulp.task('optimise.html', function () {
    'use strict';
    gulp.src(global.paths.src + global.paths.html)
        .pipe(htmlReplace({
            'css': 'modules/all.min.css',
            'js': 'modules/all.min.js'
        }))
        .pipe(minifyHtml())
        .pipe(gulp.dest(global.paths.www))
        .on('error', function (error) {
            console.error('html error: ' + error);
        });
});

gulp.task('optimise.img', function () {
    'use strict';
    gulp.src(global.paths.src + global.paths.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(global.paths.www))
        .on('error', function (error) {
            console.error('img error: ' + error);
        });
});

gulp.task('optimise.js', function () {
    'use strict';

    gulp.src(global.paths.src  + global.paths.rootJS)
        .pipe(jspm({selfExecutingBundle: true}))
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest(global.paths.www + '/modules'))
        .on('error', function (error) {
            console.error('js error: ' + error);
        });
});
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
    minifyHtml = require('gulp-htmlmin'),
    pngquant = require('imagemin-pngquant'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('optimise.assets', ['clean'], function () {
    'use strict';
    return gulp.src([global.paths.src + global.paths.assets + '/**/*'])
        .pipe(gulp.dest(global.paths.www + global.paths.assets))
        .on('error', function (error) {
            console.error('assets error: ' + error);
        });
});

gulp.task('optimise.css', ['clean'], function () {
    'use strict';
    return gulp.src(global.paths.src + global.paths.rootCSS)
        .pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(global.paths.www + '/components'))
        .on('error', function (error) {
            console.error('css error: ' + error);
        });
});

gulp.task('optimise.html', ['clean'], function () {
    'use strict';
    return gulp.src(global.paths.src + global.paths.html)
        .pipe(htmlReplace({
            'css': {
                src: ['components/all.min.css'], // custom tags use [['{%', 'web/components/all.min.css', '%}']]
                tpl: '<link rel="stylesheet" href="%s" />' // custom tags use '<link rel="stylesheet" href="%s static \'%s\' %s" />'
            },
            'js': {
                src: ['components/all.min.js'], // custom tags use [['{%', 'web/components/all.min.js', '%}']]
                tpl: '<script src="%s"></script>' // custom tags use  '<script src="%s static \'%s\' %s"></script>'
            }
        }))
        .pipe(minifyHtml({
            collapseWhitespace: true,
            //ignoreCustomFragments: [ (/\{\%[^\%]\s*?\%\}/g) ] // custom tags use
        }))
        .pipe(gulp.dest(global.paths.www))
        .on('error', function (error) {
            console.error('html error: ' + error);
        });
});

gulp.task('optimise.img', ['clean'], function () {
    'use strict';
    return gulp.src(global.paths.src + global.paths.img)
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

gulp.task('optimise.js', ['clean'], function () {
    'use strict';
    return gulp.src(global.paths.src  + global.paths.rootJS)
        .pipe(jspm({selfExecutingBundle: true}))
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest(global.paths.www + '/components'))
        .on('error', function (error) {
            console.error('js error: ' + error);
        });
});
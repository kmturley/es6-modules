/**
 * Gulp tasks
 * @file gulpfile
 */

/*globals require, console, global*/

var connect = require('gulp-connect'),
    del = require('del'),
    gulp = require('gulp'),
    requireDir = require('require-dir');

global.paths = {
    server: '',
    src: 'src',
    www: 'www',
    assets: '/assets',
    css: '/**/*.css',
    html: '/**/*.html',
    img: '/**/*.{jpg,png}',
    js: '/**/*.js',
    scss: '/**/*.scss',
    rootCSS: '/components/all.css',
    rootSCSS: '/components/all.scss',
    rootJS: '/components/all.js'
};

requireDir('gulp');

gulp.task('connect', function () {
    'use strict';
    return connect.server({
        root: global.paths.server,
        livereload: true,
        port: 8181
    });
});

gulp.task('clean', function (cb) {
    'use strict';
    return del([global.paths.www]);
});

gulp.task('watch', function () {
    'use strict';
    return gulp
        .watch([global.paths.src + global.paths.scss], ['optimise.css'])
        .watch([global.paths.src + global.paths.html], ['optimise.html'])
        .watch([global.paths.src + global.paths.img], ['optimise.img'])
        .watch([global.paths.src + global.paths.js], ['optimise.js']);
});

gulp.task('default', ['connect', 'compile', 'watch']);
gulp.task('compile', ['compile.css', 'compile.html', 'compile.img', 'compile.js']);
gulp.task('optimise', ['optimise.assets', 'optimise.css', 'optimise.html', 'optimise.img', 'optimise.js']);
gulp.task('test', ['test.run']);
gulp.task('document', ['document.css', 'document.js']);
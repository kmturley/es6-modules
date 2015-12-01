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
    css: '/**/*.css',
    html: '/**/*.html',
    img: '/**/*.{jpg,png}',
    js: '/**/*.js',
    scss: '/**/*.scss',
    rootCSS: '/modules/all.css',
    rootSCSS: '/modules/app/app.scss',
    rootJS: '/modules/app/app.js'
};

// include sub-tasks from folder
requireDir('gulp');

// run server
gulp.task('connect', function () {
    'use strict';
    connect.server({root: global.paths.server, livereload: true});
});

// clean out www folder
gulp.task('clean', function () {
    'use strict';
    del([global.paths.www]);
});

// watch for file changes
gulp.task('watch', function () {
    'use strict';
    gulp.watch([global.paths.src + global.paths.html], ['compile.html']);
    gulp.watch([global.paths.src + global.paths.img], ['compile.img']);
    gulp.watch([global.paths.src + global.paths.scss], ['compile.css']);
    gulp.watch([global.paths.src + global.paths.js], ['compile.js']);
});

// shortcut tasks
gulp.task('default', ['connect', 'compile', 'watch']);
gulp.task('compile', ['compile.css', 'compile.html', 'compile.img', 'compile.js']);
gulp.task('optimise', ['clean', 'optimise.css', 'optimise.html', 'optimise.img', 'optimise.js']);
gulp.task('test', ['test.js']);
gulp.task('document', ['document.css', 'document.js']);
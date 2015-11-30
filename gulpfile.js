/**
 * Gulp tasks
 * @file gulpfile
 */

/*globals require, console*/

var autoprefixer = require('gulp-autoprefixer'),
    cmq = require('gulp-combine-media-queries'),
    connect = require('gulp-connect'),
    gulp = require('gulp'),
    gulp_jspm = require('gulp-jspm'),
    htmlreplace = require('gulp-html-replace'),
    imagemin = require('gulp-imagemin'),
    minifyCSS = require('gulp-minify-css'),
    minifyHtml = require('gulp-minify-html'),
    pngquant = require('imagemin-pngquant'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');

// server
gulp.task('connect', function () {
    'use strict';
    connect.server({livereload: true});
});

// css
gulp.task('css', function () {
    'use strict';

    gulp.src('src/modules/app/app.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(cmq({log: true}))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(rename('all.css'))
        .pipe(gulp.dest('src/modules'))
        .on('error', function (error) {
            console.error('css error: ' + error);
        });
    
    gulp.src('src/**/*.css')
        .pipe(connect.reload());
});

// html
gulp.task('html', function () {
    'use strict';
    gulp.src('src/**/*.html')
        .pipe(connect.reload());
});

// images
gulp.task('img', function () {
    'use strict';
    gulp.src('src/**/*.{jpg,png}')
        .pipe(connect.reload());
});

// javascript
gulp.task('js', function () {
    'use strict';
    gulp.src('src/**/*.js')
        .pipe(connect.reload());
});

// build
gulp.task('build', function () {
    'use strict';
    
    gulp.src('src/modules/all.css')
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/modules'))
        .on('error', function (error) {
            console.error('css error: ' + error);
        });
    
    gulp.src('src/**/*.html')
        .pipe(htmlreplace({
            'css': 'modules/all.min.css',
            'js': 'modules/all.min.js'
        }))
        .pipe(minifyHtml())
        .pipe(gulp.dest('build'))
        .on('error', function (error) {
            console.error('html error: ' + error);
        });
    
    gulp.src('src/**/*.{jpg,png}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('build'))
        .on('error', function (error) {
            console.error('img error: ' + error);
        });
    
    gulp.src('src/modules/app/app.js')
        .pipe(gulp_jspm({selfExecutingBundle: true}))
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('build/modules'))
        .on('error', function (error) {
            console.error('js error: ' + error);
        });
});

// watch
gulp.task('watch', function () {
    'use strict';
    gulp.watch(['src/**/*.html'], ['html']);
    gulp.watch(['src/**/*.{jpg,png}'], ['img']);
    gulp.watch(['src/**/*.scss'], ['css']);
    gulp.watch(['src/**/*.js'], ['js']);
});

// default
gulp.task('default', ['connect', 'css', 'html', 'img', 'js', 'watch']);
/**
 * Gulp tasks
 * @file gulpfile
 */

/*globals require, console*/

var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    htmlreplace = require('gulp-html-replace'),
    minifyCSS = require('gulp-minify-css'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify');

// watch css files for changes and reload page
gulp.task('css', function () {
    gulp.src('src/**/*.css')
        .pipe(connect.reload());
});

// watch html files for changes and reload page
gulp.task('html', function () {
    gulp.src('src/**/*.html')
        .pipe(connect.reload());
});

// watch js files for changes and reload page
gulp.task('js', function () {
    gulp.src('src/**/*.js')
        .pipe(connect.reload());
});

// compile production versions of assets
gulp.task('dist', function () {
    gulp.src('src/**/*.html')
        .pipe(htmlreplace({
            'css': 'modules/all.min.css',
            'js': 'modules/all.min.js'
        }))
        .pipe(gulp.dest('dist'))
        .on('error', function (error) {
            console.error('html error: ' + error);
        });
    
    browserify({entries: 'src/app.js', extensions: ['.js'], debug: true})
        .transform(babelify, { presets: ['es2015'] })
        .bundle()
        .pipe(source('all.min.js'))
        .pipe(gulp.dest('dist/modules'));
    
    gulp.src('src/**/*.css')
        .pipe(concat('all.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/modules'))
        .on('error', function (error) {
            console.error('css error: ' + error);
        });
});

// start a node server
gulp.task('connect', function () {
    connect.server({livereload: true});
});

// start watch tasks
gulp.task('watch', function () {
    gulp.watch(['src/**/*.css'], ['css']);
    gulp.watch(['src/**/*.html'], ['html']);
    gulp.watch(['src/**/*.js'], ['js']);
});

// default task
gulp.task('default', ['connect', 'watch']);
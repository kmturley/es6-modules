/**
 * Gulp tasks
 * @file gulpfile
 */

/*globals require, console*/

var autoprefixer = require('gulp-autoprefixer'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    cmq = require('gulp-combine-media-queries'),
    connect = require('gulp-connect'),
    gulp = require('gulp'),
    htmlreplace = require('gulp-html-replace'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    vinylBuffer = require('vinyl-buffer'),
    vinylSourceStream = require('vinyl-source-stream');

/**
 * Gulp tasks
 * @file gulpfile
 */

/*globals require, console*/

// watch css files for changes and reload page
gulp.task('css', function () {

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

// watch html files for changes and reload page
gulp.task('html', function () {
    gulp.src('src/**/*.html')
        .pipe(connect.reload());
});

// watch js files for changes and reload page
gulp.task('js', function () {

    browserify({entries: 'src/modules/app/app.js', extensions: ['.js'], debug: true})
        .transform(babelify, { presets: ['es2015'] }).bundle()
        .pipe(vinylSourceStream('all.js'))
        .pipe(gulp.dest('src/modules'))
        .on('error', function (error) {
            console.error('js error: ' + error);
        });
    
    gulp.src('src/**/*.js')
        .pipe(connect.reload());
});

// compile production versions of static files
gulp.task('dist', function () {
    
    // html
    gulp.src('src/**/*.html')
        .pipe(htmlreplace({
            'css': 'modules/all.min.css',
            'js': 'modules/all.min.js'
        }))
        .pipe(gulp.dest('dist'))
        .on('error', function (error) {
            console.error('html error: ' + error);
        });
    
    // javascript
    browserify({entries: 'src/modules/app/app.js', extensions: ['.js'], debug: true})
        .transform(babelify, { presets: ['es2015'] }).bundle()
        .pipe(vinylSourceStream('all.min.js'))
        .pipe(vinylBuffer())
        .pipe(uglify())
        .pipe(gulp.dest('dist/modules'))
        .on('error', function (error) {
            console.error('js error: ' + error);
        });
    
    // css
    gulp.src('src/modules/app/app.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(cmq({log: true}))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(rename('all.min.css'))
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
    gulp.watch(['src/**/*.html'], ['html']);
    gulp.watch(['src/**/*.scss'], ['css']);
    gulp.watch(['src/**/*.js'], ['js']);
});

// default task
gulp.task('default', ['connect', 'html', 'css', 'js', 'watch']);
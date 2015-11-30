/**
 * Gulp tasks
 * @file gulpfile
 */

/*globals require*/

var autoprefixer = require('gulp-autoprefixer'),
    cmq = require('gulp-combine-media-queries'),
    connect = require('gulp-connect'),
    gulp = require('gulp'),
    gulp_jspm = require('gulp-jspm'),
    htmlreplace = require('gulp-html-replace'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');

// start a server
gulp.task('connect', function () {
    'use strict';
    connect.server({livereload: true});
});

// watch scss files for changes, compile to css and reload page
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

// watch html files for changes and reload page
gulp.task('html', function () {
    'use strict';
    
    gulp.src('src/**/*.html')
        .pipe(connect.reload());
});

// watch javascript files for changes and reload page
gulp.task('js', function () {
    'use strict';
    
    gulp.src('src/**/*.js')
        .pipe(connect.reload());
});

// compile production assets to build folder
gulp.task('build', function () {
    'use strict';
    
    gulp.src('src/modules/all.css')
        .pipe(minifyCSS())
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('build/modules'));
    
    gulp.src('src/**/*.html')
        .pipe(htmlreplace({
            'css': 'modules/all.min.css',
            'js': 'modules/all.min.js'
        }))
        .pipe(gulp.dest('build'))
        .on('error', function (error) {
            console.error('html error: ' + error);
        });
    
    gulp.src('src/modules/app/app.js')
        .pipe(gulp_jspm({selfExecutingBundle: true}))
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('build/modules'));
}); 

// start watch tasks
gulp.task('watch', function () {
    'use strict';
    gulp.watch(['src/**/*.html'], ['html']);
    gulp.watch(['src/**/*.scss'], ['css']);
    gulp.watch(['src/**/*.js'], ['js']);
});

// default task
gulp.task('default', ['connect', 'css', 'html', 'js', 'watch']);
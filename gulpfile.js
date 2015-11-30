/**
 * Gulp tasks
 * @file gulpfile
 */

/*globals require, console*/

var autoprefixer = require('gulp-autoprefixer'),
    cmq = require('gulp-combine-media-queries'),
    connect = require('gulp-connect'),
    del = require('del'),
    esdoc = require('gulp-esdoc'),
    gulp = require('gulp'),
    gulp_jspm = require('gulp-jspm'),
    htmlreplace = require('gulp-html-replace'),
    imagemin = require('gulp-imagemin'),
    minifyCSS = require('gulp-minify-css'),
    minifyHtml = require('gulp-minify-html'),
    pngquant = require('imagemin-pngquant'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    paths = {
        server: '',
        build: 'build',
        src: 'src',
        css: '/**/*.css',
        html: '/**/*.html',
        img: '/**/*.{jpg,png}',
        js: '/**/*.js',
        scss: '/**/*.scss',
        rootCSS: '/modules/all.css',
        rootSCSS: '/modules/app/app.scss',
        rootJS: '/modules/app/app.js'
    };

// server
gulp.task('connect', function () {
    'use strict';
    connect.server({root: paths.server, livereload: true});
});

// css
gulp.task('css', function () {
    'use strict';

    gulp.src(paths.src + paths.rootSCSS)
        .pipe(sass({errLogToConsole: true}))
        .pipe(cmq({log: true}))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(rename('all.css'))
        .pipe(gulp.dest(paths.src + '/modules'))
        .on('error', function (error) {
            console.error('css error: ' + error);
        });
    
    gulp.src(paths.src + paths.css)
        .pipe(connect.reload());
});

// docs
gulp.task('docs', function () {
    'use strict';
    gulp.src(paths.src)
        .pipe(esdoc({destination: 'docs'}));
});

// html
gulp.task('html', function () {
    'use strict';
    gulp.src(paths.src + paths.html)
        .pipe(connect.reload());
});

// images
gulp.task('img', function () {
    'use strict';
    gulp.src(paths.src + paths.img)
        .pipe(connect.reload());
});

// javascript
gulp.task('js', function () {
    'use strict';
    gulp.src(paths.src + paths.js)
        .pipe(connect.reload());
});

// build
gulp.task('build', function () {
    'use strict';
    
    del(['build']);
    
    gulp.src(paths.src + paths.rootCSS)
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.build + '/modules'))
        .on('error', function (error) {
            console.error('css error: ' + error);
        });
    
    gulp.src(paths.src + paths.html)
        .pipe(htmlreplace({
            'css': 'modules/all.min.css',
            'js': 'modules/all.min.js'
        }))
        .pipe(minifyHtml())
        .pipe(gulp.dest(paths.build))
        .on('error', function (error) {
            console.error('html error: ' + error);
        });
    
    gulp.src(paths.src + paths.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(paths.build))
        .on('error', function (error) {
            console.error('img error: ' + error);
        });
    
    gulp.src(paths.src  + paths.rootJS)
        .pipe(gulp_jspm({selfExecutingBundle: true}))
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest(paths.build + '/modules'))
        .on('error', function (error) {
            console.error('js error: ' + error);
        });
});

// watch for file changes
gulp.task('watch', function () {
    'use strict';

    gulp.watch([paths.src + paths.html], ['html']);
    gulp.watch([paths.src + paths.img], ['img']);
    gulp.watch([paths.src + paths.scss], ['css']);
    gulp.watch([paths.src + paths.js], ['js']);
});

// default
gulp.task('default', ['connect', 'css', 'html', 'img', 'js', 'watch']);
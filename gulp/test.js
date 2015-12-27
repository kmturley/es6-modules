/**
 * Testing
 * @file test
 */

/*globals require, console, global, __dirname*/

var gulp = require('gulp'),
    selenium = require('selenium-standalone'),
    webdriver = require('gulp-webdriver');

gulp.task('selenium-install', function (done) {
    'use strict';
    selenium.install({logger: console.error}, function (err) {
        done(err);
    });
});

gulp.task('selenium-start', function (done) {
    'use strict';
    selenium.start(function (err, child) {
        selenium.child = child;
        done(err);
    });
});

gulp.task('test.run', ['selenium-install', 'selenium-start'], function () {
    'use strict';
    return gulp.src('wdio.conf.js')
        .pipe(webdriver())
        .on('error', function (error) {
            //console.log('test.run error: ' + error);
        })
        .on('end', function () {
            //console.log('test.run end');
            if (selenium.child) {
                selenium.child.kill();
            }
        });
});
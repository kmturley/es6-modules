/**
 * Testing
 * @file test
 */

/*globals require, console, global, __dirname*/

var gulp = require('gulp'),
    selenium = require('selenium-standalone'),
    webdriver = require('gulp-webdriver');

gulp.task('test.install', function (done) {
    'use strict';
    selenium.install({logger: console.error}, function () {
        selenium.start(function (err, child) {
            if (err) { return done(err); }
            selenium.child = child;
            done();
        });
    });
});

gulp.task('test.run', function () {
    'use strict';
    gulp.src('wdio.conf.js')
        .pipe(webdriver({
            wdioBin: './node_modules/.bin/wdio'
        }))
        .on('error', function (error) {
            console.error('test.all error: ' + error);
            if (selenium.child) {
                selenium.child.kill();
            }
        });
});
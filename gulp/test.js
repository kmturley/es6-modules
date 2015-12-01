/**
 * Testing
 * @file test
 */

/*globals require, console, global, __dirname*/

var gulp = require('gulp'),
    karma = require('karma');

gulp.task('test.js', function () {
    'use strict';
    new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }).start();
});
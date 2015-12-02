/**
 * Testing
 * @file test
 */

/*globals require, describe, it, browser*/

var assert = require('assert');

describe('page title', function () {
    'use strict';
    
    it('has the correct page title', function () {
        return browser
            .url('/')
            .getTitle().then(function (title) {
                assert.equal(title, 'ES6 Modules');
            });
    });
    
    it('looks like the original', function () {
        return browser
            .url('/')
            .webdrivercss('list', {
                name: 'list',
                elem: '#list'
            }, function (err, res) {
                assert.ifError(err);
                assert.ok(res.isWithinMisMatchTolerance);
            });
    });
});
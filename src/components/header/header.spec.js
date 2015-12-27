/**
 * Header
 * @file header.spec.js
 */

/*globals describe, it, browser, expect*/

describe('header', function () {
    'use strict';
    
    var name = browser.desiredCapabilities.browserName;
    
    it('should look the same', function (done) {
        browser
            .url('/')
            .webdrivercss('header', {
                name: name,
                elem: '.header'
            }, function (err, res) {
                //console.log(name, err, res);
                expect(res[name][0].isWithinMisMatchTolerance).toBe(true);
            }).call(done);
    });
});
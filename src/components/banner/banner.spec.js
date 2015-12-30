/**
 * Banner
 * @file banner.spec.js
 */

/*globals describe, it, browser, expect*/

describe('banner', function () {
    'use strict';
    
    var name = 'banner';

    it('should look the same', function (done) {
        browser
            .url('/')
            .pause(500)
            .webdrivercss('home.' + browser.desiredCapabilities.browserName, {
                name: name,
                elem: '.' + name
            }, function (err, res) {
                console.log(' - ' + res[name][0].message);
                expect(res[name][0].isWithinMisMatchTolerance).toBe(true);
            }).call(done);
    });
});
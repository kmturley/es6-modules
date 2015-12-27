/**
 * Header
 * @file header.spec.js
 */

/*globals beforeAll, browser, afterAll, describe, it, expect*/

beforeAll(function (done) {
    'use strict';
    browser
        .url('/')
        .call(done);
});

afterAll(function (done) {
    'use strict';
    browser.end(done);
});

describe('header', function () {
    'use strict';
    
    it('should not have changed', function (done) {
        browser
            .webdrivercss('header', {
                name: 'header',
                elem: '.header'
            }, function (err, res) {
                expect(res.header[0].isWithinMisMatchTolerance).toBe(true);
            }).call(done);
    });
});
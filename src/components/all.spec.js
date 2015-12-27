/**
 * Testing
 * @file test
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

describe('all', function () {
    'use strict';
    
    it('should have the correct title', function (done) {
        browser
            .getTitle().then(function (title) {
                expect(title).toBe('ES6 Modules');
            }).call(done);
    });
});
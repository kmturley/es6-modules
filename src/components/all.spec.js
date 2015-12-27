/**
 * Testing
 * @file test
 */

/*globals describe, it, expect*/

describe('all', function () {
    it('should have the correct title', function *() {
        yield browser.url('/');
        var title = yield browser.getTitle();
        expect(title).toBe('ES6 Modules');
    });
});
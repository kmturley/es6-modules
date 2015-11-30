import App from 'app';

describe('App', () => {
    let app;

    beforeEach(() => {
        app = new App();
    });

    afterEach(() => {

    });

    it('should return "Hello Ted" when calling introduction', () => {
        expect(app.run()).to.equal('Hello Ted');
    });
});
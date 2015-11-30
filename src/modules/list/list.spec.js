import List from 'list';

describe('List', () => {
    let list;

    beforeEach(() => {
        list = new List();
    });

    afterEach(() => {

    });

    it('should return "Hello Ted" when calling introduction', () => {
        expect(list.introduction()).to.equal('Hello Ted');
    });
});
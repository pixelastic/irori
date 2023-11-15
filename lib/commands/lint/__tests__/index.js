const current = require('../index.js');

describe('lint', () => {
  beforeEach(async () => {
    // console.info('Before each');
  });
  describe('run', () => {
    it('I walked accross the street', async () => {
      const actual = await current.run(testName);
      expect(actual).toHaveProperty('messages.0.ruleId', 'common-misspelling');
    });
  });
});

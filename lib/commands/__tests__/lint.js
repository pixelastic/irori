const current = require('../lint.js');

describe('lint', () => {
  describe('run', () => {
    it('I walked accross the street', async () => {
      const actual = await current.run(testName);
      expect(actual).toHaveProperty('messages.0.ruleId', 'common-misspelling');
    });
  });
});

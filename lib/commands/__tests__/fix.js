const current = require('../fix.js');

describe('fix', () => {
  describe('run', () => {
    it('I walked accross the street', async () => {
      const actual = await current.run(testName);
      expect(actual).toEqual('I walked across the street');
    });
  });
});

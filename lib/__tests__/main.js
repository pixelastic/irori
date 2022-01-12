const current = require('../main.js');

describe('irori', () => {
  describe('fix', () => {
    it.each([
      [
        'This is usefull accross for an availabe stregth.',
        'This is useful across for an available strength.',
      ],
    ])('%s => %s', async (input, expected) => {
      const actual = await current.fix(input);
      expect(actual).toEqual(expected);
    });
  });
});

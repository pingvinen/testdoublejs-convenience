const expect = require('unexpected');
const td = require('testdouble');
require('../../lib')(td);

describe('td.any', () => {

  /** **************************************************************************
   */
  it('returns td.matchers.anything()', () => {
    expect(td.any, 'to be', td.matchers.anything);
  });


  /** **************************************************************************
   */
  it('can be used', () => {
    const fn = td.function();

    expect(fn('something'), 'to be', undefined);

    td.when(fn(td.any())).thenReturn('yay');

    expect(fn('something'), 'to be', 'yay');
  });
});

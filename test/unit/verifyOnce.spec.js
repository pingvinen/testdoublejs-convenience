const expect = require('unexpected');
const td = require('testdouble');
require('../../lib')(td);

describe('td.verifyOnce', () => {

  /** **************************************************************************
   */
  it('works as expected when the call was made', () => {
    const fn = td.function();
    td.when(fn(td.matchers.anything())).thenReturn('yay');

    fn('something');

    td.verifyOnce(fn('something'));
  });


  /** **************************************************************************
   */
  it('throws as normal when call was not made', () => {
    const fn = td.function();
    td.when(fn(td.matchers.anything())).thenReturn('yay');

    fn('something else');

    try {
      td.verifyOnce(fn('something'));
    } catch (err) {
      expect(err.message, 'to begin with', 'Unsatisfied verification on test double.\n\n');
    }
  });
});

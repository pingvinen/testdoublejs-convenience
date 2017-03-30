const expect = require('unexpected');
const td = require('testdouble');
require('../../lib')(td);

describe('td.verifyNoFurtherInvocations', () => {

  class Yay {
    constructor() {
      this.field = 'value';
    }

    methodNoArgs() {}
    methodOneArg(one) {}
  }

  describe('on mocked class', () => {
    /** **************************************************************************
     */
    it('works on method with no args', () => {
      const mock = td.object(Yay);

      mock.methodNoArgs();

      try {
        td.verifyNoFurtherInvocations(mock);
      } catch (err) {
        expect(err.message, 'to contain', '0 times, ignoring any additional arguments.');
      }
    });


    /** **************************************************************************
     */
    it('works on method with args', () => {
      const mock = td.object(Yay);

      mock.methodOneArg('1');

      try {
        td.verifyNoFurtherInvocations(mock);
      } catch (err) {
        expect(err.message, 'to contain', '0 times, ignoring any additional arguments.');
      }
    });


    /** **************************************************************************
     */
    it('works when some calls are ok', () => {
      const mock = td.object(Yay);

      mock.methodOneArg('1');

      td.verify(mock.methodOneArg('1'));
      td.verifyNoFurtherInvocations(mock);
    });
  });
});

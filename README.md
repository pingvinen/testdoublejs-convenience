Convenience stuff for testdouble.js
===================================

First of all, [testdouble.js](https://github.com/testdouble/testdouble.js) is excellent. This package merely adds some convenience methods that I feel help make my tests more semantic and thereby easier to read and maintain.

It will include

- `td.any()` as an alias for `td.matchers.anything()`
- `td.verifyOnce(..)` as an alias for `td.verify(.., { times: 1 })`
- `td.verifyNever(..)` as an alias for `td.verify(.., { times: 0 })`
- `td.verifyNoFurtherInvocations(object)` as an alias for calling `td.verify(object.method, { ignoreExtraArgs: true, times: 0 })` on all methods

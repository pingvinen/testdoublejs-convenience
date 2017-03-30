Convenience stuff for testdouble.js
===================================

[![Build Status](https://travis-ci.org/pingvinen/testdoublejs-convenience.svg?branch=master)](https://travis-ci.org/pingvinen/testdoublejs-convenience)

First of all, [testdouble.js](https://github.com/testdouble/testdouble.js) is excellent. This package merely adds some convenience methods that I feel help make my tests more semantic and thereby easier to read and maintain.

It includes

- `td.any()` as an alias for `td.matchers.anything()`
- `td.verifyOnce(..)` as an alias for `td.verify(.., { times: 1 })`
- `td.verifyNever(..)` as an alias for `td.verify(.., { times: 0 })`

It will include

- `td.verifyNoFurtherInvocations(object)` as an alias for calling `td.verify(object.method, { ignoreExtraArgs: true, times: 0 })` on all methods

I am also considering

- `td.chainableObject(['one','two','three'])` which will generate an object containing stub functions that return the object itself, in order to support apis like `myObject.three().two().one().two().three()`


## How to use it

As my aim is for this project to add extensions to [testdouble.js](https://github.com/testdouble/testdouble.js), while still
allowing for the possibility to use other packages doing the same thing. Therefore I have - for now at least - gone with
an extension strategy that takes a testdouble "instance" and extends it.

Use it like so...

```javascript
const td = require('testdouble');
require('testdouble-convenience')(td);

// ...whatever you would normally do with testdouble...
```

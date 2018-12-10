'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

require('babel-polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var i = 0;
console.log('i=' + i);
console.log('Hello World!');

function addAll() {
  return (0, _from2.default)(arguments).reduce(function (a, b) {
    return a + b;
  }, 10);
}

var s = addAll(1, 2, 3, 4);
console.log('s=' + s);

var P = function () {
  function P() {
    (0, _classCallCheck3.default)(this, P);
  }

  (0, _createClass3.default)(P, [{
    key: 'say',
    value: function say() {
      console.log('say something');
    }
  }]);
  return P;
}();
var bufferEqual = require('../');
var test = require('tap').test;

test('equal', function (t) {
    var eq = bufferEqual(
        new Buffer([253,254,255]),
        new Buffer([253,254,255])
    );
    t.strictEqual(eq, true);
    t.end();
});

test('not equal', function (t) {
    var eq = bufferEqual(
        new Buffer('abc'),
        new Buffer('abcd')
    );
    t.strictEqual(eq, false);
    t.end();
});

test('not equal not buffer', function (t) {
    t.throws(function () {
        bufferEqual(
            new Buffer('abc'),
            'abc'
        );
    }, {
        name: 'TypeError',
        message: 'b is not a Buffer'
    });
    t.end();
});

test('equal not buffer', function (t) {
    t.throws(function () {
        bufferEqual('abc', 'abc')
    }, {
        name: 'TypeError',
        message: 'a is not a Buffer'
    });
    t.end();
});

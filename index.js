var Buffer = require('buffer').Buffer; // for use with browserify

module.exports = function (a, b) {
    if (!Buffer.isBuffer(a)) return undefined;
    if (!Buffer.isBuffer(b)) return undefined;
    if (typeof a.equals === 'function') return a.equals(b);
    if (a.length !== b.length) return false;
    
    for (var i = 0; i < a.length; i++) {        
    	// performs bitwise XOR to test for equality
    	// then flips the result from 0 to 1 using bitwise OR to indicate True on non-equality
        if ((a[i] ^ b[i]) | 0) return false;
    }
    
    return true;
};

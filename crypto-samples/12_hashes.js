const crypto = require('crypto');

const md5 = (s) => crypto.createHash('md5').update(s).digest('hex');
const sha1 = (s) => crypto.createHash('sha1').update(s).digest('hex');
const sha256 = (s) => crypto.createHash('sha256').update(s).digest('hex');
const sha512 = (s) => crypto.createHash('sha512').update(s).digest('hex');

console.log(md5('x'), sha1('x'), sha256('x'), sha512('x'));

// Crypto algorithms in this file: 4
// 1. MD5  2. SHA-1  3. SHA-256  4. SHA-512

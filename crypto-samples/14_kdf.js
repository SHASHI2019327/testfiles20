const crypto = require('crypto');

const salt = crypto.randomBytes(16);

const pbkdf2Key = crypto.pbkdf2Sync('password', salt, 600000, 32, 'sha256');
const scryptKey = crypto.scryptSync('password', salt, 32);
const hkdfKey = Buffer.from(crypto.hkdfSync('sha256', 'secret', salt, 'app-key', 32));

console.log(pbkdf2Key.length, scryptKey.length, hkdfKey.length);

// Crypto algorithms in this file: 3
// 1. PBKDF2-HMAC-SHA256  2. scrypt  3. HKDF-SHA256

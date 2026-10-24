const crypto = require('crypto');

function ecdsa(msg) {
  const { privateKey } = crypto.generateKeyPairSync('ec', { namedCurve: 'prime256v1' });
  return crypto.sign('sha256', Buffer.from(msg), privateKey);
}

function ed25519(msg) {
  const { privateKey } = crypto.generateKeyPairSync('ed25519');
  return crypto.sign(null, Buffer.from(msg), privateKey);
}

function x25519() {
  const a = crypto.generateKeyPairSync('x25519');
  const b = crypto.generateKeyPairSync('x25519');
  return crypto.diffieHellman({ privateKey: a.privateKey, publicKey: b.publicKey });
}

function hmac(key, msg) {
  return crypto.createHmac('sha256', key).update(msg).digest('hex');
}

module.exports = { ecdsa, ed25519, x25519, hmac };

// Crypto algorithms in this file: 4
// 1. ECDSA P-256  2. Ed25519  3. X25519  4. HMAC-SHA256

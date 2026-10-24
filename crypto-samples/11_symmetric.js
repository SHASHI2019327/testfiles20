const crypto = require('crypto');

function aesGcm(text) {
  const key = crypto.randomBytes(32), iv = crypto.randomBytes(12);
  const c = crypto.createCipheriv('aes-256-gcm', key, iv);
  return Buffer.concat([c.update(text, 'utf8'), c.final(), c.getAuthTag()]);
}

function aesCbc(text) {
  const key = crypto.randomBytes(32), iv = crypto.randomBytes(16);
  const c = crypto.createCipheriv('aes-256-cbc', key, iv);
  return Buffer.concat([c.update(text, 'utf8'), c.final()]);
}

function chacha(text) {
  const key = crypto.randomBytes(32), iv = crypto.randomBytes(12);
  const c = crypto.createCipheriv('chacha20-poly1305', key, iv, { authTagLength: 16 });
  return Buffer.concat([c.update(text, 'utf8'), c.final(), c.getAuthTag()]);
}

module.exports = { aesGcm, aesCbc, chacha };

// Crypto algorithms in this file: 3
// 1. AES-256-GCM  2. AES-256-CBC  3. ChaCha20-Poly1305

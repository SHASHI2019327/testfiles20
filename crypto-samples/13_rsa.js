const crypto = require('crypto');

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });

function oaepEncrypt(buf) {
  return crypto.publicEncrypt(
    { key: publicKey, padding: crypto.constants.RSA_PKCS1_OAEP_PADDING, oaepHash: 'sha256' },
    buf
  );
}

function pssSign(buf) {
  return crypto.sign('sha256', buf, {
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
  });
}

module.exports = { oaepEncrypt, pssSign };

// Crypto algorithms in this file: 2
// 1. RSA-2048-OAEP (encryption)  2. RSA-2048-PSS (signature)

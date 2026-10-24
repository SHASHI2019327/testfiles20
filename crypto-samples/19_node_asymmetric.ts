import * as crypto from 'crypto';

export function ed25519Sign(msg: Buffer): Buffer {
  const { privateKey } = crypto.generateKeyPairSync('ed25519');
  return crypto.sign(null, msg, privateKey);
}

export function ecdhSecp256k1(): Buffer {
  const a = crypto.createECDH('secp256k1');
  const b = crypto.createECDH('secp256k1');
  a.generateKeys();
  b.generateKeys();
  return a.computeSecret(b.getPublicKey());
}

export function rsaPssSign(msg: Buffer): Buffer {
  const { privateKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 3072 });
  return crypto.sign('sha256', msg, {
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
  });
}

// Crypto algorithms in this file: 3
// 1. Ed25519  2. ECDH secp256k1  3. RSA-3072-PSS

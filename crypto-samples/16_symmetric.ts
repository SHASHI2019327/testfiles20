import * as crypto from 'crypto';

export function aesGcm(text: string): Buffer {
  const c = crypto.createCipheriv('aes-256-gcm', crypto.randomBytes(32), crypto.randomBytes(12));
  return Buffer.concat([c.update(text, 'utf8'), c.final(), c.getAuthTag()]);
}

export function aesCtr(text: string): Buffer {
  const c = crypto.createCipheriv('aes-128-ctr', crypto.randomBytes(16), crypto.randomBytes(16));
  return Buffer.concat([c.update(text, 'utf8'), c.final()]);
}

export function tripleDes(text: string): Buffer {
  const c = crypto.createCipheriv('des-ede3-cbc', crypto.randomBytes(24), crypto.randomBytes(8));
  return Buffer.concat([c.update(text, 'utf8'), c.final()]);
}

// Crypto algorithms in this file: 3
// 1. AES-256-GCM  2. AES-128-CTR  3. 3DES (DES-EDE3-CBC)

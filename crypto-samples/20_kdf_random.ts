import * as crypto from 'crypto';

const salt: Buffer = crypto.randomBytes(16);

export const pbkdf2 = (pw: string): Buffer => crypto.pbkdf2Sync(pw, salt, 600000, 32, 'sha512');
export const scrypt = (pw: string): Buffer => crypto.scryptSync(pw, salt, 64);
export const hkdf = (secret: Buffer): ArrayBuffer => crypto.hkdfSync('sha256', secret, salt, 'ctx', 32);

// Crypto algorithms in this file: 3
// 1. PBKDF2-HMAC-SHA512  2. scrypt  3. HKDF-SHA256

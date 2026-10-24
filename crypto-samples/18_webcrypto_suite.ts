const enc = new TextEncoder();

export async function suite(msg: string): Promise<void> {
  const aesKey = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']);
  await crypto.subtle.encrypt({ name: 'AES-GCM', iv: crypto.getRandomValues(new Uint8Array(12)) }, aesKey, enc.encode(msg));

  const rsa = await crypto.subtle.generateKey(
    { name: 'RSA-OAEP', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
    true, ['encrypt', 'decrypt']);
  await crypto.subtle.encrypt({ name: 'RSA-OAEP' }, rsa.publicKey, enc.encode(msg));

  const ec = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']);
  await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, ec.privateKey, enc.encode(msg));

  const hmacKey = await crypto.subtle.generateKey({ name: 'HMAC', hash: 'SHA-256' }, true, ['sign', 'verify']);
  await crypto.subtle.sign('HMAC', hmacKey, enc.encode(msg));
}

// Crypto algorithms in this file: 4
// 1. AES-256-GCM  2. RSA-OAEP-2048  3. ECDSA P-256  4. HMAC-SHA256

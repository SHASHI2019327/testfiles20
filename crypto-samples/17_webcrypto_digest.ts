async function digest(algo: 'SHA-256' | 'SHA-384' | 'SHA-512', text: string): Promise<ArrayBuffer> {
  return crypto.subtle.digest(algo, new TextEncoder().encode(text));
}

export async function run(): Promise<void> {
  const a = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('x'));
  const b = await crypto.subtle.digest('SHA-384', new TextEncoder().encode('x'));
  const c = await crypto.subtle.digest('SHA-512', new TextEncoder().encode('x'));
  console.log(a.byteLength, b.byteLength, c.byteLength);
}

// Crypto algorithms in this file: 3
// 1. SHA-256  2. SHA-384  3. SHA-512

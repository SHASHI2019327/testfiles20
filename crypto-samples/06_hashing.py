import hashlib

data = b"hello world"

md5_digest = hashlib.md5(data).hexdigest()
sha1_digest = hashlib.sha1(data).hexdigest()
sha256_digest = hashlib.sha256(data).hexdigest()
sha3_digest = hashlib.sha3_256(data).hexdigest()
blake_digest = hashlib.blake2b(data).hexdigest()

if __name__ == "__main__":
    for name, d in [("md5", md5_digest), ("sha1", sha1_digest),
                    ("sha256", sha256_digest), ("sha3_256", sha3_digest),
                    ("blake2b", blake_digest)]:
        print(name, d)

# Crypto algorithms in this file: 5
# 1. MD5  2. SHA-1  3. SHA-256  4. SHA3-256  5. BLAKE2b

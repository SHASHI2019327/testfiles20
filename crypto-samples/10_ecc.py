from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import ec, ed25519, x25519


def ecdsa_sign(msg: bytes) -> bytes:
    key = ec.generate_private_key(ec.SECP256R1())
    return key.sign(msg, ec.ECDSA(hashes.SHA256()))


def ed25519_sign(msg: bytes) -> bytes:
    return ed25519.Ed25519PrivateKey.generate().sign(msg)


def x25519_exchange() -> bytes:
    a = x25519.X25519PrivateKey.generate()
    b = x25519.X25519PrivateKey.generate()
    return a.exchange(b.public_key())

# Crypto algorithms in this file: 3
# 1. ECDSA P-256 (SHA-256)  2. Ed25519  3. X25519

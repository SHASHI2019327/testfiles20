import os
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives.kdf.scrypt import Scrypt
from cryptography.hazmat.primitives.kdf.hkdf import HKDF

salt = os.urandom(16)


def derive_pbkdf2(password: bytes) -> bytes:
    return PBKDF2HMAC(algorithm=hashes.SHA256(), length=32,
                      salt=salt, iterations=600_000).derive(password)


def derive_scrypt(password: bytes) -> bytes:
    return Scrypt(salt=salt, length=32, n=2**15, r=8, p=1).derive(password)


def derive_hkdf(secret: bytes) -> bytes:
    return HKDF(algorithm=hashes.SHA256(), length=32,
                salt=salt, info=b"app-key").derive(secret)

# Crypto algorithms in this file: 3
# 1. PBKDF2-HMAC-SHA256  2. scrypt  3. HKDF-SHA256

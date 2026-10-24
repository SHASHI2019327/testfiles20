import os
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives.ciphers.aead import AESGCM, ChaCha20Poly1305


def aes_gcm_encrypt(plaintext: bytes) -> bytes:
    key = AESGCM.generate_key(bit_length=256)
    nonce = os.urandom(12)
    return nonce + AESGCM(key).encrypt(nonce, plaintext, None)


def chacha_encrypt(plaintext: bytes) -> bytes:
    key = ChaCha20Poly1305.generate_key()
    nonce = os.urandom(12)
    return nonce + ChaCha20Poly1305(key).encrypt(nonce, plaintext, None)


def fernet_encrypt(plaintext: bytes) -> bytes:
    # Fernet = AES-128-CBC + HMAC-SHA256
    return Fernet(Fernet.generate_key()).encrypt(plaintext)

# Crypto algorithms in this file: 3
# 1. AES-256-GCM  2. ChaCha20-Poly1305  3. Fernet (AES-128-CBC + HMAC-SHA256)

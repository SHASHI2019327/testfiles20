from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import rsa, padding

private_key = rsa.generate_private_key(public_exponent=65537, key_size=2048)
public_key = private_key.public_key()


def rsa_oaep_encrypt(msg: bytes) -> bytes:
    return public_key.encrypt(
        msg,
        padding.OAEP(mgf=padding.MGF1(algorithm=hashes.SHA256()),
                     algorithm=hashes.SHA256(), label=None),
    )


def rsa_pss_sign(msg: bytes) -> bytes:
    return private_key.sign(
        msg,
        padding.PSS(mgf=padding.MGF1(hashes.SHA256()),
                    salt_length=padding.PSS.MAX_LENGTH),
        hashes.SHA256(),
    )

# Crypto algorithms in this file: 2
# 1. RSA-2048-OAEP (encryption)  2. RSA-2048-PSS (signature)

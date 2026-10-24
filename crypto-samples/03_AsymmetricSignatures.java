import java.security.*;
import java.security.spec.ECGenParameterSpec;

public class AsymmetricSignatures {
    static byte[] rsaSign(byte[] msg) throws Exception {
        KeyPairGenerator kpg = KeyPairGenerator.getInstance("RSA");
        kpg.initialize(2048);
        KeyPair kp = kpg.generateKeyPair();
        Signature s = Signature.getInstance("SHA256withRSA");
        s.initSign(kp.getPrivate());
        s.update(msg);
        return s.sign();
    }

    static byte[] ecdsaSign(byte[] msg) throws Exception {
        KeyPairGenerator kpg = KeyPairGenerator.getInstance("EC");
        kpg.initialize(new ECGenParameterSpec("secp256r1"));
        KeyPair kp = kpg.generateKeyPair();
        Signature s = Signature.getInstance("SHA256withECDSA");
        s.initSign(kp.getPrivate());
        s.update(msg);
        return s.sign();
    }

    static byte[] ed25519Sign(byte[] msg) throws Exception {
        KeyPair kp = KeyPairGenerator.getInstance("Ed25519").generateKeyPair();
        Signature s = Signature.getInstance("Ed25519");
        s.initSign(kp.getPrivate());
        s.update(msg);
        return s.sign();
    }
}
// Crypto algorithms in this file: 3
// 1. RSA-2048 (SHA256withRSA)  2. ECDSA P-256 (SHA256withECDSA)  3. Ed25519

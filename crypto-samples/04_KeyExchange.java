import javax.crypto.KeyAgreement;
import java.security.*;

public class KeyExchange {
    static byte[] x25519() throws Exception {
        KeyPairGenerator kpg = KeyPairGenerator.getInstance("X25519");
        KeyPair alice = kpg.generateKeyPair();
        KeyPair bob = kpg.generateKeyPair();
        KeyAgreement ka = KeyAgreement.getInstance("X25519");
        ka.init(alice.getPrivate());
        ka.doPhase(bob.getPublic(), true);
        return ka.generateSecret();
    }

    static byte[] diffieHellman() throws Exception {
        KeyPairGenerator kpg = KeyPairGenerator.getInstance("DH");
        kpg.initialize(2048);
        KeyPair alice = kpg.generateKeyPair();
        KeyPair bob = kpg.generateKeyPair();
        KeyAgreement ka = KeyAgreement.getInstance("DH");
        ka.init(alice.getPrivate());
        ka.doPhase(bob.getPublic(), true);
        return ka.generateSecret();
    }
}
// Crypto algorithms in this file: 2
// 1. X25519 (ECDH)  2. Diffie-Hellman (DH-2048)

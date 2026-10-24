import javax.crypto.Mac;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;
import java.security.SecureRandom;

public class MacAndKdf {
    static byte[] hmac256(byte[] key, byte[] msg) throws Exception {
        Mac m = Mac.getInstance("HmacSHA256");
        m.init(new SecretKeySpec(key, "HmacSHA256"));
        return m.doFinal(msg);
    }

    static byte[] hmac512(byte[] key, byte[] msg) throws Exception {
        Mac m = Mac.getInstance("HmacSHA512");
        m.init(new SecretKeySpec(key, "HmacSHA512"));
        return m.doFinal(msg);
    }

    static byte[] pbkdf2(char[] password) throws Exception {
        byte[] salt = new byte[16];
        new SecureRandom().nextBytes(salt);
        PBEKeySpec spec = new PBEKeySpec(password, salt, 310000, 256);
        return SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256")
                .generateSecret(spec).getEncoded();
    }
}
// Crypto algorithms in this file: 3
// 1. HMAC-SHA256  2. HMAC-SHA512  3. PBKDF2-HMAC-SHA256

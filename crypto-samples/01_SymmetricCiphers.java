import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.GCMParameterSpec;
import javax.crypto.spec.IvParameterSpec;
import java.security.SecureRandom;

public class SymmetricCiphers {
    static byte[] iv(int n) { byte[] b = new byte[n]; new SecureRandom().nextBytes(b); return b; }

    static byte[] aesGcm(byte[] data) throws Exception {
        KeyGenerator kg = KeyGenerator.getInstance("AES"); kg.init(256);
        SecretKey key = kg.generateKey();
        Cipher c = Cipher.getInstance("AES/GCM/NoPadding");
        c.init(Cipher.ENCRYPT_MODE, key, new GCMParameterSpec(128, iv(12)));
        return c.doFinal(data);
    }

    static byte[] aesCbc(byte[] data) throws Exception {
        KeyGenerator kg = KeyGenerator.getInstance("AES"); kg.init(128);
        Cipher c = Cipher.getInstance("AES/CBC/PKCS5Padding");
        c.init(Cipher.ENCRYPT_MODE, kg.generateKey(), new IvParameterSpec(iv(16)));
        return c.doFinal(data);
    }

    static byte[] tripleDes(byte[] data) throws Exception {
        SecretKey key = KeyGenerator.getInstance("DESede").generateKey();
        Cipher c = Cipher.getInstance("DESede/CBC/PKCS5Padding");
        c.init(Cipher.ENCRYPT_MODE, key, new IvParameterSpec(iv(8)));
        return c.doFinal(data);
    }

    static byte[] blowfish(byte[] data) throws Exception {
        SecretKey key = KeyGenerator.getInstance("Blowfish").generateKey();
        Cipher c = Cipher.getInstance("Blowfish/CBC/PKCS5Padding");
        c.init(Cipher.ENCRYPT_MODE, key, new IvParameterSpec(iv(8)));
        return c.doFinal(data);
    }
}
// Crypto algorithms in this file: 4
// 1. AES-256-GCM  2. AES-128-CBC  3. 3DES (DESede-CBC)  4. Blowfish-CBC

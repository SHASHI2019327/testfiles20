import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;

public class HashDigests {
    static byte[] hash(String algo, String text) throws Exception {
        return MessageDigest.getInstance(algo).digest(text.getBytes(StandardCharsets.UTF_8));
    }

    public static void main(String[] args) throws Exception {
        byte[] a = MessageDigest.getInstance("MD5").digest("hello".getBytes());
        byte[] b = MessageDigest.getInstance("SHA-1").digest("hello".getBytes());
        byte[] c = MessageDigest.getInstance("SHA-256").digest("hello".getBytes());
        byte[] d = MessageDigest.getInstance("SHA-512").digest("hello".getBytes());
        byte[] e = MessageDigest.getInstance("SHA3-256").digest("hello".getBytes());
        System.out.println(a.length + b.length + c.length + d.length + e.length);
    }
}
// Crypto algorithms in this file: 5
// 1. MD5  2. SHA-1  3. SHA-256  4. SHA-512  5. SHA3-256

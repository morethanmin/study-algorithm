package boj;

import java.math.BigInteger;
import java.util.Scanner;

public class q10757 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String A = input.next();
        String B = input.next();
        System.out.println((new BigInteger(A)).add(new BigInteger(B)).toString());

    }

}

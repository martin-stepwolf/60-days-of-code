import java.util.Scanner;
import java.lang.Math;

public class RsaAlgorithmGenerator {
    public static void main(String[] args) {
        Scanner KeyBoardValue = new Scanner(System.in);

        System.out.println("RSA Algorithm");
        int p = 0;
        int q = 0;
        int e = 0;
        int k = 0;

        do {
            System.out.print("Type p (Prime number):");
            p = KeyBoardValue.nextInt();
        } while (!PrimeNumberValidate(p));

        do {
            System.out.print("Type q (Prime number):");
            q = KeyBoardValue.nextInt();
        } while (!PrimeNumberValidate(q));
        
        final int N = p * q;
        System.out.println("n = " + N);
        final int FI_OF_N = (p - 1) * (q - 1);
        System.out.println("fi of n = " + FI_OF_N);
        
        do {
            System.out.print("Type e (relative prime of fi of n):");
            e = KeyBoardValue.nextInt();
        } while (!EValidation(e, FI_OF_N));

        do {
            System.out.print("Type k (Integer greater than one):");
            k = KeyBoardValue.nextInt();
        } while (k<=1);

        final int D = (1 + (k * FI_OF_N))/e;
        System.out.println("d = " + D);
        System.out.println("Final result");
        System.out.println("Public key: (" + e + "," + N + ")");
        System.out.println("Private key: (" + D + "," + N + ")");
    }

    /**
     * Description: Validate if a number is a Prime Number
     * 
     * @param number any number to validate
     * @return true if the number is a prime number
     */
    public static boolean PrimeNumberValidate(int number) {
        if (number <= 1)
            return false;

        // TODO: Optimize the posibleOptions, it could be less
        int posibleOptions = (int) Math.floor(number / 2);
        for (int i = 2; i < posibleOptions; i++) {
            if (number % i == 0)
                return false;
        }

        return true;
    }

    /**
     * Description: Evaluate e value in the RSA algorithm
     * 
     * @param number the number chosen by the user
     * @param FI_OF_N is the product of p x q
     * @return true if number and fi of n are relative primes
     */
    public static boolean EValidation(int number, int FI_OF_N) {
        if (number <= 1 || number >= FI_OF_N)
            return false;

        // TODO: Look well the algorithm in many sources
        if (FI_OF_N % number == 0)
            return false;

        return true;
    }
}
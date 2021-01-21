package boj;

import java.util.Scanner;

public class q1712 {
    static int solution(int A, int B, int C){
        int result = 0;
        //a + b * n <= c * n 분기점이 존재하는 경우
        if(C<=B) result = -1; else
        result = A/(C-B)+1;
        return result;
    }
    public static void main(String[] args) {
        //System.out.println(solution(3,2,1));
        Scanner input = new Scanner(System.in);
        int A = input.nextInt();
        int B = input.nextInt();
        int C = input.nextInt();
        System.out.println(solution(A,B,C));
    }
}

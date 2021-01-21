package boj;

import java.util.Scanner;

public class q2292 {
    static int solution(int n){
        int result = 2;
        int count = 7;
        if(n==1){
            result = 1;
        }else {
            while (n>count){
                count = count + 6*result;
                result++;
            }
        }

        // 겹이 1일때 1
        // 겹이 2일때 7 1+6
        // 겹이 3일때 19 7+12

        return result;
    }
    public static void main(String[] args) {
        //System.out.println(solution(3,2,1));
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        System.out.println(solution(n));
        input.close();
    }
}

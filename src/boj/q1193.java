package boj;

import java.util.Scanner;

public class q1193 {
    static String solution(int n){
        String result;


        int count = 0;
        int plus = 1;
        while (n>count){
            count = count + plus;
            plus++;
            //System.out.println(count);

        }
        int z = (plus-1); //해당값은 z줄에 있다.
        int x = n - (count - z); //해당 줄 바로 전줄만큼 뺀다.
        int y = z - (x-1); //전줄만큼 뺀 값에서 z만큼 이동한다.
        //System.out.println(x);
        //System.out.println(y);
        if(z%2 == 0) result = x+ "/" + y;
        else result = y+ "/" + x;

        //System.out.println(plus-1);

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

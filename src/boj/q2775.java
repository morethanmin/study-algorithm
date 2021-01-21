package boj;

import java.util.Scanner;

public class q2775 {
    static int solution(int a, int b){
       // int result = 0;
        int apart[][] = new int[15][15]; // []층[]호

        for(int i=0; i<15; i++){
            apart[i][1]=1; //i층 1호는 1
            apart[0][i]=i; //0층 i호는 i
        }

        for (int y=1; y<15; y++){
            for (int x=2; x<15; x++){
                apart[y][x] = apart[y][x-1] + apart[y-1][x];
            }
        }
        return apart[a][b];
    }
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int T = input.nextInt();
        for(int i=0; i<T; i++){
            int k = input.nextInt(); // k(a)층
            int n = input.nextInt(); // n(b)호
            System.out.println(solution(k,n));
        }
    }

}

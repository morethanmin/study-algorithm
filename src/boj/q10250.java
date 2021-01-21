package boj;


import java.util.Scanner;

public class q10250 {

    static int solution(int H, int W, int N){
        int result=0;
        int count = 1;

        int x = N/H + 1;
        int y = N%H;

        return y*100+x;
    }
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int T = input.nextInt(); // testcase

        for (int i=0; i<T; i++){
            int H = input.nextInt(); // 호텔의 층 수
            int W = input.nextInt(); // 각 층의 방 수
            int N = input.nextInt(); // 손님의 수
            System.out.println(solution(H, W, N));
        }
        input.close();
    }
}

package cospro2_2;

public class q3 {
    static int solution(int N, int M){
        int result = 0;
        for(int i=N; i<=M; i++){
            if(i%2==0){
                result += i*i;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(solution(4,7));
    }
}

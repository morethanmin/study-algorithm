package cospro2_1;

public class q10 {
    public static int solution(int[] data){
        double  middle=0;
        int result=0;
        for (int i: data
             ) {
            middle += i;
        }
        middle = middle/data.length;
        System.out.println(middle);
        for (int i: data
        ) {
            if(i<middle)
                result++;
        }

        return result;
    }

    public static void main(String[] args) {
        System.out.println(solution(new int[] { 1, 1, 1, 1, 1, 1, 1, 1, 10}));
    }
}

package cospro2_2;

public class q6 {
    static int solution(int floors[]){
        int result = 0;
        for (int i=0; i<floors.length-1; i++) {

            result += Math.abs(floors[i+1]-floors[i]);
        }
        return result;
    }
    public static void main(String[] args) {

        System.out.println(solution(new int[]{1,2,5,4,2}));
    }
}

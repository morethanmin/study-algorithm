package cospro2_2;

public class q5 {

    static int solution(int attack, int recovery, int hp){
        int result = 0;
        result = hp/(attack-recovery);
        if(hp%(attack-recovery)>0){
            result++;
        }
        return result;
    }
    public static void main(String[] args) {
        System.out.println(solution(31,10,60));
    }
}

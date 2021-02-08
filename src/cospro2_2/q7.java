package cospro2_2;

public class q7 {
    static int solution(int value, String unit){
        int result = 0;
        if(unit == "C")
            result = (int)((value * 1.8 ) + 32);
        else
            result = (int)((value - 32) / 1.8);

        return result;
    }

    public static void main(String[] args) {
        System.out.println(solution(527,"C"));
    }
}

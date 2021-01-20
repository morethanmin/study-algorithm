package cospro2;

public class q2 {

    public static int solution(int price, String grade){
        int result = 0;
        if(grade == "S")
            result = (int)(price*0.95);
        if(grade == "G")
            result = (int)(price*0.90);
        if(grade == "V")
            result = (int)(price*0.85);
        return result;
    }
    public static void main(String[] args){
        System.out.println(solution(2500,"V"));
    }
}
